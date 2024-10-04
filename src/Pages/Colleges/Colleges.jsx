// src/pages/Colleges.js
import { Link } from 'react-router-dom';

const colleges = [
    {
        id: 1,
        name: 'College A',
        rating: 4.5,
        admissionDate: 'Aug 2024',
        researchCount: 20,
        image: 'college-a.jpg',
    },
    // Add more college objects
];

const Colleges = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Colleges</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {colleges.map((college) => (
                    <div key={college.id} className="border p-4">
                        <img src={college.image} alt={college.name} className="mb-2" />
                        <h2 className="text-xl font-bold">{college.name}</h2>
                        <p>Rating: {college.rating}</p>
                        <p>Admission Date: {college.admissionDate}</p>
                        <p>Research Papers: {college.researchCount}</p>
                        <Link to={`/colleges/${college.id}`} className="text-blue-500">Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Colleges;
