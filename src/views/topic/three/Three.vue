<template>
  <main>
    <TopicTemplate :arithmetic="arithmetic" :annotations="annotations" v-model="str" @run="run">
      <Three :value="str" ref="threeRef"></Three>
    </TopicTemplate>
  </main>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import Three from './three';
import TopicTemplate from '@/components/topicTemplate.vue';

export default defineComponent({
  components: {
    Three,
    TopicTemplate
  },
  setup() {
    const str: Ref<string> = ref('abcabcbb');
    const threeRef = ref();
    const run = () => {
      threeRef.value.run(str.value);
    };
      // 注解
    const annotations = ref('滚动窗口思想：从第一个看开始查');
    const arithmetic = ref(`
function lengthOfLongestSubstring(s: string): number {
  let length=0
  let sub='';
  for(let i=0;i<s.length;i++){
      let indexOf=sub.indexOf(s[i])
      sub+=s[i]
      if(indexOf>-1){
        sub=sub.substring(indexOf+1)
      }
      length=sub.length>length?sub.length:length;
  }
  return length
};`);
    return {
      str, run, threeRef, arithmetic, annotations
    };
  }
});
</script>
<style lang="scss" scoped>
$width: 5em;
$textColor: white;
 main ::v-deep .box {
  margin: 2em;
  .child {
    display: flex;
    flex-direction: row;
    justify-content: revert;
    div {
      width: $width;
      height: 100px;
      background: #238de4;
      color: $textColor;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
    }
  }
}
</style>
