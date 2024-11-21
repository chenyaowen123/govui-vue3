<script setup>
import inputAutoBase from "./inputauto-base.vue"
import inputAutoSlot from "./inputauto-slot.vue"
</script>

# InputAuto 自动补全输入框

根据输入内容提供对应的输入建议。

## 基本用法

使用 ```v-model``` 绑定值；使用 ```fetch``` 作为输入时数据过滤函数。

<inputAutoBase />

::: details 查看代码
::: code-group
<<< ./inputauto-base.vue#snippet{vue:line-numbers} [index.vue]
<<< ./data.js#snippet{js:line-numbers} [data.js]
:::






## 自定义模板

可以在默认插槽内书写渲染模板。

+ ```fetch```  可以返回字符串集合或数据对象集合。
+ 当返回对象集合时，```valueKey``` 可指定用于 Input 的字段，默认为字符串 ```value```。

<inputAutoSlot />

::: details 查看代码
::: code-group
<<< ./inputauto-slot.vue#snippet{vue:line-numbers} [index.vue]
<<< ./data.js#snippet{js:line-numbers} [data.js]
:::




## Attributes

基于 ```Input``` 和 ```Popper``` 组件，更多内容不再赘述。

<table>
  <thead>
    <tr>
      <th>属性名</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>modelValue</td>
      <td>绑定在输入框的值</td>
      <td>String</td>
      <td>—</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>fetch</td>
      <td>获取数据的函数，返回一个数组</td>
      <td>Function</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>valueKey</td>
      <td>显示在input里的值的键名</td>
      <td>String</td>
      <td>—</td>
      <td>"value"</td>
    </tr>
    <tr>
      <td>popperHeight</td>
      <td>popper 组件的高度</td>
      <td>String</td>
      <td>—</td>
      <td>"200px"</td>
    </tr>
    <tr>
      <td>size</td>
      <td>输入框尺寸</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>triggerForm</td>
      <td>是否触发表单验证</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
  </tbody>
</table>


## Events

<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th>说明</th>
      <th>回调参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>update:modelValue</td>
      <td>绑定值更新时触发</td>
      <td>新的值</td>
    </tr>
    <tr>
      <td>input</td>
      <td>输入时触发</td>
      <td>输入的值</td>
    </tr>
    <tr>
      <td>change</td>
      <td>值改变时触发</td>
      <td>新的值</td>
    </tr>
    <tr>
      <td>select</td>
      <td>选择列表中的一项时触发</td>
      <td>选中的项</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>输入框获得焦点时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>blur</td>
      <td>输入框失去焦点时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>clear</td>
      <td>清空按钮点击时触发</td>
      <td>—</td>
    </tr>
  </tbody>
</table>


## Slots

<table>
  <thead>
    <tr>
      <th>插槽名</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>addonBefore</td>
      <td>前置标签内容；和 <code>Input</code> 组件同理。</td>
    </tr>
    <tr>
      <td>addonAfter</td>
      <td>后置标签内容；和 <code>Input</code> 组件同理。</td>
    </tr>
    <tr>
      <td>prefix</td>
      <td>输入框前缀内容；和 <code>Input</code> 组件同理。</td>
    </tr>
    <tr>
      <td>suffix</td>
      <td>输入框后缀内容；和 <code>Input</code> 组件同理。</td>
    </tr>
    <tr>
      <td>default</td>
      <td>列表项内容，可以放置自定义的内容，用于渲染列表项。</td>
    </tr>
  </tbody>
</table>
