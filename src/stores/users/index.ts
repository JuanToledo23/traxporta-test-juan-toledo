import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type User } from '../../services/users/types'
import { type APIResponse } from '../../services/types'
import { API } from '../../services'
import { AxiosError } from 'axios'

export const useUserStore = defineStore('userStore', () => {
  const users = ref<User[]>([])
  const filteredUsers = ref<User[]>([])

  function initUsers(data: User[]) {
    users.value = data
    filteredUsers.value = data
  }

  function dispatchFilterUsers(text: string) {
    filteredUsers.value = users.value.filter(
      (user) =>
        user.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        user.email.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    )
  }

  async function dispatchGetUsers(): Promise<APIResponse<null>> {
    try {
      const { status, data } = await API.users.getAllUsers()
      if (status === 200) {
        initUsers(data as unknown as User[])
        return {
          success: true,
          content: null
        }
      }
    } catch (error) {
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status,
        content: null
      }
    }
    return {
      success: false,
      content: null,
      status: 400
    }
  }

  return {
    users,
    filteredUsers,
    initUsers,
    dispatchGetUsers,
    dispatchFilterUsers
  }
})
