/*
 * @Author: Chen Wenhang
 * @Date: 2021-08-14 23:57:44
 * @LastEditTime: 2021-08-15 00:09:34
 * @Description: 
 * @Github: https://github.com/chenwenhang
 */
import { createApp } from 'vue'
import { createUI } from 'taro-ui-vue3'
import './app.scss'

// 引用全部组件样式
import 'taro-ui-vue3/dist/style/index.scss'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

// 引用全部组件
const tuv3 = createUI()
App.use(tuv3)

export default App
