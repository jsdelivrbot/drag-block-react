import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import initialState from './initialState';

const configureStore = () => {
	const createStoreWithMiddleware = applyMiddleware()(createStore);
	const store = createStoreWithMiddleware(rootReducer);
	const middlewares = [thunk];

	if(process.env.NODE_ENV !== 'production') {
		// middlewares.push(createLogger());
	}
	
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middlewares)
	);
}

export default configureStore;
