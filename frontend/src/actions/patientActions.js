import axios from 'axios';
import { GET_PATIENT, UPDATE_PATIENT } from './types';

export const getPatient = () => async (dispatch, getState) => {
    const token = getState().auth.token;
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    const res = await axios.get('/api/me/', config);
    dispatch({
        type: GET_PATIENT,
        payload: res.data,
    });
};

export const updatePatient = (patient) => async (dispatch, getState) => {
    const token = getState().auth.token;
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    const res = await axios.put('/api/me/', patient, config);
    dispatch({
        type: UPDATE_PATIENT,
        payload: res.data,
    });
};
