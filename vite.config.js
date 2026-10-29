import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  define: {
    "process.env": {},
  },
  build: {
    lib: {
      entry: "src/vue/index.js",
      name: "BootstrapTable",
      fileName: (format) => {
        return format === "umd"
          ? "bootstrap-table-vue.umd.js"
          : "bootstrap-table-vue.js"
      },
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    emptyOutDir: false,
  },
  plugins: [vue()],
})
