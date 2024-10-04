/* eslint-disable react/prop-types */



import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateUserProfileModal = ({ selectedContact, setLoad }) => {

    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        console.log(data);
        const newData = {
            name: data?.name,
            contact: data?.number
        }
        console.log(newData);
        setLoad(true)
        axios.patch(`http://localhost:5000/single-user/${selectedContact?._id}`, newData)
            .then(data => {
                console.log(data);
                if (data) {
                    Swal.fire("Good job!", "Updated", "success");
                    setLoad(false)
                    document.getElementById("my_modal_1").close()
                }
            }).catch((err) => { console.log(err); })
    };

    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <p className="text-lg">Name:</p>
                        <input
                            {...register("name")}
                            type="text"
                            defaultValue={selectedContact?.name}
                            name="name"
                            className="input input-bordered  w-full mb-2"
                        />
                    </div>
                    <div>
                        <p className="text-lg">Email:</p>
                        <input
                            {...register("email")}
                            type="text"
                            name="email" // Corrected the name attribute
                            disabled
                            className="input input-bordered  w-full mb-2"
                            defaultValue={selectedContact?.email}

                        />
                    </div>
                    <div>
                        <p className="text-lg">Phone:</p>
                        <input
                            {...register("number")}
                            type="number"
                            name="number" // Corrected the name attribute
                            className="input input-bordered  w-full mb-2"
                            defaultValue={selectedContact?.contact}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Update Now"
                        className="brand-btn w-full p-3 rounded-xl mt-2 bg-[#FDE047]"
                    />
                </form>
                <div className="modal-action">
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-4 top-2"
                        onClick={() => document.getElementById("my_modal_1").close()}>✕</button>
                </div>
            </div>
        </dialog>
    );
};

export default UpdateUserProfileModal;
