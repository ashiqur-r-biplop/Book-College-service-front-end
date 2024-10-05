// src/pages/Admission.js
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useGetUserEmail } from '../../Hook/useGetUserEmail';

const Admission = () => {

    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        phone: '',
        address: '',
        dob: '',
        photo: '', // Added 'photo' to formData
    });

    const navigate = useNavigate();
    const { selectedContact } = useGetUserEmail()
    console.log(selectedContact);
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can perform validation here if needed
        if (!formData.name || !formData.email || !formData.phone) {
            alert('Please fill all required fields');
            return;
        }

        // Simulate saving the form data (e.g., sending data to an API)
        try {
            console.log("Form data submitted:", formData);
            console.log("Form data submitted:", selectedContact?.photo);
            const admissionData = {
                ...formData,
                studentId: selectedContact._id,
                studentPhoto: selectedContact.photo,
                gander: selectedContact.gander,
            }
            axios.post("http://localhost:5000/admission", admissionData)
                .then(data => {
                    if (data?.data?.insertedId) {
                        Swal.fire("Good job!", "Admission successful", "success");
                        navigate('/my-college', { state: formData });
                    }
                })
                .catch(Err => {
                    console.log(Err);
                })

            // Redirect to "My College" page after successful submission

        } catch (error) {
            console.error("Error submitting form:", error);
            alert('There was an issue submitting your form');
        }
    };

    return (
        <div className='container mx-auto mb-[70px] '>
            <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-[10px]">
                <div>
                    <p><span className='text-red-600'>*</span>Enter Your College Name</p>
                    <input
                        type="text"
                        placeholder="College Name"
                        value={formData.collegeName}
                        onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                        className="border p-2 my-2 w-full"
                        required
                    />
                </div>
                <div>
                    <p><span className='text-red-600'>*</span>Enter Your Name</p>
                    <input
                        type="text"
                        placeholder="Candidate Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border p-2 my-2 w-full"
                        required
                    />
                </div>
                <div>
                    <p><span className='text-red-600'>*</span>Enter Subject Name</p>

                    <input
                        type="text"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="border p-2 my-2 w-full"
                        required
                    />
                </div>
                <div>
                    <p><span className='text-red-600'>*</span>Enter Your Email</p>
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border p-2 my-2 w-full"
                        required
                    />
                </div>
                <div>
                    <p><span className='text-red-600'>*</span>Enter Your College logo URl</p>
                    <input
                        type="url"
                        placeholder="College logo URl"
                        value={formData.photo}
                        onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
                        className="border p-2 my-2 w-full"
                        required
                    />
                </div>
                <div>
                    <p><span className='text-red-600'>*</span>Enter Your Number</p>

                    <input
                        type="text"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="border p-2 my-2 w-full"
                        required
                    />
                </div>
                <div>
                    <p><span className='text-red-600'>*</span>Enter Your Address</p>
                    <input
                        type="text"
                        placeholder="Address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="border p-2 my-2 w-full"
                        required
                    />
                </div>
                <div>
                    <p><span className='text-red-600'>*</span>Enter Your Date of Barth</p>
                    <input
                        type="date"
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="border p-2 my-2 w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-[#FDE047] text-black p-2 w-full">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Admission;
