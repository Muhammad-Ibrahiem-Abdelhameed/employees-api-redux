import { AuthActions } from '../actions/auth-actions';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? user : {
    token : null,
    userId : null,
    error : null,
    loading: false
};

const auth = ( state = initialState, action) => {
    switch (action.type){
        case AuthActions.AUTH_START:
            return{
                ...state,
                loading : true,
                error:null
            };
        case AuthActions.AUTH_SUCCESS:
        {
            //console.log(action.token);
            return{
                ...state,
                token : action.token,
                userId : action.userId,
                loading:false,
                error:null

            };
        }

        case AuthActions.AUTH_FAIL:
            return{
                ...state,
                loading:false,
                error:action.error
            };
        case AuthActions.AUTH_LOGOUT:
            return{
                ...state,
                loading:false,
                token:null,
                userId : null
            };

        default:
            return state;
    }

};

export default auth;