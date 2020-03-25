export default {
	SET_DESTINATIONS: (state, destinations) => state.destinations = [...destinations],
	SET_SEARCH_CONTROLS: (state, searchControls) => state.searchControls = { ...searchControls },
	SET_BEST_SELLERS: (state, bestSellers) => state.bestSellers = [...bestSellers],
	SET_TRIPS: (state, trips) => state.trips = [...trips],
	SET_SINGLE_TRIP: (state, singleTrip) => state.singleTrip = { ...singleTrip }
}