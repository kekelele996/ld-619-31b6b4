#!/usr/bin/env node
import { Command } from "commander";
import { runCommand } from "./commands/run";
import { inspectCommand } from "./commands/inspect";
import { rulesCommand } from "./commands/rules";
import { reportCommand } from "./commands/report";
const program = new Command();
program.name("mask-cli").description("离线数据脱敏批处理 CLI").version("0.1.0");
program.addCommand(runCommand);
program.addCommand(inspectCommand);
program.addCommand(rulesCommand);
program.addCommand(reportCommand);
program.parse();
