import { createStore } from 'vuex'
import { ColumnProps, PostProps, testData, testPosts } from './testData'
export interface UserProps {
  isLogin: boolean;
  name?: string,
  id?: string,
  columnId?: number
}
export interface GlobalProps {
    columns: ColumnProps[];
    posts: PostProps[];
    user: UserProps
}
const store = createStore<GlobalProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: {
      isLogin: false,
      columnId: 1
    }
  },
  mutations: {
    login (state) {
      state.user = { ...state.user, isLogin: true, name: '蒙栋禄', id: '1' }
    },
    addPost (state, params) {
      state.posts.push(params)
    }
  }
})

export default store
