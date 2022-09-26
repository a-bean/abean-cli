const { spawn } = require("child_process");
const commandSpawn = (command, args, option) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(command, args, option);
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    childProcess.on("close", () => {
      resolve();
    });
  });
};
module.exports = { commandSpawn };
