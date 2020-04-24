import { GET_USER_DATA } from './actionTypes';
import { toastError } from '../../Util/funcions';

export const getUserData = () => {
    return async (dispatch) => {
        try {
            setTimeout(() => {
                dispatch({ type: GET_USER_DATA, user: { name: 'Alcides', role: 'ADMIN' } });
            }, 4000);
        } catch (error) {
            toastError(error);
        }
    };
};