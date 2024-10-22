<template>
	<Swiper v-bind="$attrs" :modules="modules" class="gov-swiper">
		<slot />
		<template #container-start>
			<slot name="container-start" />
		</template>
		<template #container-end>
			<slot name="container-end" />
		</template>
		<template #wrapper-start>
			<slot name="wrapper-start" />
		</template>
		<template #wrapper-end>
			<slot name="wrapper-end" />
		</template>
	</Swiper>
</template>

<script setup>
import { Swiper } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./swiper.scss";
defineOptions({
	name: "GovSwiper",
});
const modules = [Navigation, Pagination, Scrollbar, Autoplay];
</script>
