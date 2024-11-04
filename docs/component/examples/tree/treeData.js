const treeData = [
	{
		id: "1",
		label: "Node 1",
		desc: "树木",
		children: [
			{
				id: "1-1",
				label: "Node 1-1",
				desc: "松树",
				children: [
					{ id: "1-1-1", label: "Node 1-1-1", desc: "小叶松树" },
					{ id: "1-1-2", label: "Node 1-1-2", desc: "东北大果松" },
				],
			},
			{
				id: "1-2",
				label: "Node 1-2",
				desc: "杨树",
				children: [
					{ id: "1-2-1", label: "Node 1-2-1", desc: "小白杨" },
				],
			},
		],
	},
	{
		id: "2",
		label: "Node 2",
		desc: "小草",
		children: [
			{
				id: "2-1",
				label: "Node 2-1",
				desc: "忘忧草",
			},
			{
				id: "2-2",
				label: "Node 2-2",
				desc: "兰草",
				children: [
					{ id: "2-2-1", label: "Node 2-2-1", desc: "小叶兰草" },
					{ id: "2-2-2", label: "Node 2-2-2", desc: "长根茎兰草" },
				],
			},
		],
	},
	{
		id: "3",
		label: "Node 3",
		desc: "灌木",
	},
];

export default treeData;
