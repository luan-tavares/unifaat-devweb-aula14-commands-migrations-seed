import minimist from "minimist";
import { readdir } from 'fs/promises';
import path from "path";

import sequelize from "../config/sequelize.js";
import chalk from "chalk";
import CliTable3 from "cli-table3";

export function CommandManager(dir) {

    const listCommands = async () => {
        const files = await readdir(dir);
        const commands = [];

        for (const file of files) {
            if (!file.endsWith('.js')) continue;

            const mod = await import(path.join(dir, file));
            const commandData = mod.default;
            commands.push([commandData.name || "default", commandData]);
        }

        commands.sort((a, b) => a[0].localeCompare(b[0]));

        return Object.fromEntries(commands);
    }

    const [, , commandName, ...rawArgs] = process.argv;
    const args = minimist(rawArgs);
    delete args["_"];

    const defaultCommand = async (commands) => {
        console.log(chalk.bold('\nAvailable commands:\n'));

        const table = new CliTable3({
            head: [chalk.white('Command'), chalk.white('Description')],
            colWidths: [30, 60],
            style: {
                head: [],
                border: []
            }
        });

        for (const cmd of Object.values(commands)) {
            table.push([
                chalk.green(cmd.name),
                chalk.gray(cmd.description)
            ]);
        }

        console.log(table.toString());
    }

    this.execute = async () => {

        const commands = await listCommands();

        if (!commandName) {
            defaultCommand(commands);
            return;
        }

        const command = commands[commandName];

        if (!command) {
            console.error(`Command "${commandName}" not found.`);
            process.exit(1);
        }

        try {
            await command.handle(args);
        } catch (error) {
            console.error('Error running command:', error);
            process.exit(1);
        } finally {
            await sequelize.close();
        }

    }

}