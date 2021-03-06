/*
 * @Author: Chen Wenhang
 * @Date: 2021-08-14 23:57:44
 * @LastEditTime: 2021-08-15 21:52:49
 * @Description: 
 * @Github: https://github.com/chenwenhang
 */
import { createApp } from 'vue'
import { createUI } from 'taro-ui-vue3'
import { Page, Panel, ExampleItem, PropItem, NavButton } from './components/index'
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
App.component(Page.name, Page)
App.component(Panel.name, Panel)
App.component(ExampleItem.name, ExampleItem)
App.component(PropItem.name, PropItem)
App.component(NavButton.name, NavButton)

export default App
