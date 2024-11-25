export default [
	{
		value: "community",
		label: "社区中心",
		children: [
			{
				value: "administration",
				label: "社区管理",
				children: [
					{
						value: "community_manager",
						label: "社区经理",
					},
					{
						value: "community_assistant",
						label: "社区助理",
					},
				],
			},
			{
				value: "services",
				label: "社区服务",
				children: [
					{
						value: "security",
						label: "安保服务",
					},
					{
						value: "cleaning",
						label: "清洁服务",
					},
					{
						value: "maintenance",
						label: "维修服务",
					},
				],
			},
			{
				value: "amenities",
				label: "社区设施",
				children: [
					{
						value: "parking",
						label: "停车场",
					},
					{
						value: "gym",
						label: "健身房",
					},
					{
						value: "swimming_pool",
						label: "游泳池",
					},
				],
			},
		],
	},
	{
		value: "residents",
		label: "居民区",
		children: [
			{
				value: "building_a",
				label: "A区",
			},
			{
				value: "building_b",
				label: "B区",
			},
			{
				value: "building_c",
				label: "C区",
			},
		],
	},
	{
		value: "activities",
		label: "社区活动",
		children: [
			{
				value: "sports",
				label: "体育活动",
			},
			{
				value: "culture",
				label: "文化活动",
			},
			{
				value: "charity",
				label: "慈善活动",
			},
		],
	},
	{
		value: "committees",
		label: "社区委员会",
		children: [
			{
				value: "environment",
				label: "环保委员会",
			},
			{
				value: "safety",
				label: "安全委员会",
			},
			{
				value: "events",
				label: "活动委员会",
			},
		],
	},
	{
		value: "disabled",
		label: "不可用区域",
		disabled: true,
		children: [
			{
				value: "under-maintenance",
				label: "维护中",
			},
		],
	},
];
