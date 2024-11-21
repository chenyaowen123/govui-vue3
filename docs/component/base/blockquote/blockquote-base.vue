<template>
	<demo-container>
		<gov-blockquote> {{ content }} </gov-blockquote>
		<gov-blockquote type="primary">{{ content }} </gov-blockquote>
		<gov-blockquote type="success">{{ content }} </gov-blockquote>
		<gov-blockquote type="info">{{ content }} </gov-blockquote>
		<gov-blockquote type="warning">{{ content }} </gov-blockquote>
		<gov-blockquote type="danger">{{ content }} </gov-blockquote>
	</demo-container>
</template>

<script setup>
const content = `轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。`;
</script>
