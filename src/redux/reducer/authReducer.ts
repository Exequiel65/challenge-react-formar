import { types } from '../types/typesReducer';



const initialState = {
    user: ""
};

const AuthReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload
            }
        case types.authLogout:
            return {
                user : "",
                student : "",
                subjects : "",
                teachers : ""
            }
        default:
            return state
    }
}

export default AuthReducer;


