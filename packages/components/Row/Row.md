---
outline: deep
---

# Row and Col 栅格化

通过基础的 24 分栏，迅速简便地创建布局。


<gov-row :gutter="20">
	<gov-col :span="6"><div>Column 1</div></gov-col>
	<gov-col :span="6" :offset="6"><div>Column 2</div></gov-col>
	<gov-col :span="6"><div>Column 3</div></gov-col>
</gov-row>


<gov-row  justify="center" :gutter="20">
	<gov-col :span="6"><div>Column 1</div></gov-col>
	<gov-col :span="6"><div>Column 2</div></gov-col>
	<gov-col :span="6"><div>Column 3</div></gov-col>
</gov-row>
