import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UserItem from '@/components/users/UserItem.vue'

describe('MyComponent.vue', () => {
  it('renders the component with props', () => {
    const props = {
      name: 'Juan Toledo',
      email: 'johntoledot@gmail.com',
      id: 1,
    }

    const wrapper = mount(UserItem, {
      props,
    })

    expect(wrapper.text()).toContain(props.name)
    expect(wrapper.text()).toContain(props.email)
    expect(wrapper.find('router-link').text()).toBe('Detail')
  })
})
