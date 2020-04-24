import { toast } from 'react-toastify';

export function toastError(error) {
    if (error.response) {
        if (error.response.data) {
            if (error.response.data.userMessage) return toast.error(error.response.data.userMessage);
            else if (error.response.data.message) return toast.error(error.response.data.message);
            else if (error.response.status) return toast.error(error.response.status);
        }
    } else {
        return toast.error(error.message);
    }
}