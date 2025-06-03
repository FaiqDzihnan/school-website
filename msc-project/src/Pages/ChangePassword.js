import React, { useState } from 'react';
import { getAuth, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from 'firebase/auth';
import './ChangePassword.css';

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmNewPassword) {
            setError("New passwords don't match");
            setSuccess(false);
            return;
        }

        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            setError('User not authenticated');
            return;
        }

        try {
            // Reauthenticate the user with their current password
            const credential = EmailAuthProvider.credential(user.email, currentPassword);
            await reauthenticateWithCredential(user, credential);

            // Update the password
            await updatePassword(user, newPassword);
            setSuccess(true);
            setError('');
        } catch (error) {
            setError(error.message);
            setSuccess(false);
        }
    };

    return (
        <div className="change-password-container">
            <h1>Change Password</h1>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">Password updated successfully!</p>}
            
            <form onSubmit={handleSubmit} className="change-password-form">
                <input
                    type="password"
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="input"
                />
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="input"
                />
                <input
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    className="input"
                />
                <button type="submit" className="submit-button">Change Password</button>
            </form>
        </div>
    );
};

export default ChangePassword;
