import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true
    }
  },
  render() {
    const child = [];
    Array.prototype.forEach.call(this.value, (v, i) => {
      child.push(
        <div class="child-item" style={this.styles[i]}>
          {v}
        </div>
      );
    });
    const slipperItem = [];
    Array.prototype.forEach.call(this.subString, (v) => {
      slipperItem.push(<span class="center">{v}</span>);
    });
    return (
      <div class="box">
        <h3>最大长度：{this.length}</h3>
        <h3>滑块内容：{this.subString}</h3>
        <h3>当前步骤：{this.stepValue}</h3>
        <h3>执行速度：<input type="text" value={this.sleep} onInput={(e) => { this.sleep = e.target.value; }}/></h3>
        <div class="child">{child}</div>
      </div>
    );
  },
  data() {
    return {
      length: 0,
      stepValue: '',
      subString: '',
      styles: [],
      timeout: undefined,
      sleep: 1500
    };
  },
  methods: {
    async run(s) {
      this.subString = '';
      const generator = this.step();
      for (let i = 0; i < s.length; i += 1) {
        const indexOf = this.subString.indexOf(s[i]);

        // eslint-disable-next-line no-await-in-loop
        await generator.next().value(i, indexOf, `去滑块里查找字符${s[i]},然后将其推入`);

        this.subString += s[i];
        if (indexOf > -1) {
          this.subString = this.subString.substring(indexOf + 1);
          // eslint-disable-next-line no-await-in-loop
          await generator.next().value(indexOf + 1, i, '查得到,删除滑块中第一个相同字符以及之前的字符');
        } else {
          // eslint-disable-next-line no-await-in-loop
          await generator.next().value(indexOf + 1, i, '查不到,则滑框不做变动');
        }
        // eslint-disable-next-line no-await-in-loop
        await generator.next().value('滑块长度与保存的最大长度对比');
        this.length = this.subString.length > this.length ? this.subString.length : this.length;
      }
    },
    step() {
      let number = 0;
      let sleep;
      function* step() {
        clearInterval(this.timeout);
        // eslint-disable-next-line no-loop-func
        const one = (i, indexOf, s) => new Promise((resolve) => {
          this.setStepValue(s);
          console.log(indexOf);
          if (indexOf > -1) {
            for (let j = 0; j <= indexOf; j += 1) {
              this.styles[j + number] = 'background:#6686A1';
            }
          }
          this.styles[i] = 'background:red';
          this.timeout = setTimeout(() => {
            resolve(true);
          }, sleep);
        });
        // eslint-disable-next-line no-loop-func
        const two = (a, b, s) => new Promise((resolve) => {
          this.setStepValue(s);
          this.timeout = setTimeout(() => {
            if (a > 0) {
              number += a;
            }
            this.styles = [];
            for (let i = number; i <= b; i += 1) {
              this.styles[i] = 'background:#ffeb00';
            }
            console.log(this.styles);
            resolve(true);
          }, sleep);
        });
        // eslint-disable-next-line no-loop-func
        const three = (s) => new Promise((resolve) => {
          this.setStepValue(s);
          this.timeout = setTimeout(() => {
            resolve(true);
          }, sleep);
        });
        while (true) {
          sleep = this.sleep;
          yield one;
          yield two;
          yield three;
        }
      }
      return step.call(this);
    },
    setStepValue(s) {
      this.stepValue = s;
    }
  }
});
