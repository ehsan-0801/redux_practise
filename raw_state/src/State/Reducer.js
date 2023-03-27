export const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        case "TOGGLE":
            return {
                ...state,
                terms: !state.terms,
            }
        case "INCREASE":
            return {
                ...state,
                quantity: state.quantity + action.payload,
            }
        case "DECREASE":
            return {
                ...state,
                quantity: state.quantity - action.payload,
            }

        default:
            return state;
    }

};