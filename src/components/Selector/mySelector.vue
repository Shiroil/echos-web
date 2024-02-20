<template>
  <v-form ref="form">
    <v-text-field
      v-model="inputData"
      :rules="inputRules"
    />
  </v-form>
  <div class="outestFrame">
    <div v-for="(item, indexArr) in props.arr" class="singleFrame">
      <div class="titleFrame">
        {{ item.name }}
      </div>
      <div class="selectorFrame">
        <v-btn v-for="(singleItem, indexData) in item.data" :class="singleItem.selected ? 'selectFrame' : 'unSelectFrame'" @click="tagClick(indexArr, indexData, singleItem)">
          {{ singleItem.name }}
        </v-btn>
        <v-btn @click="submit"></v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, getCurrentInstance } from 'vue';
import type { PropType, Ref } from 'vue';
import './styles.less'

interface tagValue {
  name: string,
  value: string,
  selected: boolean
}

interface tag {
  name: string,
  data: Array<tagValue>
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
  watch: {
    inputData(val: string) {
      console.log(val)
    }
  },
  methods: {
    
  },
  emits: ['selectTag'],
  setup(props, ctx) {
    let inputData = ref('')
    let starNum = ref('')
    let form = ref()
    const inputRules = [
      (v: string) => !!v || 'required'
    ]
    const submit = (async () => {
      const { valid } = await form.value.validate();
      if(valid) console.log(inputData.value, 'qqqw')
    })
    const tagClick = (index1: number, index2: number, singleItem: tagValue) => {
      console.log(props, form.value.validate())
      // starNum.value = singleItem
      ctx.emit('selectTag', index1, index2)
    }
    return {
      props,
      tagClick,
      inputData,
      inputRules,
      form,
      submit
    }
  }
})

</script>