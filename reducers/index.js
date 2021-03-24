import { combineReducers } from 'redux';
import categoryReducers from './category.reducers';
import productReducer from './product.reducers';

const rootReducer = combineReducers({
    categories: categoryReducers,
    products : productReducer
});

export default rootReducer;