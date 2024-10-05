import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../Sheard/Spinner/Spinner';
import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { IoMdArrowRoundBack } from 'react-icons/io';
const CollegeDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({})
    const [review, setReview] = useState({})
    const { collegeName, subject, email, phone, address, dob, photo, _id } = data || {}
    const { CollegePhoto, description, ratting } = review || {}
    const navigate = useNavigate()
    useEffect(() => {
        setLoading(true)
        axios.get(`https://book-college-services-server.vercel.app/college-details/${id}`)
            .then(data => {
                console.log(data?.data);
                setLoading(false)
                setData(data?.data)
            }
            ).catch(err => {
                console.log(err);
            })
        axios.get(`https://book-college-services-server.vercel.app/college-details-review/${id}`)
            .then(data => {
                console.log(data?.data);
                setLoading(false)
                setReview(data?.data)
            }
            ).catch(err => {
                console.log(err);
            })
    }, [id])

    if (loading) return <Spinner />
    return (
        <div className="p-4 container mx-auto mb-[70px]">
            <div className='my-[10px]'>
                <button onClick={() => navigate(-1)} className='flex px-[20px] py-[4px] items-center gap-[5px] border border-[#19191D] hover:bg-[#19191D] hover:text-[#ddd] duration-300 transition-all shadow-2xl'><IoMdArrowRoundBack />
                    <span>back</span></button>
            </div>
            <div className='flex flex-col md:flex-row gap-[20px]'>
                <div className='md:w-[50%] md:h-[500px] lg:h-[700px] border p-[50px]'>
                    <img src={CollegePhoto || photo} alt="" className='h-full w-full object-contain' />
                </div>
                <div className='border md:w-[50%] flex flex-col gap-[20px] p-[20px] md:p-[70px]'>
                    <div className='flex flex-col md:flex-row justify-between md:items-center'>
                        <p><span className='text-orange-500'>CollegeId:</span> {_id}</p>
                        <p> <span className='text-orange-500'>Date:</span>{dob}</p>
                    </div>
                    <h1 className='text-[32px] md:text-[52px] uppercase text-orange-500'>{collegeName}</h1>
                    <p className='text-[20px] capitalize'>Subject Name : {subject}</p>
                    <p className='text-[20px] capitalize'>Address : {address}</p>

                    <p className='text-[20px]'>Email : {email}</p>
                    <p className='text-[20px]'>Phone : {phone}</p>
                    <div className='flex flex-col gap-[10px]'>
                        <h3 className='font-bold text-xl text-orange-500'>Review</h3>
                        <div className='flex items-center justify-start gap-[5px]'>
                            <p className='text-[18px]'>Ratting:</p>
                            <Rating className='text-orange-500 mt-[2px]' emptySymbol={<FaStar />} initialRate={ratting} readonly />
                        </div>
                        <p className='break-words leading-[30px] tracking-[1px] text-[18px]'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;
