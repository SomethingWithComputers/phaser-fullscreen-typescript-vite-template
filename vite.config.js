import * as path from "path";
import {defineConfig} from "vite";

export default defineConfig({
    build: {
        assetsInlineLimit: 0,
        outDir: "../build",
        emptyOutDir: true,
        // sourcemap: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
    envDir: "../",
    publicDir: "../public",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    root: "./html",
});