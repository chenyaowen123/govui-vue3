# MessageBox 弹窗

基于 ```Dialog``` 组件，通过该组件，可以不用书写组件，快速调用 ```Alert``` 和 ```Confirm```。

如果需要更复杂的逻辑结构，建议使用 ```Dialog``` 组件。

<script setup>
import {ref} from "vue"
import {GovMessageBox} from "../../../../packages/index.js";

const handleAlert = ()=>{
	GovMessageBox.alert({
		title:"友情提醒",
		content:"您正在访问GovUI，祝您心情愉快！"
	}).then(()=>{
		console.log("点击了确定！");
	}).catch((err)=>{
		console.log("点击了关闭！");
	})
}


const action = ref("")
const handleConfirm = ()=>{
	GovMessageBox.confirm({
		title:"请您确认",
		content:"你当前正在访问GovUI吗？"
	}).then(()=>{
		action.value="你点击了确定！";
	}).catch((err)=>{
		action.value="你点击了取消/关闭！";
	})
}

const handleQuickAlert=()=>{
	GovMessageBox.alert('更加简洁的Alert！');
}
const handleQuickConfirm=()=>{
	GovMessageBox.confirm('更加简洁的Confirm！');
}
</script>


## 基础用法 Alert

<demo-container class="demo-gov-form">
<gov-button @click="handleAlert">点击弹出Alert</gov-button>
</demo-container>

```md
<gov-button @click="handleAlert">点击弹出Alert</gov-button>

<script setup>
import { GovMessageBox } from "gov-ui";
const handleAlert = ()=>{
	GovMessageBox.alert({
		title:"友情提醒",
		content:"您正在访问GovUI，祝您心情愉快！"
	}).then(()=>{
		console.log("点击了确定！");
	}).catch((err)=>{
		console.log("点击了关闭！");
	})
}
</script>
```

## 确认消息 Confirm

<demo-container class="demo-gov-form">
<gov-button @click="handleConfirm">点击弹出Confirm</gov-button>
&nbsp;&nbsp;&nbsp;&nbsp;
<span>你的操作:{{ action }}</span>
</demo-container>

```md

<gov-button @click="handleConfirm">点击弹出Confirm</gov-button>
<span> 你的操作:{{ action }}</span>

<script setup>
import {ref} from "vue"
import { GovMessageBox } from "gov-ui";
const action = ref("还没操作！")

const handleConfirm = ()=>{
	GovMessageBox.confirm({
		title:"请您确认",
		content:"你当前正在访问GovUI吗？"
	}).then(()=>{
		action.value="你点击了确定！";
	}).catch((err)=>{
		action.value="你点击了取消/关闭！";
	})
}
</script>
```


## 简写方式

如果你的弹出相对简单，你也可以直接传递一个字符串。

<demo-container class="demo-gov-form">
<gov-button @click="handleQuickAlert">点击弹出Alert</gov-button>
<gov-button @click="handleQuickConfirm">点击弹出Confirm</gov-button>
</demo-container>

```md
<gov-button @click="handleQuickAlert">点击弹出Alert</gov-button>
<gov-button @click="handleQuickConfirm">点击弹出Confirm</gov-button>

<script setup>
import { GovMessageBox } from "gov-ui";
const handleQuickAlert=()=>{
	GovMessageBox.alert('更加简洁的Alert！');
}
const handleQuickConfirm=()=>{
	GovMessageBox.confirm('更加简洁的Confirm！');
}
</script>
```
