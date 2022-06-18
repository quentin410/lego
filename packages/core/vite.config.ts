import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createStyleImportPlugin, AntdResolve } from "vite-plugin-style-import";
export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      resolves: [AntdResolve()],
      // libs: [
      //   {
      //     libraryName: "antd",
      //     esModule: true,
      //     resolveStyle: (name) => {
      //       return `antd/es/${name}/style/index`;
      //     },
      //   },
      // ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
