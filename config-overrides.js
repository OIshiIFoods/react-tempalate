const { override, addWebpackAlias, fixBabelImports } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    // 指定@符指向src目录
    "@": path.resolve(__dirname, "src"),
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    // true 代表用 less, css 代表用 css
    style: "css",
  })
);
