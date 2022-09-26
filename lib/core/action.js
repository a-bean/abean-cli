const { promisify } = require("util");
const path = require("path");
const download = promisify(require("download-git-repo"));
const { vueRepo } = require("../config/repo-config");
const { commandSpawn } = require("../utils/terminal");
const open = require("open");
const { compile, writeToFile, createDirSync } = require("../utils/utils");

/* 创建项目 */
const createProjectAction = async (project, other) => {
  const command = process.platform === "win32" ? "pnpm.cmd" : "pnpm";

  // 1.clone project
  console.log("Start creating your project!!!");
  const res = await download(vueRepo, project, { clone: true });
  if (res) {
    console.log("create project fail");
    return;
  }
  return;

  // 2.run: pnpm install
  console.log("The project is installing dependencies!!!");
  await commandSpawn(command, ["install"], { cwd: `./${project}` });

  // 3.run: pnpm run dev
  console.log("Projects being started!!!");
  commandSpawn(command, ["dev"], { cwd: `./${project}` });

  // 4.open browser
  open("http://127.0.0.1:5173/ ");
};
/* 创建组件 */
const addCpnAction = async (name, dest) => {
  // 1.编译ejs模板 result
  const result = await compile("vue-component.ejs", {
    name,
    lowerName: name.toLowerCase(),
  });

  // 2.写入文件的操作
  const targetPath = path.resolve(dest, `${name}.vue`);
  console.log(targetPath);
  writeToFile(targetPath, result);
};

module.exports = { createProjectAction, addCpnAction };
