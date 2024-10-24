<script setup>
import datepickerBase from "./examples/datepicker/datepicker-base.vue"
import datepickerSize from "./examples/datepicker/datepicker-size.vue"
import datepickerDisable from "./examples/datepicker/datepicker-disabled.vue"
import datepickerDatetime from "./examples/datepicker/datepicker-datetime.vue"
import datepickerRange from "./examples/datepicker/datepicker-range.vue"
import datepickerRangeTwo from "./examples/datepicker/datepicker-range2.vue"

import datepickerTimeOne from "./examples/datepicker/datepicker-time1.vue"
import datepickerTimeTwo from "./examples/datepicker/datepicker-time2.vue"
import datepickerTimeRange from "./examples/datepicker/datepicker-time-range.vue"

import datepickerTimeWeek from "./examples/datepicker/datepicker-time-week.vue"
import datepickerTimeMonth from "./examples/datepicker/datepicker-time-month.vue"
import datepickerTimeYear from "./examples/datepicker/datepicker-time-year.vue"

</script>

# DatePicker 日期选择

用于日期、时间相关的表单。

## 相关文档

- [Vue Datepicker](https://vue3datepicker.com/)
- [Vue Datepicker Documents](https://vue3datepicker.com/installation/)
<!-- - [date-fns](https://date-fns.org/) -->

## 基本使用

<datepickerBase />

```vue
<template>
	<gov-datepicker v-model="dateValue" format="yyyy-MM-dd" placeholder="请选择日期"/>
</template>

<script setup>
import { ref } from "vue";
const dateValue = ref("2024-10-01");
</script>
```

## 设置尺寸

<datepickerSize />

```vue
<template>
	<gov-datepicker v-model="dateValue" format="yyyy-MM-dd" size="large"/>
	<gov-datepicker v-model="dateValue" format="yyyy-MM-dd"/>
	<gov-datepicker v-model="dateValue" format="yyyy-MM-dd" size="small"/>
</template>

<script setup>
import { ref } from "vue";
const dateValue = ref("2024-10-01");
</script>
```


## 禁用过去/未来

<datepickerDisable />

```vue
<template>
	<gov-datepicker
		v-model="dateValue"
		placeholder="请选择日期"
		format="yyyy-MM-dd"
		:min-date="new Date('2024-10-1')"
		:max-date="new Date('2024-10-31')"
	/>
</template>

<script setup>
import { ref } from "vue";
const dateValue = ref("2024-10-01");
</script>
```

## 日期时间选择器

<datepickerDatetime />

```vue
<template>
	<gov-datepicker
		v-model="dateValue"
		placeholder="请选择日期"
		format="yyyy-MM-dd HH:mm:ss"
		showTime
		enableSeconds
	/>
</template>

<script setup>
import { ref } from "vue";
const dateValue = ref("2024-10-10 12:00:35");
</script>
```


## 日期范围选择器

<datepickerRange />

```vue
<template>
	<gov-datepicker
		range
		v-model="rangeValue"
		placeholder="请选择日期"
		format="yyyy-MM-dd"
	/>
</template>

<script setup>
import { ref } from "vue";
const rangeValue = ref(["2024-10-01", "2024-10-05"]);
</script>
```

## 双面板日期范围

<datepickerRangeTwo />

```vue
<template>
	<gov-datepicker
		range
		multi-calendars
		v-model="rangeValue"
		placeholder="请选择日期"
		format="yyyy-MM-dd"
	/>
</template>

<script setup>
import { ref } from "vue";
const rangeValue = ref(["2024-10-01", "2024-10-05"]);
</script>
```


## 时分选择

<datepickerTimeOne />

```vue
<template>
	<gov-datepicker
		v-model="timeValue"
		mode="time"
		format="HH:mm"
		showTime
		placeholder="请选择"
	/>
</template>

<script setup>
import { ref } from "vue";
const timeValue = ref("23:45");
</script>
```

## 时分秒选择

<datepickerTimeTwo />

```vue
<template>
	<gov-datepicker
		v-model="timeValue"
		mode="time"
		format="HH:mm:ss"
		showTime
		enable-seconds
		placeholder="请选择"
	/>
</template>

<script setup>
import { ref } from "vue";
const timeValue = ref("23:45:20");
</script>
```



## 时分秒范围选择器

<datepickerTimeRange />

```vue
<template>
	<gov-datepicker
		v-model="timeValue"
		format="HH:mm:ss"
		mode="time"
		show-time
		range
		enable-seconds
		placeholder="请选择"
	/>
</template>

<script setup>
import { ref } from "vue";
const timeValue = ref(["16:45:12", "23:45:20"]);
</script>
```

## 周选择器

<datepickerTimeWeek />

```vue
<template>
	<gov-datepicker
		v-model="weekValue"
		mode="week"
		format="yyyy年 第ww周"
		placeholder="请选择"
	/>
</template>

<script setup>
import { ref } from "vue";
const weekValue = ref([]);
</script>
```



## 月选择器

<datepickerTimeMonth />

```vue
<template>
	<gov-datepicker
		v-model="monthValue"
		mode="month"
		format="yyyy-MM"
		placeholder="请选择"
	/>
</template>

<script setup>
import { ref } from "vue";
const monthValue = ref("2024-10");
</script>
```


## 年选择器

<datepickerTimeYear />

```vue
<template>
	<gov-datepicker
		v-model="yearValue"
		mode="year"
		format="yyyy"
		placeholder="请选择"
	/>
</template>

<script setup>
import { ref } from "vue";
const yearValue = ref("2024");
</script>
```








## DatePicker


*更多使用 `API` 请参考 [官方文档](https://vue3datepicker.com/)*

参数 | 说明 | 类型 | 默认值
-- | -- | -- | --
width | 日期选择器宽度，单位 `px` | number | 180
mode | 选择器模式 | 'time' &#124; 'date' &#124; 'week' &#124; 'month' &#124; 'year' | 'date'
[format](#format-占位符) | 日期展示格式 | string &#124; ((date: Date) => string) &#124; ((dates: Date[]) => string) | [DefaultFormat](#Defaultformat-value)
showTime | 是否增加时间选择 | boolean | false
showToday | 是否展示”今天“按钮 | boolean | false
modelValue <Tag color="cyan">v-model</Tag> | 双向绑定值 | number &#124; string &#124; object &#124; array | null
modelType | `v-model` 值类型，可选 `timestamp`: 时间戳、`format`: 字符串，`mode` 为 `week` 或 `year` 时，该配置不生效 | 'timestamp' &#124; 'format' | 'format'

## DefaultFormat-Value

类型 | 值
--- | ---
Single picker | 'MM/dd/yyyy HH:mm'
Range picker | 'MM/dd/yyyy HH:mm - MM/dd/yyyy HH:mm'
Month picker | 'MM/yyyy'
Time picker | 'HH:mm'
Time picker range | 'HH:mm - HH:mm'
Week picker | 'ww-yyyy'

## format-占位符

标识 | 示例 | 描述
-- | -- | --
yy | 23 | 年，两位数
yyyy | 2023 | 年，四位数
M | 1-12 | 月
MM | 01-12 | 月，两位数
d | 1-31 | 日
dd | 01-31 | 日，两位数
H | 0-23 | 小时
HH | 00-23 | 小时，两位数
m | 0-59 | 分钟
mm | 00-59 | 分钟，两位数
s | 0-59 | 秒
ss | 00-59 | 秒，两位数
w | 1-52 | 第几周
ww | 01-52 | 第几周，两位数
