import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import prettierConfig from "@vue/eslint-config-prettier";

export default [
	{
		files: ["**/*.{js,mjs,cjs,vue}"] ,
		excludeFiles: ["**/build/", "**/node_modules/", ".vitepress/", "docs/"],
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...pluginVue.configs["flat/essential"],
	prettierConfig,
	{
		rules: {
			indent: ["error", "tab", { SwitchCase: 1 }],
			"vue/multi-word-component-names": "off",
		},
	},
];
