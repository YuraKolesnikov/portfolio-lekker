import api from '@/services/api'

export default {
	GET_DESTINATIONS: async ({ commit, state }) => {
		const response = await api('/destinations').get()
		const { data } = response
		commit('SET_DESTINATIONS', data)
	},
	GET_SEARCH_CONTROLS: async ({ commit }) => {
		const searchControls = {}
		const response_1 = await api('/destinations/short').get()
		searchControls.destinations = [...response_1.data]

		const response_2 = await api('/durations').get()
		searchControls.durations = [...response_2.data]

		commit('SET_SEARCH_CONTROLS', searchControls)
	},
	GET_BEST_SELLERS: async ({ commit }) => {
		const response = await api('/best-sellers').get()
		commit('SET_BEST_SELLERS', response.data)
	}
}