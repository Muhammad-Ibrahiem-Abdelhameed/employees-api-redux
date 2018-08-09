import {EmployeeActions} from "../actions/api-actions";

const initialState =  {
    employees: [],
    message : ''
};

const api = (state = initialState,  action) => {
    switch (action.type) {
        case EmployeeActions.FETCH_EMPLOYEES:
            return {
                ...state,
                employees: [...action.employees]
            };

        case EmployeeActions.CREATE_EMPLOYEE :
            return {
                ...state,
                message : action.message
            };

        case EmployeeActions.EDIT_EMPLOYEE :
            return {
                ...state,
                message : action.message
            };

        case EmployeeActions.DELETE_EMPLOYEE :
            console.log(action.message);
            return {
                employees: state.employees.filter(v => v.id !== action.id ),
                message : action.message
            };

        default:
            return state;
    }
};

export default api;