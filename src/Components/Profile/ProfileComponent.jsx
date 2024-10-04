import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UpdateUserProfileModal from "./UpdateUserProfileModal";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Spinner from "../../Sheard/Spinner/Spinner";
const ProfileComponent = () => {
    const defaultPhotoURL =
        "https://i.pinimg.com/1200x/0f/66/bc/0f66bc842998ed2c6f82f85f702b0e44.jpg";

    const { user } = useContext(AuthContext);
    console.log(user);
    const userEmail = user?.email;
    const photoURL = user?.photoURL;
    const [load, setLoad] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/single-user?email=${userEmail}`)
            .then(data => {
                setSelectedContact(data?.data);
            }).catch(err => {
                console.log(err);
            })
    }, [userEmail, load]);


    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const dateInfo = {
        date,
        month,
        year,
    };

    const handleViewClick = () => {
        const modal = document.getElementById("my_modal_1");
        modal.showModal();
    };
    if (load) {
        return <Spinner />
    }
    return (
        <div>
            <div className="max-w-[1200px] mx-auto w-[80%] pt-[100px]">
                <div className="w-full flex justify-center items-center">
                    <div className="max-w-xs h-100 px-4 py-3 rounded-md shadow-md bg-gray-50 text-gray-800 w-[250px]">
                        <img
                            src={photoURL ? `${photoURL}` : `${defaultPhotoURL}`}
                            alt=""
                            className="object-cover mx-auto object-center w-24 md:w-32 rounded-full h-24 md:h-32 bg-gray-500 my-6"
                        />
                        <div className="my-3">
                            <div className="grid grid-cols-2 items-center mb-4">
                                <p className="text-gray-500">My Profile</p>

                                <p className="text-xs text-gray-500">
                                    {" "}
                                    Date : {`${dateInfo.date}-${dateInfo.month}-${dateInfo.year}`}
                                </p>
                            </div>

                            <div>
                                <div className=" grid w-full mb-4 grid-cols-1 text-xs text-gray-500 ">
                                    <p className="text-gray-500   text-xs">
                                        Name : {selectedContact?.name}
                                    </p>
                                </div>
                                <div className=" grid w-full mb-4 grid-cols-1 text-xs text-gray-500 ">
                                    <p className="text-gray-500   text-xs">
                                        <p className=" text-gray-500  text-xs">
                                            Phone : {selectedContact?.contact}
                                        </p>
                                    </p>
                                </div>
                                <div className=" grid w-full mb-4 grid-cols-1 text-xs text-gray-500 ">
                                    <p>Email : {selectedContact?.email}</p>
                                    <p >Gender : <span className="uppercase">{selectedContact?.gander}</span> </p>
                                </div>
                            </div>
                        </div>

                        <button
                            className="flex items-center justify-center w-full p-3 font-semibold  rounded-md bg-[#FDE047] text-black"
                            onClick={handleViewClick}
                        >
                            {" "}
                            Update Profile
                        </button>
                    </div>
                </div>


                {/* some change of note */}
                <UpdateUserProfileModal
                    setLoad={setLoad}
                    selectedContact={selectedContact}
                ></UpdateUserProfileModal>
            </div>
        </div>
    );
};

export default ProfileComponent;