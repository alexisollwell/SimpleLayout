<script setup>
import { computed } from 'vue'

const props = defineProps({
  mainAxisAlignment: {
    /** @type {import('vue').PropType<'start' | 'end' | 'center' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly'>} */
    type: String,
    default: 'start',
    validator: (v) =>
      ['start', 'end', 'center', 'spaceBetween', 'spaceAround', 'spaceEvenly'].includes(v),
  },
  crossAxisAlignment: {
    /** @type {import('vue').PropType<'start' | 'end' | 'center' | 'stretch'>} */
    type: String,
    default: 'stretch',
    validator: (v) => ['start', 'end', 'center', 'stretch'].includes(v),
  },
  mainAxisSize: {
    /** @type {import('vue').PropType<'max' | 'min'>} */
    type: String,
    default: 'max',
    validator: (v) => ['max', 'min'].includes(v),
  },
  gap: {
    type: [Number, String],
    default: 0,
  },
  flex: {
    type: [Number, String],
    default: null,
  },
  padding: {
    type: [Number, String],
    default: null,
  },
})

const MAIN_AXIS_MAP = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
}

const CROSS_AXIS_MAP = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
}

function toCssUnit(val) {
  if (val === null || val === undefined || val === '') return undefined
  if (typeof val === 'number') return `${val}px`
  if (/^\d+(\.\d+)?$/.test(String(val).trim())) return `${val}px`
  return String(val)
}

const columnStyle = computed(() => {
  const style = {
    display: props.mainAxisSize === 'min' ? 'inline-flex' : 'flex',
    flexDirection: 'column',
    justifyContent: MAIN_AXIS_MAP[props.mainAxisAlignment] || 'flex-start',
    alignItems: CROSS_AXIS_MAP[props.crossAxisAlignment] || 'stretch',
    gap: toCssUnit(props.gap),
    padding: toCssUnit(props.padding),
  }

  if (props.mainAxisSize === 'max') {
    style.width = '100%'
    style.height = '100%'
  }

  if (props.flex !== null && props.flex !== undefined && props.flex !== '') {
    style.flex = `${props.flex} 1 0%`
    style.minWidth = '0'
    style.minHeight = '0'
  }

  return style
})
</script>

<template>
  <div class="f-column" :class="{ 'f-column--max': mainAxisSize === 'max' }" :style="columnStyle">
    <slot />
  </div>
</template>

<style scoped>
.f-column {
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
}

/* Si se coloca un Row directamente dentro de un Column, se expande verticalmente por defecto (salvo que use mainAxisSize="min") */
.f-column > :deep(.f-row--max) {
  flex: 1 1 0%;
}
</style>
