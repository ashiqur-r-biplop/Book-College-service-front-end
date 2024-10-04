// src/pages/Admission.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admission = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        phone: '',
        address: '',
        dob: '',
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save formData to the database or state
        // Redirect to "My College" page after submission
        navigate('/my-college', { state: formData });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <input
                type="text"
                placeholder="Candidate Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border p-2 my-2 w-full"
                required
            />
            <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="border p-2 my-2 w-full"
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border p-2 my-2 w-full"
                required
            />
            <input
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border p-2 my-2 w-full"
                required
            />
            <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="border p-2 my-2 w-full"
                required
            />
            <input
                type="date"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="border p-2 my-2 w-full"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 w-full">Submit</button>
        </form>
    );
};

export default Admission;
