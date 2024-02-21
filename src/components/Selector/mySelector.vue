<template>
  <v-form ref="form">
    <div class="outestFrame">
      <div v-for="(item, indexArr) in props.arr" class="singleFrame">
        <div class="searchFrame" v-if="item.type == 'input'">
          <v-text-field
            v-model="inputData"
          />
          <v-btn class="search" @click="search(inputData, indexArr)">查询</v-btn>
        </div>
        <div class="selectorOutterFrame" v-if="item.type === 'selector'">
          <div class="titleFrame">
            {{ item.name }}
          </div>
          <div class="selectorFrame">
            <v-btn v-for="(singleItem, indexData) in item.data" :class="singleItem.selected ? 'selectFrame' : 'unSelectFrame'" @click="tagClick(indexArr, indexData)">
              {{ singleItem.name }}
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref, watch, getCurrentInstance, watchEffect } from 'vue';
import type { PropType, Ref } from 'vue';
import './styles.less'

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
  name: 'mySelector',
  // data: () => ({
  //   inputData: '',
  //   starNum: '',
  //   inputRules: [
  //     (v: string) => !!v || 'required',
  //   ]
  // }),
  props: {
    arr: Array as () => tag[]
  },
  emits: ['selectTag', 'searchUpdate'],
  setup(props, ctx) {
    let inputData = ref('')
    let starNum = ref('')
    let form = ref()
    const submit = (async () => {
      const { valid } = await form.value.validate();
      if(valid) console.log(inputData.value, 'qqqw')
    })
    const tagClick = (index1: number, index2: number) => {
      console.log(props, form.value)
      // starNum.value = singleItem
      ctx.emit('selectTag', index1, index2)
    }
    const search = ((text: string, index1: number) => {
      console.log('搜索')
      ctx.emit('searchUpdate', text, index1)
    })
    watchEffect(() => {
      console.log(inputData.value, 'kknide')
    })
    return {
      props,
      tagClick,
      inputData,
      form,
      submit,
      search
    }
  }
})

</script>