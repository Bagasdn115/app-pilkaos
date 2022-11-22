export const StepperValue1 = () => import('../..\\components\\stepper-value1.vue' /* webpackChunkName: "components/stepper-value1" */).then(c => wrapFunctional(c.default || c))
export const StepperValue2 = () => import('../..\\components\\stepper-value2.vue' /* webpackChunkName: "components/stepper-value2" */).then(c => wrapFunctional(c.default || c))
export const StepperValue3 = () => import('../..\\components\\stepper-value3.vue' /* webpackChunkName: "components/stepper-value3" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
