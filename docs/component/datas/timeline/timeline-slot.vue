<template>
	<demo-container>
		<gov-timeline>
			<gov-timeline-item center timestamp="唐/公元745年" placement="top">
				<div class="demo-timesline__card">
					<div class="demo-timesline__card-title">赠李白</div>
					<div>作者：杜甫</div>
					<div>
						秋来相顾尚飘蓬， 未就丹砂愧葛洪。<br />
						痛饮狂歌空度日， 飞扬跋扈为谁雄。
					</div>
				</div>
			</gov-timeline-item>
			<gov-timeline-item center timestamp="南宋" placement="top">
				<div class="demo-timesline__card">
					<div class="demo-timesline__card-title">古人学问无遗力</div>
					<div>作者：陆游</div>
					<div>
						古人学问无遗力，少壮工夫老始成。<br />
						纸上得来终觉浅，绝知此事要躬行。
					</div>
				</div>
			</gov-timeline-item>
			<gov-timeline-item center timestamp="唐代" placement="top">
				<div class="demo-timesline__card">
					<div class="demo-timesline__card-title">出塞</div>
					<div>作者：王昌龄</div>
					<div>
						秦时明月汉时关，万里长征人未还。<br />
						但使龙城飞将在，不教胡马度阴山。
					</div>
				</div>
			</gov-timeline-item>
			<gov-timeline-item timestamp="唐代" placement="top">
				<div class="demo-timesline__card">
					<div class="demo-timesline__card-title">枫桥夜泊</div>
					<div>作者：张继</div>
					<div>
						月落乌啼霜满天，江枫渔火对愁眠。<br />
						姑苏城外寒山寺，夜半钟声到客船。
					</div>
				</div>
			</gov-timeline-item>
		</gov-timeline>
	</demo-container>
</template>

<style lang="scss">
.demo-timesline__card {
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #f1f1f1;
	box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
	font-size: 14px;
	&-title {
		font-size: 16px;
	}
}
</style>
