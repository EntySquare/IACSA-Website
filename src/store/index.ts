// 统一管理所有的 pinia store
import UserStore from './modules/user'
import MainStore from './modules/main'
export default function useStore () {
  return {
    main: MainStore(),
    user: UserStore()
  }
}
