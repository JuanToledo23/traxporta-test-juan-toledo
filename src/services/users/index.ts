import http from '../api'
import { type APIResponse } from '../types'
import { type User } from './types'

async function getAllUsers() {
  return await http.get<APIResponse<User[]>>('users')
}

export default { getAllUsers }
