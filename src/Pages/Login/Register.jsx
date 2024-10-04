/* eslint-disable no-unused-vars */
import { faEye, faEyeSlash, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleImg from "../../assets/socialLoiginImg/google.png";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import "./Login.css";

const Register = () => {
    const [toggleIcon, setToggleIcon] = useState(false);
    const [toggleIconConfirm, setToggleIconConfirm] = useState(false);
    const [errorMassage, setErrorMassage] = useState("");
    const [gander, setGender] = useState("Others");
    const navigate = useNavigate();
    const { signUp, signInGoogle, signInGithub, ProfileUpdate, setReload } =
        useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        const confirmPassword = data.confirmPassword;
        const name = data.name;
        const photo = data.photoUrl;
        const contact = data.phoneNumber;
        const address = data.address;
        if (password !== confirmPassword) {
            setErrorMassage("Password an confirm password doesn't match");
            return;
        } else {
            setErrorMassage("");
        }
        // console.log("error", errorMassage);
        signUp(email, password)
            .then((result) => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                ProfileUpdate(name, photo).then(() => {
                    setReload(true);
                    const saveUser = {
                        email,
                        name,
                        photo,
                        role: "student",
                        gander,
                        contact,
                        address,
                    };
                    // console.log(saveUser);
                    fetch("http://localhost:5000/users", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(saveUser),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.insertedId) {
                                reset();
                                Swal.fire("Good job!", "User created successfully", "success");
                                navigate(from, { replace: true });
                            }
                        });

                    reset();
                });
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    buttonsStyling: {
                        color: "#fde047",
                        backgroundColor: "#fde047",
                    },
                    title: `${err.message}`,
                    footer: '<a href="">Why do I have this issue?</a>',
                });
            });
    };
    const handleGender = (e) => {
        setGender(e.target.value);
    };
    const handleGoogleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        signInGoogle(googleProvider)
            .then((result) => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                const saveUser = {
                    email: loggedUser.email,
                    name: loggedUser.displayName,
                    photo: loggedUser?.photoURL,
                    role: "student",
                };
                // console.log(loggedUser);
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(saveUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId || !data.insertedId) {
                            reset();
                            Swal.fire("Good job!", "User created successfully", "success");
                            navigate(from, { replace: true });

                        }
                    });
            })
            .catch((err) => { console.log(err); });
    };

    return (
        <div className="bg-[#020413c9] h-[100%] md:min-h-[calc(100vh-20px)] pt-[20px]">
            <div className="container mx-auto">
                <div className="h-full">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col justify-center items-center h-full"
                    >
                        <div className="flex flex-col justify-start bg-[#020413] items-start fullForm w-full  shadow-2xl">
                            <h2 className="text-2xl mb-2" style={{ color: "#fde047" }}>
                                Please Register
                            </h2>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                placeholder="Enter Your Name"
                                className="border login-input mt-[10px]"
                            />
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="CreativaDesignHub.world@gmail.com"
                                className="border login-input mt-[10px]"
                            />
                            <div className="w-full relative mt-[10px]">
                                <input
                                    type={`${toggleIcon ? "text" : "password"}`}
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern:
                                            /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                                    })}
                                    className="border m-0 login-input"
                                    placeholder="Enter Password"
                                />

                                <span
                                    onClick={() => setToggleIcon(!toggleIcon)}
                                    className="absolute bottom-4 right-4 toggle-icon text-white"
                                >
                                    {toggleIcon ? (
                                        <FontAwesomeIcon
                                            className="block"
                                            icon={faEyeSlash}
                                        ></FontAwesomeIcon>
                                    ) : (
                                        <FontAwesomeIcon
                                            className="block"
                                            icon={faEye}
                                        ></FontAwesomeIcon>
                                    )}
                                </span>
                            </div>
                            <>
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Password less than 20 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password must be PATTERN rules</p>
                                )}
                            </>
                            <div className="w-full relative mt-[10px]">
                                <input
                                    type={`${toggleIconConfirm ? "text" : "password"}`}
                                    {...register("confirmPassword", { required: true })}
                                    className="border m-0 login-input"
                                    placeholder="Enter Confirm Password"
                                />

                                <span
                                    onClick={() => setToggleIconConfirm(!toggleIconConfirm)}
                                    className="absolute bottom-4 right-4 toggle-icon text-white"
                                >
                                    {toggleIconConfirm ? (
                                        <FontAwesomeIcon
                                            className="block"
                                            icon={faEyeSlash}
                                        ></FontAwesomeIcon>
                                    ) : (
                                        <FontAwesomeIcon
                                            className="block"
                                            icon={faEye}
                                        ></FontAwesomeIcon>
                                    )}
                                </span>
                            </div>
                            {<p className="text-red-700 ">{errorMassage}</p>}
                            <div className="md:flex w-full justify-between items-center">
                                <input
                                    type="url"
                                    {...register("photoUrl", { required: true })}
                                    placeholder="Enter Your Photo URL"
                                    className="border mt-[10px] login-input"
                                />
                                <input
                                    type="number"
                                    {...register("phoneNumber", { required: true })}
                                    placeholder="Enter Your Phone Number"
                                    className="border mt-[10px] md:ms-2 login-input"
                                />
                            </div>
                            <input
                                type="text"
                                {...register("address", { required: true })}
                                placeholder="Enter Your Address"
                                className="border login-input login-input mt-[10px]"
                            />
                            <select onChange={handleGender} className="border login-select mt-[10px] text-white">
                                <option value="female" className="text-black">Female</option>
                                <option value="male" className="text-black">Male</option>
                                <option value="other" className="text-black">other</option>
                            </select>
                            <p className="mb-3 text-end w-full forget-password">
                                Forget Password
                            </p>
                            <p className="mb-2 text-white">
                                Already have an Account?{" "}
                                <Link style={{ color: "#fde047", fontWeight: 700 }} to="/login">
                                    Please Login
                                </Link>
                            </p>
                            <input
                                type="submit"
                                value="Register"
                                className="bg-[#fde047] border-0 text-black py-[10px] px-[30px] font-semibold cursor-pointer"
                            />
                            <div className="pt-5 flex items-center justify-between w-full">
                                <p className="text-white text-xl">Or Sign in with:</p>
                                <div className="flex items-center justify-between">
                                    <img
                                        onClick={handleGoogleLogin}
                                        style={{
                                            width: "50px",
                                            marginRight: "10px",
                                            border: "2px solid #fde047",
                                            cursor: "pointer",
                                            padding: "10px",
                                        }}
                                        src={googleImg}
                                        alt=""
                                    />
                                    {/* <img
                  onClick={handleGithubLogin}
                  style={{
                    width: "50px",
                    marginRight: "10px",
                    border: "2px solid #fde047",
                    cursor: "pointer",
                    padding: "10px",
                  }}
                  src={gitHubImg}
                  alt=""
                /> */}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
