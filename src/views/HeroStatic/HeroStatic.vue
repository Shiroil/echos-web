<template>
	<PageWarp>
		<mySelector :arr="arr" @selectTag="(index1: number, index2: number) => selectTag(index1, index2)" @searchUpdate="(text: string, index1: number) => searchUpdate(text, index1)"/>
	</PageWarp>
</template>

<script lang="ts">
import PageWarp from '@/components/PageWarp.vue'
import { defineComponent, reactive, ref, watchEffect } from 'vue'
import './styles.less'
import mySelector from '@/components/Selector/mySelector.vue';
//  TODO: 封装筛选组件
interface tagValue {
  name: string,
  value: string,
  selected: boolean
}
interface tag {
  name: string,
  data: Array<tagValue>,
	type: string
}
export default defineComponent({
	name: 'HeroStatic',
	setup() {
		let arr = ref<Array<tag>>([{
			name: '搜索',
			type: 'input',
			data: [{
				name: '名字',
				value: '',
				selected: false
			}]
		},
			{
				name: '星级',
				type: 'selector',
				data: [{
					name: '6',
					value: '6',
					selected: false
				},
				{
					name: '5',
					value: '5',
					selected: false
				},
				{
					name: '4',
					value: '4',
					selected: false
				},
				{
					name: '3',
					value: '3',
					selected: false
				},
				{
					name: '2',
					value: '2',
					selected: false
				},
				{
					name: '1',
					value: '1',
					selected: false
				}]
			},{
				name: '属性',
				type: 'selector',
				data: [{
					name: '水',
					value: '水',
          selected: false
				}, {
					name: '火',
          value: '火',
          selected: false
				}]
			}
		])
		const selectTag = ((index1: number, index2: number) => {
			console.log('进入', arr)
			let arrNew = arr.value
			arrNew[index1].data[index2].selected = !arrNew[index1]?.data?.[index2].selected
			arr.value = arrNew
			console.log(arr)
		})
		const searchUpdate = ((text: string, index1: number) => {
			let arrNew = arr.value
			arrNew[index1].data[0].value = text
			arr.value = arrNew
		})
		watchEffect(() => {
			console.log(JSON.stringify(arr.value), '接收')
			console.log(arr.value, JSON.parse(JSON.stringify(arr.value)))
		})
		return {
			arr,
			selectTag,
			searchUpdate
		}
	},
	components: {
		PageWarp,
		mySelector
	},
});
</script>
