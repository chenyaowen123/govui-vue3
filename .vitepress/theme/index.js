// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import MyLayout from "./component/MyLayout.vue";
import demoContainer from "./component/demoContainer.vue";
import "./style.css";
import "./custom.css";
import "./demoContentStyle.scss";

// dev 开发时调试使用
// 注意：组件库和vitepress稳定本身是两个项目，各自管理各自的package.json，所以如果要打开此处调试，
// 需要将 package/package.json[dependencies] 选项复制到根目录 vitepress 项目的package.json里，
// 否则直接引入，会提示找不到第三方插件。
// 暂时不需要开发调试，留待后期设置环境变量，拓展命令来做开发和测试。
// import GovUI from "@/index";

// text 测试打包后的
import GovUI from "@/dist/index";
import "@/dist/styles/index.css";


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
