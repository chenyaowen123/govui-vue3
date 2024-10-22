// 利用 MutationObserver 监听dom变化，动态计算td的定位
// 可以改造为业务层关闭和开启，这样可以在外层节约性能
import { ref, onMounted, onUnmounted } from "vue";

export function useStickyTable(tableEl) {
	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.type === "childList") {
				updateStickyStyles();
			}
		});
	});

	const updateStickyStyles = () => {
		// 获取定位元素，没有则退出
		const leftColumns = tableEl.value?.querySelectorAll(
			"thead tr th.gov-table-column--fixed-left",
		);
		const rightColumns = tableEl.value?.querySelectorAll(
			"thead tr th.gov-table-column--fixed-right",
		);
		if (leftColumns.length === 0 && rightColumns.length === 0) {
			return;
		}

		// 统计left和right值
		const styleLefts = ref([]);
		const styleRights = ref([]);
		styleLefts.value = Array.from(leftColumns).map((th, index, array) => {
			const precedingWidths = array
				.slice(0, index)
				.reduce((sum, th) => sum + th.offsetWidth, 0);
			return precedingWidths;
		});
		styleRights.value = Array.from(rightColumns).map((th, index, array) => {
			const followingWidths = array
				.slice(index + 1)
				.reduce((sum, th) => sum + th.offsetWidth, 0);
			return followingWidths;
		});

		// 循环行设置每一行td的left和right
		const tbodyRows = tableEl.value?.querySelectorAll("tr");
		tbodyRows.forEach((row) => {
			const leftTds = row.querySelectorAll(
				`.gov-table-column--fixed-left`,
			);
			styleLefts.value.forEach((left, index) => {
				const td = leftTds[index];
				if (td) {
					td.style.left = `${left}px`;
				}
				if (index === leftTds.length - 1) {
					td.classList.add("is-fixed-left-last");
				}
			});

			const rightTds = row.querySelectorAll(
				`.gov-table-column--fixed-right`,
			);
			styleRights.value.forEach((right, index) => {
				const td = rightTds[index];
				if (td) {
					td.style.right = `${right}px`;
				}
				if (index === 0) {
					td.classList.add("is-fixed-right-first");
				}
			});
		});
	};

	onMounted(() => {
		updateStickyStyles(); // 初始计算
		observer.observe(tableEl.value, { childList: true, subtree: true });
	});

	onUnmounted(() => {
		observer.disconnect();
	});
}
