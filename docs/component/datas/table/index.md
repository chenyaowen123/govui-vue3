<script setup>
import tableBase from "./table-base.vue"
import tableSelection from "./table-selection.vue"
import tableIndexed from "./table-indexed.vue"
import tableLineStyle from "./table-line-style.vue"
import tableFixed from "./table-fixed.vue"
</script>

# Table 表格

用于展示数据列表。

## 基础用法

你可以在 ```columns``` 里快速设置每一个列的配置。

+ 排序：设置 ```sort``` 时标题会显示排序按钮，有 ```none/desc/asc``` 三种不同预设状态。利用 ```@sortChange``` 事件响应排序操作。
+ 格式化：利用 ```format``` 处理每列数据的展示时格式，它不会影响原有数据，本质和 ```<slot/>``` 是一致的，但  ```<slot/>```  优先级更高。
+ 对齐：数据默认居左，可设置 ```align``` 控制每列数据对齐方式。

<tableBase />


::: details 查看代码
::: code-group
<<< ./table-base.vue{vue:line-numbers} [index.vue]
<<< ./column.js{js:line-numbers}
<<< ./row.js{js:line-numbers}
:::


## 复选框

注意：设置 ```selection``` 前提必须指定  ```rowKey``` 来指定唯一标识。```rowKey``` 接收一个 ```String``` 或者一个 ```Function```。

选中行的 ```rowKey``` 会在 ```@selectionChange``` 事件里以数组的形式返回。

<tableSelection />

::: details 查看代码
::: code-group
<<< ./table-selection.vue{6,8,27-29 vue:line-numbers} [index.vue]
<<< ./column.js{js:line-numbers}
<<< ./row.js{js:line-numbers}
:::





## 设置索引

+ 默认：当设置 ```indexed``` 为 ```true``` 时，显示数据在数组中的顺序。
+ 自定义：当设置 ```indexed``` 为 ```Function``` 时，提供```（row, index）``` 两个参数用于自定义索引。

<tableIndexed />

::: details 查看代码
::: code-group
<<< ./table-indexed.vue{vue:line-numbers} [index.vue]
<<< ./column.js{js:line-numbers}
<<< ./row.js{js:line-numbers}
:::



## 设置行样式

当你想改变行样式，你也可以这么做：

+ 设置条纹：对 ```<gov-table />``` 设置 ```stripe```。
+ 自定义className：对 ```<gov-table />``` 设置 ```rowClassName```。

<tableLineStyle />

::: details 查看代码
::: code-group
<<< ./table-line-style.vue{19-21 vue:line-numbers} [index.vue]
<<< ./column.js{js:line-numbers}
<<< ./row.js{js:line-numbers}
:::



## 固定表头和列

该功能根据css的 ```position: sticky;``` 实现，所以在 ***ie11*** 浏览器下降级处理。

+ 设置 ```height``` 时，会自动固定表头。
+ 设置 ```column.fixed``` 为 ```left/right```时，会对该列固定在左侧或者右侧。

<tableFixed />

::: details 查看代码
<<< ./table-fixed.vue{29-30 vue:line-numbers} [index.vue]
:::


## Attributes

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
      <td>height</td>
      <td>表格高度，设置后表头固定在顶部</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>rowClassName</td>
      <td>行的类名计算函数</td>
      <td>Function(row, index)</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>表格是否处于加载状态</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>stripe</td>
      <td>是否显示斑马线风格的条纹</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>selection</td>
      <td>是否显示多选列</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>rowKey</td>
      <td>自定义行的唯一键，用于 selection 计算</td>
      <td>Function/String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>indexed</td>
      <td>是否显示索引列</td>
      <td>Function/Boolean</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>data</td>
      <td>表格数据</td>
      <td>Array</td>
      <td>—</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>columns</td>
      <td>列配置数组</td>
      <td>Array</td>
      <td>—</td>
      <td>—</td>
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
      <td>sortChange</td>
      <td>排序状态改变时触发</td>
      <td>排序状态对象：{ column[dataIndex], sort }；</td>
    </tr>
    <tr>
      <td>selectionChange</td>
      <td>选中项改变时触发</td>
      <td>选中项数组</td>
    </tr>
  </tbody>
</table>



## Slots

<table>
  <thead>
    <tr>
      <th>插槽名</th>
      <th width="120">作用域插槽</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>每个 column[dataIndex]，也就是列的 key 值。</td>
      <td>是</td>
      <td>定义每列的展示，会根据column[dataIndex]创建对应的数据查抄，可自由控制展示内容，提供 row 属性为定义每一行的数据。</td>
    </tr>
  </tbody>
</table>
