<script setup>
import uploadBase from "./upload-base.vue"
import uploadMultiple from "./upload-multiple.vue"
import uploadButton from "./upload-button.vue"
import uploadDisabled from "./upload-disabled.vue"
import uploadAppend from "./upload-append.vue"
</script>

# Upload 上传

## 基础例子

```uploadRequest``` 返回一个 ```Promise``` 用来接受成功/失败，以  ```axios``` 插件为例。

<uploadBase />


::: details 查看代码

示例采用模拟 ```simulateUpload.js```，实际项目可参考 ```axiosUpload.js```。

::: code-group
<<< ./upload-base.vue#snippet{27-31 vue:line-numbers} [index.vue]
<<< ./js/simulateUpload.js#snippet{js:line-numbers} [simulateUpload.js]
<<< ./js/axiosUpload.js#snippet{js:line-numbers} [axiosUpload.js]
:::


## 设置多选

```uploadMultiple``` 可以设置多选。

<uploadMultiple />

::: details 查看代码

示例采用模拟 ```simulateUpload.js```，实际项目可参考 ```axiosUpload.js```。

::: code-group
<<< ./upload-multiple.vue#snippet{22-26 vue:line-numbers} [index.vue]
<<< ./js/simulateUpload.js#snippet{js:line-numbers} [simulateUpload.js]
<<< ./js/axiosUpload.js#snippet{js:line-numbers} [axiosUpload.js]
:::


## 按钮类型

```buttonType``` 设置上传按钮风格。 ```buttonSize``` 设置上传按钮的大小。 ```buttonText``` 设置按钮的文字。

<uploadButton />

::: details 查看代码

示例采用模拟 ```simulateUpload.js```，实际项目可参考 ```axiosUpload.js```。

::: code-group
<<< ./upload-button.vue#snippet{56-60 vue:line-numbers} [index.vue]
<<< ./js/simulateUpload.js#snippet{js:line-numbers} [simulateUpload.js]
<<< ./js/axiosUpload.js#snippet{js:line-numbers} [axiosUpload.js]
:::



## 设置禁用

在禁用状态下，上传按钮禁用，没有删除按钮。

<uploadDisabled />

::: details 查看代码
<<< ./upload-disabled.vue#snippet{vue:line-numbers} [index.vue]
:::


## 自定义提示

设置 ```props``` 或者 ```<slot />``` 来定义提示信息。

<uploadAppend />
::: details 查看代码

示例采用模拟 ```simulateUpload.js```，实际项目可参考 ```axiosUpload.js```。

::: code-group
<<< ./upload-append.vue#snippet{38-42 vue:line-numbers} [index.vue]
<<< ./js/simulateUpload.js#snippet{js:line-numbers} [simulateUpload.js]
<<< ./js/axiosUpload.js#snippet{js:line-numbers} [axiosUpload.js]
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
      <td>modelValue</td>
      <td>绑定的值，表示已上传的文件列表</td>
      <td>Array</td>
      <td>—</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>size</td>
      <td>上传按钮的尺寸</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用上传功能</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>buttonText</td>
      <td>上传按钮的文本</td>
      <td>String</td>
      <td>—</td>
      <td>"上传文件"</td>
    </tr>
    <tr>
      <td>buttonType</td>
      <td>上传按钮的类型</td>
      <td>String</td>
      <td>—</td>
      <td>"default"</td>
    </tr>
    <tr>
      <td>tip</td>
      <td>上传组件的提示文本</td>
      <td>String</td>
      <td>—</td>
      <td>""</td>
    </tr>
    <tr>
      <td>append</td>
      <td>附加在上传按钮后的文本或元素</td>
      <td>String</td>
      <td>—</td>
      <td>""</td>
    </tr>
    <tr>
      <td>uploadRequest</td>
      <td>上传文件的请求函数</td>
      <td>Function</td>
      <td>—</td>
      <td>null</td>
    </tr>
    <tr>
      <td>multiple</td>
      <td>是否允许多文件上传</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
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
      <td>新的文件列表</td>
    </tr>
    <tr>
      <td>change</td>
      <td>文件列表变化时触发</td>
      <td>新的文件列表</td>
    </tr>
    <tr>
      <td>delete</td>
      <td>删除文件时触发</td>
      <td>被删除文件的ID</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>上传组件获得焦点时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>blur</td>
      <td>上传组件失去焦点时触发</td>
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
      <th>作用域插槽</th>
      <th>内容</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>append</td>
      <td>上传按钮后的附加内容</td>
      <td>否</td>
      <td>可以放置自定义的内容，如文本或图标</td>
    </tr>
    <tr>
      <td>tip</td>
      <td>上传组件的提示内容</td>
      <td>否</td>
      <td>可以放置自定义的提示内容</td>
    </tr>
  </tbody>
</table>
