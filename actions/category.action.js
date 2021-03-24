import { categoryConstants,favoriteConstants } from "./Constants";

 export const getCategory = () => {
    return async (dispatch) => {
        console.log('action')


        const data = [
            {
                id: 1, name: 'Cake', image: 'https://i.ibb.co/jrFjqRS/love-food-2.png'
            },
            {
                id: 2, name: 'Egg', image: 'https://i.ibb.co/hmXRGGC/love-food.png'
            },
            {
                id: 3, name: 'Rice', image: 'https://i.ibb.co/64zP8DW/love-food-1.png'
            },
            {
                id: 4, name: 'Biscuit', image: 'https://i.ibb.co/jg6qDK6/1.png'
            },
            {
                id: 5, name: 'Egg', image: 'https://i.ibb.co/hmXRGGC/love-food.png'
            },
            {
                id: 6, name: 'Cake', image: 'https://i.ibb.co/jrFjqRS/love-food-2.png'
            },
            {
                id: 7, name: 'Cake', image: 'https://i.ibb.co/jrFjqRS/love-food-2.png'
            },
            {
                id: 8, name: 'Rice', image: 'https://i.ibb.co/64zP8DW/love-food-1.png'
            },
            {
                id: 9, name: 'Biscuit', image: 'https://i.ibb.co/jg6qDK6/1.png'
            },
            {
                id: 10, name: 'Cake', image: 'https://i.ibb.co/hmXRGGC/love-food.png'
            },
        ]

        dispatch({
            type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
            payload: {
                categories: data
            }
        })
    }
}

