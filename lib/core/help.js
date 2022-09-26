const helpOptions = (program) => {
  // 定义自己的option
  program.option("-a abean", "a abean cli");
  program.option(
    "-d --dest <dest>",
    "a destionation folder, eg:-d /src/component"
  );
  program.option("-f --framwork <framwork>", "your framwork, eg: vue");

  program.on("--help", () => {
    console.log(help);
  });
};

module.exports = helpOptions;
