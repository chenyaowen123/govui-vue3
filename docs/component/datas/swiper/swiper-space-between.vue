<template>
	<demo-container class="gov-demo-swiper">
		<gov-swiper navigation :slides-per-view="2" space-between="50">
			<gov-swiper-slide>Slide 1</gov-swiper-slide>
			<gov-swiper-slide>Slide 2</gov-swiper-slide>
			<gov-swiper-slide>Slide 3</gov-swiper-slide>
			<gov-swiper-slide>Slide 4</gov-swiper-slide>
			<gov-swiper-slide>Slide 5</gov-swiper-slide>
			<gov-swiper-slide>Slide 6</gov-swiper-slide>
		</gov-swiper>
	</demo-container>
</template>

<script setup>
defineOptions({
	name: "swiperSpaceBetween",
});
</script>
<style lang="scss">
@use "./style.scss";
</style>
