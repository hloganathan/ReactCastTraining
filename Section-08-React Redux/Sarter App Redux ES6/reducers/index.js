import {combineReducer } from 'redux';
import PostReducer from './reducer_post',
import {reducer as FormReducer} from 'redux-form'

const rootReducer = combineReducer({
	Posts : PostReducer,
	form : FormReducer
});

export default rootReducer;