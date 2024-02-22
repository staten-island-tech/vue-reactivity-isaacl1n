import { defineStore } from "pinia"
import { ref } from "vue"

export const useCatalog = defineStore("catalog", () => {
    const items = ref([1,2,3])
    return {items}
})