vercel 发布文档
git push github master    同步到github
在packages下执行 npm publish   发布,


## 命令备注

### 1、packages 组件库的命令备注。

```json
"scripts": {
    "build": "vite build",	// 打包组件库
	"prepublishOnly": "npm run build"	// npm publish  发布插件之前执行的命令
},
```

发布版本命令，发布之前先修改好 package.json 下的版本。

```bash
npm publish
```

### 2、文档项目的命令备注

```json
"scripts": {
	// 本地运行，前提是需要 packages 组件库编译获得 dist 用于文档里的组件引入
	"docs:dev": "vitepress dev",
	// 文档系统打包前先执行组件库安装和打包，以备 vitepress 编译使用
	"predocs:build": "cd packages && yarn && yarn build",
	// vitepress 编译
	"docs:build": "vitepress build",
	"docs:preview": "vitepress preview"
},
```

### 3、发布文档系统

文档地址（govui.cc）；

尽管 vercel 是连着 github，但是仍然可以在本地项目根目录执行，会是本地内容上传发布。

```bash
vercel --prod
```

## 仓库

项目提交于阿里云的 codeup 仓库，同步于github，因为 codeup快，因为没有 jenkins 之类的，所以都是在版本迭代以后，手动同步，因为用的也不是 github，所以不是必须的。

默认链接的是 codeup，同步 github 命令是

```bash
git push github master
```
