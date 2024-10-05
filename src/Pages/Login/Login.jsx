/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import googleImg from "../../assets/socialLoiginImg/google.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
    const { user, login, signInGoogle, setLoading, auth } = useContext(AuthContext);
    const [toggleIcon, setToggleIcon] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        login(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Log In Successful",
                    showConfirmButton: false,
                    buttonsStyling: "#32c770",
                    timer: 1500,
                });
                navigate(from, { replace: true });
                reset();
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    buttonsStyling: {
                        color: "#32c770",
                        backgroundColor: "#267E23",
                    },
                    title: `${err.message}`,
                });
            });
    };

    const handleGoogleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        setLoading(true)
        signInGoogle(googleProvider)
            .then((result) => {
                const loggedUser = result.user;
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
                            setLoading(false)

                        }
                    });
            })
            .catch((err) => { console.log(err); });
    };
    if (user) {
        return <Navigate to={"/"}></Navigate>
    }
    return (
        <div className=" bg-[#020413c9] h-[100%]">
            <div className="container mx-auto ">
                <div className="h-screen">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col justify-center items-center h-full"
                    >
                        <div className="flex flex-col justify-start items-start fullForm lg:w-2/6 md:w-3/6  shadow-2xl bg-[#020413] ">
                            <h2 className="text-2xl mb-2" style={{ color: "#FDE047" }}>
                                Please Login
                            </h2>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="bookCollege@gmail.com"
                                className="border login-input"
                                name="email"
                            />
                            <div className="w-full relative  mt-[20px]">
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
                                    placeholder="******"
                                    name="password"
                                />

                                <span
                                    onClick={() => setToggleIcon(!toggleIcon)}
                                    className="absolute right-4 top-1/2 -translate-y-[50%] toggle-icon"
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
                            <p className="mb-3 text-end w-full forget-password">
                                Forget Password
                            </p>
                            {/* <span className="text-green-500 m-0">{successMassage}</span>
            <span className="text-red-500 m-0">{errorMassage}</span> */}
                            <p className="mb-2 text-white">
                                Don't Have an Account?{" "}
                                <Link
                                    style={{ color: "#fde047", fontWeight: 700 }}
                                    to="/register"
                                >
                                    Please Register
                                </Link>
                            </p>
                            <input
                                type="submit"
                                value="Login"
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
                    border: "2px solid #32c770",
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

export default Login;
