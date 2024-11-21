<template>
	<demo-container>
		<gov-row>
			<gov-col :span="6">
				<gov-result
					type="success"
					title="成功提示"
					description="请根据提示进行操作"
				/>
			</gov-col>
			<gov-col :span="6">
				<gov-result
					type="info"
					title="成功提示"
					description="请根据提示进行操作"
				/>
			</gov-col>
			<gov-col :span="6">
				<gov-result
					type="warning"
					title="成功提示"
					description="请根据提示进行操作"
				/>
			</gov-col>
			<gov-col :span="6">
				<gov-result
					type="danger"
					title="成功提示"
					description="请根据提示进行操作"
				/>
			</gov-col>
		</gov-row>
	</demo-container>
</template>

<script setup></script>
