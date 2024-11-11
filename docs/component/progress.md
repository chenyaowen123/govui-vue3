<script setup>
import progressBase from "./examples/progress/progress-base.vue"
import progressColor from "./examples/progress/progress-color.vue"
import progressCustom from "./examples/progress/progress-custom.vue"
import progressWidth from "./examples/progress/progress-width.vue"
</script>

# Progress 进度条

展示操作进度。

## 基础使用

```type``` 可以设置为 ```line``` 线性，或者 ```circle``` 环形。

<progressBase />

## 自定义颜色

可以设置 ```color```, ```backgroundColor```, ```completeColor``` 来控制控件的主色、背景色、完成等颜色。

<progressColor />

## 自定义展示

可以根据 ```slot``` 来自定义内容，提供一个 ```value``` 参数作为进度数值。

<progressCustom/>

## 定义线条宽度

可以自定义线条的宽度，范围 2px - 50px。

<progressWidth />

## Attributes

<table style="width:100%; display:table;">
  <thead>
    <tr>
      <th>属性</th>
      <th>类型</th>
      <th>默认值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>modelValue</td>
      <td>Number</td>
      <td>0</td>
      <td>绑定的0-100之间的数值，表示进度。</td>
    </tr>
    <tr>
      <td>strokeWidth</td>
      <td>Number</td>
      <td>6</td>
      <td>环形或线形进度条的宽度。</td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>"line"</td>
      <td>进度条的类型，可以是"line"（线形）或"circle"（圆形）。</td>
    </tr>
    <tr>
      <td>backgroundColor</td>
      <td>String</td>
      <td>"#e6e8eb"</td>
      <td>进度条背景色。</td>
    </tr>
    <tr>
      <td>color</td>
      <td>String</td>
      <td>"#e74c3c"</td>
      <td>进度条的主色。</td>
    </tr>
    <tr>
      <td>completeColor</td>
      <td>String</td>
      <td>"#27ae60"</td>
      <td>进度条达到100%（完成后）的色彩。</td>
    </tr>
  </tbody>
</table>


## Slots

<table style="width:100%; display:table;">
  <thead>
    <tr>
      <th width="120">Slot Name</th>
      <th>Scope</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>value</td>
      <td>默认插槽，用于自定义文字内容，如百分比或完成图标。插槽提供了一个属性，即当前的进度值（modelValue）。</td>
    </tr>
  </tbody>
</table>
