<script setup>
import swiperBase from "./swiper-base.vue"
import swiperNavigation from "./swiper-navigation.vue"
import swiperPagination from "./swiper-pagination.vue"
import swiperAutoplay from "./swiper-autoplay.vue"
import swiperLoop from "./swiper-loop.vue"
import swiperVertical from "./swiper-vertical.vue"
import swiperSlidesPerView from "./swiper-slides-per-view.vue"
import swiperSpaceBetween from "./swiper-space-between.vue"

</script>

# Swiper 轮播

基于 ```swiper.js```实现，默认集成了 ```autoplay/navigation/pagination``` 模块。

## 基础使用

可以通过 `<gov-swiper />` 和 `<gov-swiper-slide />` 组件快速创建。

<swiperBase />

::: details 查看代码
<<< ./swiper-base.vue{vue:line-numbers}
:::



## 左右切换 navigation

设置左右切换的交互按钮。

<swiperNavigation />

::: details 查看代码
<<< ./swiper-navigation.vue{vue:line-numbers}
:::



## 导航分栏 pagination

设置常见的底部分页。

<swiperPagination />

::: details 查看代码
<<< ./swiper-pagination.vue{vue:line-numbers}
:::




## 自动播放 autoplay

是否自动播放。

<swiperAutoplay />

::: details 查看代码
<<< ./swiper-autoplay.vue{vue:line-numbers}
:::



## 是否循环 loop

当展示到最后一页的时候，是否循环衔接。

<swiperLoop />

::: details 查看代码
<<< ./swiper-loop.vue{vue:line-numbers}
:::


## 垂直方向 direction

设置 ```direction``` 为 ```vertical```，可改为垂直方向。

<swiperVertical />

::: details 查看代码
<<< ./swiper-vertical.vue{vue:line-numbers}
:::



## 多列 slides-per-view

设置 ```slides-per-view``` 可展示多列效果。

<swiperSlidesPerView />

::: details 查看代码
<<< ./swiper-slides-per-view.vue{vue:line-numbers}
:::



## 间距 space-between

```space-between``` 可设置两个页之间的间距。

<swiperSpaceBetween />

::: details 查看代码
<<< ./swiper-space-between.vue{vue:line-numbers}
:::


## Swiper Attributes

更多配置参考 [Swiper Vue.js Components](https://swiperjs.com/vue#swiper-props){target="_blank"}

<table>
    <thead>
        <tr>
            <th width="110">属性</th>
            <th width="110">类型</th>
            <th width="80">默认值</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>tag</td>
            <td>string</td>
            <td>div</td>
            <td>主容器的 HTML 标签。</td>
        </tr>
        <tr>
            <td>wrapperTag</td>
            <td>string</td>
            <td>div</td>
            <td>滑块包装器的 HTML 标签。</td>
        </tr>
        <tr>
            <td>slidesPerView</td>
            <td>Number</td>
            <td>1</td>
            <td>每次滑动显示的滑块数量。</td>
        </tr>
        <tr>
            <td>spaceBetween</td>
            <td>Number</td>
            <td>0</td>
            <td>滑块之间的间距。</td>
        </tr>
        <tr>
            <td>centeredSlides</td>
            <td>Boolean</td>
            <td>false</td>
            <td>是否将滑块居中对齐。</td>
        </tr>
        <tr>
            <td>loop</td>
            <td>Boolean</td>
            <td>false</td>
            <td>是否启用循环模式。</td>
        </tr>
        <tr>
            <td>speed</td>
            <td>Number</td>
            <td>300</td>
            <td>动画速度（毫秒）。</td>
        </tr>
        <tr>
            <td>effect</td>
            <td>String</td>
            <td>slide</td>
            <td>切换效果。可选择slide/fade/cube/coverflow</td>
        </tr>
        <tr>
            <td>autoplay</td>
            <td>Boolean/Object</td>
            <td>false</td>
            <td>是否启用自动播放，或传递一个对象来配置自动播放：<ul>
                    <li>delay: 自动切换的时间间隔（毫秒）</li>
                    <li>stopOnLastSlide: 是否在最后一个滑块时停止自动播放</li>
                    <li>disableOnInteraction: 用户交互后是否停止自动播放</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>navigation</td>
            <td>Boolean/Object</td>
            <td>false</td>
            <td>是否启用导航按钮，或传递一个对象来配置导航按钮：<ul>
                    <li>nextEl: 下一个按钮的元素选择器</li>
                    <li>prevEl: 上一个按钮的元素选择器</li>
                    <li>hideOnClick: 是否在点击后隐藏导航按钮</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>pagination</td>
            <td>Boolean/Object</td>
            <td>false</td>
            <td>是否启用分页器，或传递一个对象来配置分页器：<ul>
                    <li>el: 分页器的元素选择器</li>
                    <li>clickable: 分页器是否可点击</li>
                    <li>renderBullet: 自定义分页器渲染函数</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## Swiper events

更多配置参考 [Swiper Vue.js Components](https://swiperjs.com/vue#swiper-events){target="_blank"}

<table style="width:100%;">
  <thead>
    <tr>
      <th>事件名</th>
      <th>参数</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@swiper</td>
      <td>swiper</td>
      <td>当 Swiper 初始化或更新时触发，返回 Swiper 实例。</td>
    </tr>
    <tr>
      <td>@slideChange</td>
      <td>currentIndex, previousIndex</td>
      <td>当滑块变化时触发，返回当前滑块和前一个滑块的索引。</td>
    </tr>
    <tr>
      <td>@reachEnd</td>
      <td>-</td>
      <td>当 Swiper 滑动到最后一个滑块时触发。</td>
    </tr>
    <tr>
      <td>@reachStart</td>
      <td>-</td>
      <td>当 Swiper 滑动到第一个滑块时触发。</td>
    </tr>
    <tr>
      <td>@autoplayStart</td>
      <td>-</td>
      <td>当自动播放开始时触发。</td>
    </tr>
    <tr>
      <td>@autoplayStop</td>
      <td>-</td>
      <td>当自动播放停止时触发。</td>
    </tr>
    <tr>
      <td>@navigationNext</td>
      <td>-</td>
      <td>当点击下一个按钮时触发。</td>
    </tr>
    <tr>
      <td>@navigationPrev</td>
      <td>-</td>
      <td>当点击上一个按钮时触发。</td>
    </tr>
    <tr>
      <td>@paginationClick</td>
      <td>index</td>
      <td>当点击分页器时触发，返回点击的分页器索引。</td>
    </tr>
  </tbody>
</table>



## Swiper slots

```md
<gov-swiper>
  <gov-swiper-slide>Slide 1</gov-swiper-slide>
  <gov-swiper-slide>Slide 2</gov-swiper-slide>
  <template v-slot:container-start><span>Container start</span></template>
  <template v-slot:container-end><span>Container end</span></template>
  <template v-slot:wrapper-start><span>Wrapper start</span></template>
  <template v-slot:wrapper-end><span>Wrapper end</span></template>
</gov-swiper>

```

<table>
  <thead>
    <tr>
      <th>插槽名称</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>container-start</td>
      <td>元素将被添加到 Swiper 容器的开始位置。</td>
    </tr>
    <tr>
      <td>container-end</td>
      <td>元素将被添加到 Swiper 容器的结束位置。</td>
    </tr>
    <tr>
      <td>wrapper-start</td>
      <td>元素将被添加到 Swiper 滑块包装器的开始位置。</td>
    </tr>
    <tr>
      <td>wrapper-end</td>
      <td>元素将被添加到 Swiper 滑块包装器的结束位置。</td>
    </tr>
  </tbody>
</table>





## SwiperSlide Attributes

更多配置参考 [Swiper Vue.js Components](https://swiperjs.com/vue#swiperslide-props){target="_blank"}

<table>
  <thead>
    <tr>
      <th width="110">属性</th>
      <th width="110">类型</th>
      <th width="80">默认值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>tag</td>
      <td>string</td>
      <td>div</td>
      <td>滑块的 HTML 标签。</td>
    </tr>
  </tbody>
</table>


## SwiperSlide Slot Props

```<SwiperSlide />``` 的默认插槽参数，可用于做高亮效果。

```md
<gov-swiper>
  <gov-swiper-slide v-slot="{ isActive }">
    <div>Current slide is {{ isActive ? 'active' : 'not active' }}</div>
  </gov-swiper-slide>
</gov-swiper>
```

<table>
  <thead>
    <tr>
      <th>Slot Prop</th>
      <th>类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>isActive</td>
      <td>Boolean</td>
      <td>当前滑块是否处于活跃状态。可用于改变活跃状态下滑块的样式或内容。</td>
    </tr>
    <tr>
      <td>isPrev</td>
      <td>Boolean</td>
      <td>当前滑块是否是前一个活跃滑块。可用于区分当前活跃滑块的前一个滑块。</td>
    </tr>
    <tr>
      <td>isNext</td>
      <td>Boolean</td>
      <td>当前滑块是否是后一个活跃滑块。可用于区分当前活跃滑块的后一个滑块。</td>
    </tr>
    <tr>
      <td>isVisible</td>
      <td>Boolean</td>
      <td>当前滑块是否可见。只有在启用了 <code>watchSlidesProgress</code> 参数时有效。</td>
    </tr>
    <tr>
      <td>isDuplicate</td>
      <td>Boolean</td>
      <td>当前滑块是否是复制的滑块。在循环模式下，Swiper 会复制滑块以实现无缝循环。</td>
    </tr>
  </tbody>
</table>
