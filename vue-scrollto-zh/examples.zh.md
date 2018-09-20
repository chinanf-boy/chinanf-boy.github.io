
# 例子

以下是`vue-scrollto`的一些例子!

每个示例都假设您已安装`vue-scrollto`:

```js
const Vue = require('vue')
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)
```

## 使用字符串文字

```html
<button v-scroll-to="'#element'">
    Scroll to #element
</button>

<h1 id="element">Hi. I'm element</h1>
```

<iframe width="100%" 
        height="300" 
        src="//jsfiddle.net/rigor789/egh95a0q/embedded/result,html,js,css,resources"
        allowfullscreen="allowfullscreen"
        frameborder="0">
</iframe>

## 使用对象文字

```html
<button v-scroll-to="{ el: '#element' }">
    Scroll to #element
</button>
```

或者

```html
<button v-scroll-to="{ element: '#element' }">
    Scroll to #element
</button>
```

<iframe width="100%" 
        height="300" 
        src="//jsfiddle.net/rigor789/efs4s9wa/embedded/result,html,js,css,resources"
        allowfullscreen="allowfullscreen"
        frameborder="0">
</iframe>

#### 使用不同的持续时间

```html
<button v-scroll-to="{ element: '#element', duration: 5000 }">
    Scroll to #element
</button>
```

<iframe width="100%" 
        height="300" 
        src="//jsfiddle.net/rigor789/jcjc4mxs/embedded/result,html,js,css,resources"
        allowfullscreen="allowfullscreen"
        frameborder="0">
</iframe>

#### 使用不同的缓动函数

```html
<button v-scroll-to="{ element: '#element', easing: 'linear' }">
    Scroll to #element
</button>
```

<iframe width="100%" 
        height="300" 
        src="//jsfiddle.net/rigor789/fhnb6gmh/embedded/result,html,js,css,resources"
        allowfullscreen="allowfullscreen"
        frameborder="0">
</iframe>

#### 使用自定义缓动与持续时间相结合

```html
<button v-scroll-to="{ 
        el: '#element',
        easing: [.6, .80, .30, 1.9],
        duration: 2000 
    }">
    Scroll to #element
</button>
```

<iframe width="100%" 
        height="300" 
        src="//jsfiddle.net/rigor789/7xvxm7s9/embedded/result,html,js,css,resources"
        allowfullscreen="allowfullscreen"
        frameborder="0">
</iframe>

#### 使用偏移量

```html
<button v-scroll-to="{ el: '#element', offset: 200 }">
    Scroll to 200px below #element 
</button>
```

<iframe width="100%" 
        height="300" 
        src="//jsfiddle.net/rigor789/dmnmcpwj/embedded/result,html,js,css,resources"
        allowfullscreen="allowfullscreen"
        frameborder="0">
</iframe>

#### 添加回调

```html
<button v-scroll-to="{ 
        el: '#element',
        onDone: onDone,
        onCancel: onCancel
    }">
    Scroll callbacks
</button>
```

```js
export default {
    methods: {
        onDone() {
            alert('done')
        },
        
        onCancel() {
            alert('canceled')
            console.log(e)
        }
    }
}
```

<iframe width="100%" 
        height="300" 
        src="//jsfiddle.net/rigor789/2mfg8tda/embedded/result,html,js,css,resources"
        allowfullscreen="allowfullscreen"
        frameborder="0">
</iframe>
