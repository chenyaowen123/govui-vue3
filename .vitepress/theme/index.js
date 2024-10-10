// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import MyLayout from "./component/MyLayout.vue";
import demoContainer from "./component/demoContainer.vue";
import "./style.css";
import "./custom.css";
import "./demoContentStyle.scss";

import GovUI from "../../packages/index";

/** @type {import('vitepress').Theme} */
export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(MyLayout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		});
	},
	// enhanceApp({ app, router, siteData }) {},
	enhanceApp({ app }) {
		app.use(GovUI);
		app.component("DemoContainer", demoContainer);
	},
};
