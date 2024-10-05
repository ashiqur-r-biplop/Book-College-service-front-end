// src/pages/Colleges.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../Sheard/Spinner/Spinner';

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
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios?.get("http://localhost:5000/colleges")
            .then(data => {
                setData(data?.data)
                setLoading(false)
            }).catch(err => console.log(err))
    }, [])
    console.log(data);
    if (loading) {
        return <Spinner />
    }
    return (
        <div className="p-4 container mx-auto h-full mb-[70px] ">
            <h1 className="text-2xl font-bold mb-4">Colleges</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.map((college) => (
                    <div key={college.id} className="border p-4 flex flex-col gap-[15px]">
                        <div className='w-full h-[250px] py-[40px]  bg-gray-50'>
                            <img src={college.photo} alt={college.name} className="mb-2 object-contain h-full w-full" />
                        </div>
                        <div className='flex-col gap-[5px]'>
                            <h2 className="text-xl font-bold">{college.name}</h2>
                            <p>Rating: {college.rating}</p>
                            <p>Admission Date: {college.admissionDate}</p>
                            <p>Research Papers: {college.researchCount}</p>
                        </div>
                        <Link to={`/colleges/${college.id}`} className="text-blue-500">Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Colleges;
