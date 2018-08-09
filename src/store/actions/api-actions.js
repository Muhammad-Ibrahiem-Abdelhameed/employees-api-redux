import axios from 'axios';

export const EmployeeActions = {
    FETCH_EMPLOYEES : 'FETCH_EMPLOYEES',
    CREATE_EMPLOYEE : 'CREATE_EMPLOYEE',
    EDIT_EMPLOYEE : 'EDIT_EMPLOYEE',
    DELETE_EMPLOYEE : 'DELETE_EMPLOYEE',
    ERROR_FETCH : 'ERROR_FETCH'
};

// Actions Creators

export const objEmployees = employees => ({
    type: EmployeeActions.FETCH_EMPLOYEES,
    employees
});

export const errorFetch = error => ({
    type: EmployeeActions.ERROR_FETCH,
    error
});

export const objCreateEmployee = message => ({
    type: EmployeeActions.CREATE_EMPLOYEE,
    message
});

export const objEditEmployee = message => ({
    type: EmployeeActions.CREATE_EMPLOYEE,
    message
});

export const objDeleteEmployee = (id , message) => ({
    type: EmployeeActions.DELETE_EMPLOYEE,
    id,
    message
});




export const fetchEmployees = () => dispatch => (
    axios.get("http://employeesintern.azurewebsites.net/api/employees")
        .then( response =>  {
            return dispatch(objEmployees(response.data));
        })
        .catch( error => errorFetch(error) )

);

export const createEmployee = employee => dispatch => (
    axios.post("http://employeesintern.azurewebsites.net/api/employees", employee )
        .then( response =>{
            let res = response.status === 201 ? "Create Success" : "Create Fail";
            return dispatch(objCreateEmployee(res));
        })
);

export const editEmployee = (id, employee) => dispatch => (
    axios.put("http://employeesintern.azurewebsites.net/api/employees/"+id, employee )
        .then( response =>{
            let res = response.status === 204 ? "Edit Success" : "Edit Fail";
            return dispatch(objEditEmployee(res));
        })
);


export const deleteEmployee = id => dispatch => (
    axios.delete("http://employeesintern.azurewebsites.net/api/employees/" +id)
        .then(response => {
            console.log( "First Actions creator", response);
            let isSuccess = response.status === 204 ? "Delete Success" : "Delete Fail";
            return dispatch(objDeleteEmployee( id, isSuccess));
        })
        //.then( response => console.log( "Second Actions Creator", response))

);

