import { ADD_EMPLOYEE } from "./actions";

const initialState = {
    employees: [],
};

function reducer(state = initialState, action) {
    if (action.type === ADD_EMPLOYEE) {
        return {
            ...state,
            employees: [...state.employees, action.payload],
        }
    }

    return state;
}

export default reducer;