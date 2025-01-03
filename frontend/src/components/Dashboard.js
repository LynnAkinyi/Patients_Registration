import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPatient, updatePatient } from '../actions/patientActions';

const Dashboard = () => {
    const dispatch = useDispatch();
    const patient = useSelector((state) => state.patient.patient);

    const [formData, setFormData] = useState({
        username: '',
        phone: '',
    });

    useEffect(() => {
        dispatch(getPatient());
    }, [dispatch]);

    useEffect(() => {
        if (patient) {
            setFormData({
                username: patient.username,
                phone: patient.phone,
            });
        }
    }, [patient]);

    const { username, phone } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePatient({ username, phone }));
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onChange}
                required
            />
            <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={onChange}
                required
            />
            <button type="submit">Update</button>
        </form>
    );
};

export default Dashboard;
