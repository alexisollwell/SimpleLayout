/// <reference path="./index.d.ts" />
import Row from './Row.vue'
import Column from './Column.vue'
import Container from './Container.vue'

export { Row, Column, Container }

export default {
  install(app) {
    app.component('Row', Row)
    app.component('Column', Column)
    app.component('Container', Container)
  },
}
