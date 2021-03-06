import LazyImage from './Image.vue'
import * as defaults from 'defaults'

export default {
  title: 'LazyImage',
  component: LazyImage
}

const Template = (args, { argTypes }) => ({
  components: { LazyImage },
  props: Object.keys(argTypes),
  template: `
  <lazy-image
      class="lazy-image"
      style="width: 250px; height: 250px;"
      :alt="alt"
      :url="url"
      :color="color"
      @error="onError"
      @load="onLoad"
    >
  </lazy-image>
  `
})

export const Default = Template.bind({})

Default.args = {
  alt: 'Image Alt text',
  url: 'https://via.placeholder.com/1500',
  color: defaults.background
}

Default.argTypes = {
  onLoad: {
    action: 'loadAction'
  },
  onError: {
    action: 'errorAction'
  }
}
