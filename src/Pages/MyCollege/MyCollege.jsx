import { useEffect, useState } from 'react';
import { useGetUserEmail } from '../../Hook/useGetUserEmail';
import axios from 'axios';
import Spinner from '../../Sheard/Spinner/Spinner';
import Swal from 'sweetalert2';

const MyCollege = () => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup visibility state
    const [selectedCollege, setSelectedCollege] = useState(null); // College to review

    const [colleges, setColleges] = useState([]);
    const [load, setLoad] = useState(false);
    const [control, setControl] = useState(false);
    const { selectedContact, loading } = useGetUserEmail();

    useEffect(() => {
        setLoad(true);
        axios.get(`https://book-college-services-server.vercel.app/single-admission-college/${selectedContact?._id}`)
            .then(data => {
                setColleges(data?.data);
                setLoad(false);
                setControl(false);
            })
            .catch(err => {
                console.log(err);
                setLoad(false);
                setControl(false);
            });
    }, [selectedContact, control]);
    const handleReviewSubmit = (e) => {
        e.preventDefault();

        const inputData = {
            collegeId: selectedCollege?._id,
            studentId: selectedCollege?.studentId,
            collegeName: selectedCollege?.collegeName,
            collegePhoto: selectedCollege?.photo,
            description: review,
            rating
        };
        console.log(inputData);
        setControl(true);
        setLoad(true);

        axios.post("https://book-college-services-server.vercel.app/review", inputData)
            .then(data => {
                if (data?.data?.insertedId) {
                    console.log('Review posted successfully:', data?.data);
                    Swal.fire("Good job!", "Add Review successfully", "success");

                    setReview('');  // Reset review
                    setRating(0);    // Reset rating
                    setIsPopupOpen(false); // Close popup after submission
                    setControl(false);
                    setLoad(false);
                } else {
                    console.error('Failed to post review:', data);
                }
            })
            .catch(err => {
                console.error('Error posting review:', err);
                setControl(false);
                setLoad(false);
            });
    };


    const addReview = (college) => {
        setSelectedCollege(college); // Set the college for which the review is being added
        setIsPopupOpen(true); // Open the popup
        console.log(college);
    };

    if (loading || load || control) {
        return <Spinner />;
    }

    return (
        <div className="p-4 container mx-auto mb-[70px]">
            <h1 className="text-2xl font-bold mb-4">My College</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
                {colleges?.map((college, i) => {
                    return (
                        <div key={i} className='border p-[20px] shadow-inner flex flex-col gap-[10px] justify-start items-start'>
                            <div className='flex flex-col gap-[5px]'>
                                <p><strong>College Name:</strong> {college.collegeName}</p>
                                <p><strong>Candidate Name:</strong> {college.name}</p>
                                <p><strong>Subject:</strong> {college.subject}</p>
                                <p><strong>Email:</strong> {college.email}</p>
                                <p><strong>Phone:</strong> {college.phone}</p>
                                <p><strong>Address:</strong> {college.address}</p>
                                <p><strong>Date of Birth:</strong> {college.dob}</p>
                            </div>
                            <button onClick={() => addReview(college)} className='bg-[#FDE047] text-black px-[20px] py-[5px] rounded'>
                                Add Review
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Popup Modal for Review Form */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-[10px]">
                    <div className="bg-white p-4 rounded shadow-lg w-full md:max-w-md">
                        <h2 className="text-xl mb-4">Add Review for {selectedCollege?.collegeName}</h2>
                        <form onSubmit={handleReviewSubmit}>
                            <textarea
                                placeholder="Write your review"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                className="border p-2 my-2 w-full"
                                required
                            />
                            <input
                                type="number"
                                placeholder="Rating (1-5)"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                className="border p-2 my-2 w-full"
                                required
                                min="1"
                                max="5"
                            />
                            <div className="flex justify-between mt-4">
                                <button type="submit" className="bg-[#FDE047] text-black px-[15px] p-2 rounded">
                                    Submit Review
                                </button>
                                <button
                                    type="button"
                                    className="bg-red-600 text-white p-2 rounded"
                                    onClick={() => setIsPopupOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyCollege;
