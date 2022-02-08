export default (state, action) => {
    switch (action.type) {
        case "GET_CURRENT_WEATHER":
            return {
                ...state,
                weather: action.payload
            }
        case "SET_LOCATION":
            return {
                ...state,
                location: action.payload.location
            }
        default:
            return state;
    }
}