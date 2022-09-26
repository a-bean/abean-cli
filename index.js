#!/usr/bin/env node
const program = require("commander");
const helpOptions = require("./lib/core/help");
const createCommands = require("./lib/core/create");

// 查看版本号
program.version(require("./package.json").version);

// option 配置
helpOptions(program);

// 创建指令
createCommands(program);
program.parse(process.argv);
