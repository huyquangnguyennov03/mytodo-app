import todoListReducer from '../components/TodoList/TodosSlice';
import filtersReducer from '../components/Filters/FiltersSlice';
import { combineReducers } from 'redux';


// const rootReducer = (state = {}, action) => {
//     return{
//         todoList: todoListReducer(state.todoList, action),
//         filters: filtersReducer(state.filters, action),
//     }
// }

const rootReducer = combineReducers({
    todoList: todoListReducer,
    filters: filtersReducer
})

export default rootReducer;