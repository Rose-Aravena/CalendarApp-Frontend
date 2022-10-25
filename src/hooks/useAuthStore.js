import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {

    const {status, user, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({email, password}) => {
        dispatch( onChecking());
        try {
            const {data} = await calendarApi.post('/auth', {email, password});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({name: data.name, uid: data.uid}))
        } catch (error) {
            dispatch( onLogout('Email o contraseña incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const startRegister = async({name, email, password}) => {
        try {
            const {data} = await calendarApi.post('/auth/new', {name, email, password});
            dispatch(onLogin({name: data.name, uid: data.uid}))
        } catch ({response}) {
            dispatch( onLogout(response.data.msg));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    return {
        status,
        user,
        errorMessage,

        startLogin,
        startRegister
    }
}