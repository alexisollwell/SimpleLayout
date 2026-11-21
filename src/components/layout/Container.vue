<script setup>
import { computed } from 'vue'

const props = defineProps({
  flex: {
    type: [Number, String],
    default: null,
  },
  expand: {
    type: Boolean,
    default: false,
  },
  width: {
    type: [Number, String],
    default: null,
  },
  height: {
    type: [Number, String],
    default: null,
  },
  color: {
    type: String,
    default: 'transparent',
  },
  textColor: {
    type: String,
    default: null,
  },
  border: {
    type: [Boolean, String],
    default: false,
  },
  borderColor: {
    type: String,
    default: null,
  },
  borderWidth: {
    type: [Number, String],
    default: null,
  },
  borderStyle: {
    /** @type {import('vue').PropType<'solid' | 'dashed' | 'dotted' | 'double' | 'none'>} */
    type: String,
    default: 'solid',
  },
  borderRadius: {
    type: [Number, String],
    default: 0,
  },
  elevation: {
    /** @type {import('vue').PropType<0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2' | '3' | '4' | '5'>} */
    type: [Number, String],
    default: 0,
  },
  padding: {
    type: [Number, String],
    default: 0,
  },
  margin: {
    type: [Number, String],
    default: 0,
  },
  alignment: {
    /** @type {import('vue').PropType<'stretch' | 'center' | 'topLeft' | 'topCenter' | 'topRight' | 'centerLeft' | 'centerRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight'>} */
    type: String,
    default: 'stretch',
    validator: (v) =>
      [
        'stretch',
        'center',
        'topLeft',
        'topCenter',
        'topRight',
        'centerLeft',
        'centerRight',
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
      ].includes(v),
  },
})

const ALIGNMENT_MAP = {
  stretch: { justifyContent: 'stretch', alignItems: 'stretch' },
  center: { justifyContent: 'center', alignItems: 'center' },
  topLeft: { justifyContent: 'flex-start', alignItems: 'flex-start' },
  topCenter: { justifyContent: 'flex-start', alignItems: 'center' },
  topRight: { justifyContent: 'flex-start', alignItems: 'flex-end' },
  centerLeft: { justifyContent: 'center', alignItems: 'flex-start' },
  centerRight: { justifyContent: 'center', alignItems: 'flex-end' },
  bottomLeft: { justifyContent: 'flex-end', alignItems: 'flex-start' },
  bottomCenter: { justifyContent: 'flex-end', alignItems: 'center' },
  bottomRight: { justifyContent: 'flex-end', alignItems: 'flex-end' },
}

const ELEVATION_MAP = {
  0: 'none',
  1: '0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12)',
  2: '0 4px 6px -1px rgba(0, 0, 0, 0.25), 0 2px 4px -2px rgba(0, 0, 0, 0.15)',
  3: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.2)',
  4: '0 20px 25px -5px rgba(0, 0, 0, 0.35), 0 8px 10px -6px rgba(0, 0, 0, 0.25)',
  5: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
}

function toCssUnit(val) {
  if (val === null || val === undefined || val === '') return undefined
  if (typeof val === 'number') return `${val}px`
  if (/^\d+(\.\d+)?$/.test(String(val).trim())) return `${val}px`
  return String(val)
}

const resolvedBorder = computed(() => {
  if (typeof props.border === 'string' && props.border.trim() !== '') {
    return props.border
  }
  const hasCustomBorder =
    props.border === true ||
    (props.borderColor !== null && props.borderColor !== '') ||
    (props.borderWidth !== null && props.borderWidth !== '' && Number(props.borderWidth) > 0)

  if (!hasCustomBorder) return 'none'

  const width = toCssUnit(props.borderWidth ?? 1)
  const style = props.borderStyle || 'solid'
  const color = props.borderColor || '#cbd5e1'
  return `${width} ${style} ${color}`
})

const containerStyle = computed(() => {
  const alignConfig = ALIGNMENT_MAP[props.alignment] || ALIGNMENT_MAP.stretch
  const hasFlex = props.flex !== null && props.flex !== undefined && props.flex !== ''
  const flexValue = hasFlex ? props.flex : props.expand ? 1 : null

  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: alignConfig.justifyContent,
    alignItems: alignConfig.alignItems,
    backgroundColor: props.color,
    color: props.textColor || undefined,
    border: resolvedBorder.value,
    borderRadius: toCssUnit(props.borderRadius),
    padding: toCssUnit(props.padding),
    margin: toCssUnit(props.margin),
    width: toCssUnit(props.width),
    height: toCssUnit(props.height),
    boxShadow: ELEVATION_MAP[props.elevation] || ELEVATION_MAP[0],
  }

  if (flexValue !== null) {
    style.flex = `${flexValue} 1 0%`
    style.minWidth = '0'
    style.minHeight = '0'
  }

  return style
})
</script>

<template>
  <div
    class="f-container"
    :class="{ 'f-container--stretch': alignment === 'stretch' }"
    :style="containerStyle"
  >
    <slot />
  </div>
</template>

<style scoped>
.f-container {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  transition:
    flex 0.25s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    border-radius 0.2s ease;
}
.f-container--stretch > :deep(.f-row),
.f-container--stretch > :deep(.f-column) {
  flex: 1 1 0%;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
}
</style>
