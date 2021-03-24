import { categoryConstants, favoriteConstants } from '../actions/Constants'

const initialState = {
    category: []
}

const categoryReducer = (state = initialState, action) => {
    console.log('reducers')
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                category: action.payload.categories,
            }
            break;
        default:
            state = {
                ...state
            }
    }
    return state
}

export default categoryReducer