// src/pages/MyCollege.js
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const MyCollege = () => {
    const location = useLocation();
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        // Save review and rating to the database or state
        console.log('Review submitted:', review, 'Rating:', rating);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My College</h1>
            {location.state && (
                <div>
                    <p><strong>Candidate Name:</strong> {location.state.name}</p>
                    <p><strong>Subject:</strong> {location.state.subject}</p>
                    <p><strong>Email:</strong> {location.state.email}</p>
                    <p><strong>Phone:</strong> {location.state.phone}</p>
                    <p><strong>Address:</strong> {location.state.address}</p>
                    <p><strong>Date of Birth:</strong> {location.state.dob}</p>
                </div>
            )}

            <form onSubmit={handleReviewSubmit} className="mt-4">
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
                />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">Submit Review</button>
            </form>
        </div>
    );
};

export default MyCollege;
