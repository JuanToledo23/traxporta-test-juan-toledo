import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TitleItem from '@/components/common/TitleItem.vue' 

describe('MyComponent.vue', () => {
  it('renders the text prop', () => {
    const props = {
      text: 'Hello',
    }

    const wrapper = mount(TitleItem, {
      props,
    })

    expect(wrapper.text()).toBe(props.text)
  })
})
