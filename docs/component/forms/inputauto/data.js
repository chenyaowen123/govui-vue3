export const fruits = [
	"Apple",
	"Banana",
	"Cherry",
	"Date",
	"Elderberry",
	"Fig",
	"Grape",
	"Honeydew",
	"Kiwi",
	"Lemon",
	"Mango",
	"Nectarine",
	"Orange",
	"Papaya",
	"Quince",
	"Raspberry",
	"Strawberry",
	"Tomato",
	"Ugli fruit",
	"Vanilla",
	"Watermelon",
	"Xigua",
	"Yumberry",
	"Zucchini",
];

export const fruitInfos = fruits.map((item) => ({
	value: item,
	label: item.toUpperCase(),
}));
