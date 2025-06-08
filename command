import path from 'path';
import "./bootstrap/app.js";
import createCommandManager from './Core/CommandManager.js';

(async function () {

    const commandsDir = path.join(CONSTANTS.DIR, 'app', 'Commands');

    const commander = await createCommandManager(commandsDir);

    commander.execute();

})();
