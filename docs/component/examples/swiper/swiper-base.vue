<template>
	<demo-container class="gov-demo-swiper">
		<gov-swiper navigation pagination autoplay>
			<gov-swiper-slide>Slide 1</gov-swiper-slide>
			<gov-swiper-slide>Slide 2</gov-swiper-slide>
			<gov-swiper-slide>Slide 3</gov-swiper-slide>
			<gov-swiper-slide>Slide 4</gov-swiper-slide>
			<gov-swiper-slide>Slide 5</gov-swiper-slide>
		</gov-swiper>
	</demo-container>
</template>

<script setup>
defineOptions({
	name: "swiperBase",
});
</script>

<style lang="scss">
@import "./style.scss";
</style>
