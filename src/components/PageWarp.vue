<template>
	<div class="pageWarp">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './styles.less'
export default defineComponent({
  name: 'PageWarp',
  props: {
    msg: String,
  }
});
</script>
