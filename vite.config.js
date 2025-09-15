import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	base: "./",
	build: {
		outDir: "dist",
		assetsDir: "assets",
		sourcemap: false,
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/assets/sass/_variables" as *;`,
			},
		},
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
});
