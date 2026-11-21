import type { Plugin } from 'vue'
import Row from './Row.vue'
import Column from './Column.vue'
import Container from './Container.vue'

export { Row, Column, Container }

declare const SimpleLayout: Plugin
export default SimpleLayout

declare module 'vue' {
  export interface GlobalComponents {
    Row: typeof Row
    Column: typeof Column
    Container: typeof Container
  }
}
