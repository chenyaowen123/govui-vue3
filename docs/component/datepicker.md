<script setup>
import datepickerBase from "./examples/datepicker/datepicker-base.vue"
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
