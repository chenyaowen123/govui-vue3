<script setup>
import swiperBase from "./examples/swiper/swiper-base.vue"
</script>

# Swiper 轮播

常见轮播图，展示图片切换等。

## 基础使用

可以通过 `<gov-swiper />` 和 `<gov-swiper-slide />` 两个标签快速创建一个轮播。

<swiperBase />

```md
<gov-swiper>
	<gov-swiper-slide>Slide 1</gov-swiper-slide>
	<gov-swiper-slide>Slide 2</gov-swiper-slide>
	<gov-swiper-slide>Slide 3</gov-swiper-slide>
	<gov-swiper-slide>Slide 4</gov-swiper-slide>
	<gov-swiper-slide>Slide 5</gov-swiper-slide>
</gov-swiper>
```

## Swiper Attributes
<table style="width:100%; display:table;">
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
        <tr>
            <td>scrollbar</td>
            <td>Boolean/Object</td>
            <td>false</td>
            <td>是否启用滚动条，或传递一个对象来配置滚动条：<ul>
                    <li>el: 滚动条的元素选择器</li>
                    <li>draggable: 滚动条是否可拖动</li>
                    <li>hide: 是否在非滑动时隐藏滚动条</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## SwiperSlide Attributes

<table style="width:100%; display:table;">
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
    <tr>
      <td>zoom</td>
      <td>boolean</td>
      <td>false</td>
      <td>是否启用缩放模式。</td>
    </tr>
    <tr>
      <td>virtualIndex</td>
      <td>number</td>
      <td>-</td>
      <td>虚拟模式下滑块的索引。</td>
    </tr>
  </tbody>
</table>
