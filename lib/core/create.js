const { createProjectAction, addCpnAction } = require("./action");
const createCommands = (program) => {
  // 创建项目命令
  program
    .command("create <project> [other...]")
    .description("create project")
    .action(createProjectAction);

  // 新建组件
  program
    .command("addcpn <cpnname>")
    .description(
      "add vue3 component, eg: abean addcpm hello-word.vue -d src/components"
    )
    .action((name) => {
      addCpnAction(name, program.dest || "src/components");
    });
};

module.exports = createCommands;
