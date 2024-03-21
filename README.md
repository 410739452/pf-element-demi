# Element Demi

An adapter for using Element UI with Vue 2 / 3.


## 📦 Install

```bash
// vue2.x + element-ui
npm i pf-element-demi element-ui
# or
yarn add pf-element-demi element-ui

// vue3.x + element-plus
npm i pf-element-demi element-plus
# or
yarn add pf-element-demi element-plus
```

## 🎩 Usage

### Vue2

```js
import Vue from 'vue'
import ElementUI from 'pf-element-demi'

Vue.use(ElementUI)
```

### Vue3

```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'pf-element-demi'

const app = createApp(App)

app.use(ElementUI)
```

## 🦄️ Demos

Vue 2 Demo: [Vue 2.x](./examples/vue2-demo/README.md)  |  Vue 3 Demo: [Vue 3.x](./examples/vue3-demo/README.md)

## 💡 Inspiration

This library is inspired by [VueDemi](https://github.com/vueuse/vue-demi)

## 📄 License

MIT