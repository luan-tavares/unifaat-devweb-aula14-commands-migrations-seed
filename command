#!/usr/bin/env node

import path from 'path';
import "./bootstrap/app.js";
import { CommandManager } from './Core/CommandManager.js';

(function () {

    const commandsDir = path.join(CONSTANTS.DIR, 'app', 'Commands');

    const commander = new CommandManager(commandsDir);

    commander.execute();

})();
