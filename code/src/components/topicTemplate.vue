<template>
  <div class="content">
    <div>
      <!-- 代码区域 -->
      <pre>
        <code class="hljs language-plaintext">
          {{
            arithmetic
          }}
        </code>
      </pre>
      <!-- 按钮 -->
      <div class="input_run">
        <input type="text" placeholder="输入数据" v-model="myStr" />
        <button @click="run">执行</button>
      </div>
    </div>
    <!-- 展示区域 -->
    <div class="display-animate-box">
        <slot></slot>
    </div>
    <!-- 注解区域 -->
    <div class="annotations">
      {{ annotations }}
      <h4></h4>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, watch, ref } from 'vue';

export default defineComponent({
  props: {
    arithmetic: String,
    annotations: String,
    modelValue: String
  },
  emits: ['run', 'update:modelValue'],
  setup(props, { emit }) {
    const myStr = ref(props.modelValue);
    watch(() => myStr.value, () => {
      emit('update:modelValue', myStr.value);
    });
    function run() {
      emit('run');
    }
    return {
      run, myStr
    };
  }
});
</script>
<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: max-content 1fr;
}
.input_run {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.display-animate-box {
}
</style>
