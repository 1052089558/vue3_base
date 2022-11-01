import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path, { resolve } from "path";

// const pathResolve = (dir: string): any => {
//   return resolve(__dirname, ".", dir)
// }

// const alias: Record<string, string> = {
//   '@': pathResolve("./src")
// }
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // './'解决打包后访问空白页面的问题
  base: "./",
  // 打包配置
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // 引入全局基础less
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       modifyVars: {
  //         hack: `true; @import (reference) "${path.resolve(
  //           "src/assets/base.less"
  //         )}";`,
  //       },
  //       javascriptEnabled: true,
  //     },
  //   },
  // },
  build: {
    outDir: "dist", //指定输出路径
    assetsDir: "assets", // 指定生成静态资源的存放路径
    minify: "terser", // 混淆器，terser构建后文件体积更小
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
