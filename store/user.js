/**
 * STATES
 */
export const state = () => ({
  profile: '',
  user: '',
  user_avatar: process.env.DEFAULT_AVATAR,
  fetched: false,
  avatar_url: process.env.STORAGE_URL
})

/**
 * MUTATIONS
 */
export const mutations = {
  SET (state, object) {
    state.profile = object
    state.user_avatar = state.avatar_url + state.profile.avatar_path
  },
  SET_AVATAR (state, object) {
    state.user_avatar = object
  }

}// MUTATIONS

/**
 * ACTIONS
 */
export const actions = {

  async get ({ commit }, params) {
    await this.$axios.get('/user/profile')
      .then((response) => {
        if (response.status === 200 && response.data !== '') {
          commit('SET', response.data)
        }
      })
  }, // /GET profile

  async getAvatar ({ commit }) {
    await this.$axios
      .get('/user/getavatar')
      .then((response) => {
        if (response.status === 200 && response.data !== '' && response.data != null) {
          commit('SET_AVATAR', response.data)
        }
      })
      .catch(function (_error) {
        // handle error
      })
  }
}// ACTIONS

/**
 * GETTERS
 */
export const getters = {
  user_avatar: state => state.user_avatar
}// GETTERS
