import api from '@/services/api'
import { composeQueryString } from '@/utils/queryStringComposer'

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
	},
	GET_TRIPS: async ({ commit }, payload) => {
		const queryParams = []
		Object.keys(payload).forEach(key => {
			queryParams.push({ key, value: payload[key] })
		})

		const query = composeQueryString(queryParams)

		const response = await api('/trips', query).get()
		commit('SET_TRIPS', response.data)
		console.log(response.data)
	},
	GET_SINGLE_TRIP: async ({ commit }, id) => {
		const response = await api(`/trips/${id}`).get()
		console.log(response.data)
	}
}