<template>
  <div class="home">
    <header></header>
    <My-Menu :titles="titles" :action="3"/>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
// vue2的class+ts写法，不支持compontionsApi
import { Options, Vue } from 'vue-class-component';
import MyMenu, { Title } from '@/components/menu';

interface Data{
  titles:Title[]
}
// option是vue2的写法，要采用compotionsApi的用法得用defineComponent
// 所支持的东西 https://012.vuejs.org/api/options.html
@Options({
  name: 'Home',
  components: {
    MyMenu
  },
  beforeMount() {
    window.hljs.initHighlightingOnLoad();
  },
  methods: {
    hh() {
      console.log(this.titles);
    }
  },
  data():Data {
    return {
      titles: [{ name: '无重复字符的最长子串', path: '/topic/three', sort: 3 }]
    };
  }
})
export default class Home extends Vue {
  public titles!: Title[];
  // 这里的数据会把修饰器中声明的覆盖掉 class中的声明优先级高于修饰器

  // 这里的数据会把修饰器中声明的覆盖掉 class中的声明优先级高于修饰器
  public strDemo='这里公开的数据会覆盖上面options里声明的同名数据'

  // 你也可以很方便的声明一个method
  public hh():void {
    console.log(this.strDemo, '这里公开的方法依然会覆盖options的同名方法');
  }

  mounted():void {
    console.log(this.strDemo, '这是class里写的mounted方法');
  }
}
</script>
<style lang="scss">
.home{
  display:grid;
  height:100%;
  grid-template: 100px 1fr / max-content 1fr;
  header {
    background-color: antiquewhite;
    grid-column: 1/3;
  }
  // .content{
    // background-color:#f9f0f0;
  // }
}
</style>
