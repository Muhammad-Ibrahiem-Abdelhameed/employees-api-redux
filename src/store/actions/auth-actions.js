import axios from 'axios';

export const AuthActions = {
    AUTH_START : 'AUTH_START',
    AUTH_SUCCESS : 'AUTH_SUCCESS',
    AUTH_FAIL : 'AUTH_FAIL',
    AUTH_LOGOUT : 'AUTH_LOGOUT'
};

export const objAuthStart = () => ({
    type : AuthActions.AUTH_START
});

export const objAuthSuccess = (token, userId) => ({
    type: AuthActions.AUTH_SUCCESS,
    token,
    userId
});

export const objAuthFail = error => ({
    type: AuthActions.AUTH_FAIL,
    error
});

export const objAuthLogout = () => ({
    type: AuthActions.AUTH_LOGOUT,
});


export const auth = (email, password) => dispatch => {
    dispatch(objAuthStart());
    const authData = {
        email: email,
        password : password,
        returnSecureToken : true
    };
    //verifyPassword
    //signupNewUser
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDeT3wIjJGKbAj0_OT8R-XXp6z21JNKt9I', authData )
        .then( response => {
            localStorage.setItem('user', JSON.stringify({
                    token : response.data.idToken,
                    userId : response.data.localId}));
            dispatch(objAuthSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeOut(response.data.expiresIn));

        })
        .catch( error => {
                console.log(error);
                dispatch(objAuthFail(error));
        });
};

export const logout = () => dispatch => {
    dispatch(objAuthLogout());
    localStorage.removeItem('user');
};

export const checkAuthTimeOut = expTime => dispatch => {
    setTimeout(()=> {
        dispatch(logout())
    } , expTime*1000);
};