export default [
	{
		title: "名字",
		width: 100,
		dataIndex: "name",
	},
	{
		title: "年龄",
		width: 80,
		dataIndex: "age",
		sort: "none",
		format: (age) => age + "岁",
	},
	{
		title: "职业",
		width: 150,
		dataIndex: "job",
	},
	{
		title: "性别",
		width: 80,
		dataIndex: "sex",
		align: "center",
		format: (sex) => (sex === 1 ? "男" : "女"),
	},
	{
		title: "地址",
		dataIndex: "address",
	},
];
