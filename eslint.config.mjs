import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import prettierConfig from "@vue/eslint-config-prettier";

export default [
	{
		files: ["**/*.{js,mjs,cjs,vue}"],
		env: {
			browser: true,
			node: true, // 添加 node 环境
		},
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
