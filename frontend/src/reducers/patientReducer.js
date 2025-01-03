import { GET_PATIENT, UPDATE_PATIENT } from '../actions/types';

const initialState = {
    patient: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PATIENT:
        case UPDATE_PATIENT:
            return {
                ...state,
                patient: payload,
            };
        default:
            return state;
    }
}
