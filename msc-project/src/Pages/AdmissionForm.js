import React, { useState } from 'react';
import './AdmissionForm.css';
import axios from 'axios';

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        dob: '',
        address: '',
        parentName: '',
        parentPhone: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/admission/submit-form', formData);
            if (response.status === 201) {
                alert('Student admission successfully submitted!');
                // Clear form
                setFormData({
                    name: '',
                    gender: '',
                    dob: '',
                    address: '',
                    parentName: '',
                    parentPhone: '',
                });
            }
        } catch (error) {
            alert('Error submitting admission. Please try again.');
            console.error(error);
        }
    };

    return (
        <div className="admission-form-container">
            <h2>Student Admission Form</h2>
            <form onSubmit={handleSubmit} className="admission-form">
                <div className="form-group">
                    <label>Student Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Parent/Guardian Name:</label>
                    <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Parent's Phone Number:</label>
                    <input
                        type="text"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Submit Admission</button>
            </form>
        </div>
    );
};

export default AdmissionForm;