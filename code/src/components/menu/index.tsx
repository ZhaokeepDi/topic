import { defineComponent, PropType } from 'vue';
import './index.scss';

export interface Title {
  name: string;
  path: string;
  sort: number;
  children?: Title[];
}
export default defineComponent({
  name: 'Menu',
  props: {
    titles: {
      type: Array as PropType<Title[]>,
      required: true
    },
    action: {
      type: Number,
      required: true
    }
  },
  render() {
    return <div class="menu">{this.getItem(this.titles)}</div>;
  },
  methods: {
    getItem(titles: Array<Title>) {
      const items: Array<JSX.Element> = [];
      let children: Array<JSX.Element> = [];
      titles.forEach((item) => {
        if (item.children) {
          children = this.getItem(item.children);
        }
        items.push(
          <div
            class={(item.children ? 'group ' : '') + (this.action === item.sort ? 'action' : '')}
          >
            <h5>{item.name}</h5>
            {children}
          </div>
        );
      });
      return items;
    }
  }
});
