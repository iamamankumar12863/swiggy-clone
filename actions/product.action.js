import {  buttonConstants, favoriteConstants, productsConstants } from "./Constants";

export const getProducts = () => {
    return async (dispatch) => {
        console.log('action')
        const data = [
            {
                id: 1, name: 'Fried Fish', image: 'https://i.ibb.co/8sns9Jc/Untitled-design-9.png'
            },
            {
                id: 2, name: 'Fried Rice', image: 'https://i.ibb.co/TTyqgXz/Untitled-design-8.png'
            },
            {
                id: 3, name: 'Chicken Biryani', image: 'https://i.ibb.co/W6DsQ56/Untitled-design-7.png'
            },
            {
                id: 4, name: 'Burger King', image: 'https://i.ibb.co/cwyJ70s/Untitled-design-5.png'
            },
            {
                id: 5, name: 'Fresh Tomato', image: 'https://i.ibb.co/5nnSzVn/Untitled-design-6.png'
            },
            {
                id: 6, name: 'Fried Rice', image: 'https://i.ibb.co/TTyqgXz/Untitled-design-8.png'
            }
        ]

        dispatch({
            type: productsConstants.GET_ALL_PRODUCTS_SUCCESS,
            payload: {
                products: data
            }
        })
    }
}

export const addToFavorite = (id) => {
    console.log('addtofavorite')
    return async (dispatch) => {
        dispatch({
            type: favoriteConstants.ADD_TO_FAVORITE,
            payload: {
                id: id
            }
        })
    }
}

export const toggleButton = (id,key) => {
    console.log(id)
    return async (dispatch) => {
        dispatch({
            type: buttonConstants.TOGGLE_BUTTON,
            payload: {
                id: id,
                key:key
            }
        })
    }
}