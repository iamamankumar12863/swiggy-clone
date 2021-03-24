import { buttonConstants, favoriteConstants, productsConstants } from '../actions/Constants'

const initialState = {
    product: []
}

const productReducer = (state = initialState, action) => {
    console.log('reducers')
    switch (action.type) {
        case productsConstants.GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                product: action.payload.products,
            }
            break;
        case favoriteConstants.ADD_TO_FAVORITE:
            state = {
                ...state,
                product: state.product.map(product => product.id === action.payload.id ?
                    product.status === 1 ? { ...product, status: 0 && undefined } :
                        { ...product, status: 1 } :
                    product
                )
            }
            break;
        case buttonConstants.TOGGLE_BUTTON:
            state = {
                ...state,
                product: state.product.map(product => product.id === action.payload.id ?
                    product.buttonValue >= 1 ?
                        action.payload.key === "plus" ?
                            { ...product, buttonValue: product.buttonValue + 1 } :
                            { ...product, buttonValue: product.buttonValue - 1 } :
                        { ...product, buttonValue: 1 } :
                    product
                )
            }
            break;
        default:
            state = {
                ...state
            }
    }
    return state
}

export default productReducer