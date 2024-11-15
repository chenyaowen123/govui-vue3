import { ref } from "vue";

/**
 * 维护所有 formItem 的信息列表 fields
 * @returns {Object,Function} 列表，添加、删除列表。
 */
export function useFields() {
	const fields = ref([]);

	const addField = (field) => {
		fields.value.push(field);
	};

	const removeField = (field) => {
		fields.value = fields.value.filter((i) => i.prop !== field.prop);
	};

	return { fields, addField, removeField };
}
