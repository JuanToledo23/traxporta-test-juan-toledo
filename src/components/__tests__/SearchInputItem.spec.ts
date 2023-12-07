import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SearchInputItem from '../common/SearchInputItem.vue'

describe('MyInput.vue', () => {
  it('renders input value and emits update:modelValue on input', async () => {
    const wrapper = mount(SearchInputItem, {
      props: {
        modelValue: 'initialValue',
      },
    });

    const input = wrapper.find('input')
    expect(input.element.value).toBe('initialValue')

    await input.setValue('newInputValue')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})