import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useUser from '../Hooks/useUser';
import './Portal.css'; 

const Portal = () => {
    const { user } = useUser();
    const [studentInfo, setStudentInfo] = useState(null);
    const [activeTab, setActiveTab] = useState('info'); 
    const [selectedSemester, setSelectedSemester] = useState(''); 

    useEffect(() => {
        const fetchStudentInfo = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? { authtoken: token } : {};
            const response = await axios.get('/portal', { headers });
            setStudentInfo(response.data);
            
            setSelectedSemester(response.data.semesters[0]?.period);
        };

        if (user) {
            fetchStudentInfo();
        }
    }, [user]);

    if (!studentInfo) {
        return <p className="loading">Please Login to see your student information</p>;
    }

    const getSelectedSemesterData = () => {
        return studentInfo.semesters.find(semester => semester.period === selectedSemester);
    };

    return (
        <div className="portal-container">
            <div className="sidebar">
                <img src={`/Resources/${studentInfo.firebaseUID}.jpg`} alt="Profile" className="profile-photo" />
                <ul className="submenu">
                    <li className={activeTab === 'info' ? 'active' : ''} onClick={() => setActiveTab('info')}>Student's Info</li>
                    <li className={activeTab === 'grades' ? 'active' : ''} onClick={() => setActiveTab('grades')}>Grades</li>
                    <li className={activeTab === 'bills' ? 'active' : ''} onClick={() => setActiveTab('bills')}>Bills</li>
                </ul>
            </div>
            <div className="content">
                {activeTab === 'info' && (
                    <div className="student-info">
                        <h1>Welcome, {studentInfo.name}</h1>
                        <p><strong>Email:</strong> {studentInfo.email}</p>
                        <p><strong>Student ID:</strong> {studentInfo.studentId}</p>
                        <p><strong>Date of Birth:</strong> {studentInfo.dateOfBirth}</p>
                        <p><strong>Gender:</strong> {studentInfo.gender}</p>
                        <p><strong>Grade:</strong> {studentInfo.grade}</p>
                        <p><strong>Address:</strong> {studentInfo.address}</p>
                        <p><strong>Guardian Contact:</strong> {studentInfo.guardianContact}</p>
                        <Link to="/change-password"><button className='btn-change'>Change your password</button></Link>
                    </div>
                )}

                {activeTab === 'grades' && (
                    <div className="grades-section">
                        <h2>Grades</h2>
                        <label htmlFor="semester">Select Semester:</label>
                        <select id="semester" value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)}>
                            {studentInfo.semesters.map(semester => (
                                <option key={semester.period} value={semester.period}>{semester.period}</option>
                            ))}
                        </select>

                        <table className="grades-table">
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(getSelectedSemesterData().grades).map(([subject, grade]) => (
                                    <tr key={subject}>
                                        <td>{subject}</td>
                                        <td>{grade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'bills' && (
                    <div className="bills-section">
                        <h2>Bills</h2>
                        <label htmlFor="semester">Select Semester:</label>
                        <select id="semester" value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)}>
                            {studentInfo.semesters.map(semester => (
                                <option key={semester.period} value={semester.period}>{semester.period}</option>
                            ))}
                        </select>

                        <table className="bills-table">
                            <thead>
                                <tr>
                                    <th>Bill Item</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(getSelectedSemesterData().bills).map(([item, bill]) => (
                                    <tr key={item}>
                                        <td>{item}</td>
                                        <td>{bill.Amount}</td>
                                        <td>{bill.Status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portal;
