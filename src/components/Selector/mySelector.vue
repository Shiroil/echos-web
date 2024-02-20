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
        <v-btn v-for="(singleItem, indexData) in item.data" :class="singleItem.selected ? 'selectFrame' : 'unSelectFrame'" @click="tagClick(indexArr, indexData)">
          {{ singleItem.name }}
        </v-btn>
        <v-btn @click="validate"></v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
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
  data: () => ({
    inputData: '',
    inputRules: [
      (v: string) => !!v || 'required',
      
    ]
  }),
  props: {
    arr: Array as () => tag[]
  },
  watch: {
    inputData(val: string) {
      console.log(val)
    }
  },
  methods: {
    async validate() {
      const { valid } = await (this.$refs.form as any).validate();
      if(valid) console.log(this.inputData)
    }
  },
  emits: ['selectTag'],
  setup(props, ctx) {
    const tagClick = (index1: number, index2: number) => {
      console.log(props)
      ctx.emit('selectTag', index1, index2)
    }
    return {
      props,
      tagClick
    }
  }
})

</script>