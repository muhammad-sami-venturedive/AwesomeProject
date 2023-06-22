import { ADD_TO_CART, REMOVE_FROM_CART } from "../../Actions/ActionTypes/ActionTypes";

export default CartItems = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.payload
            ]
        case REMOVE_FROM_CART:
            return state.filter((item) => item.id != action.payload.id)
        default:
            return state
    }
}