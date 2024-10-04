import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <button className="flex items-center gap-1" onClick={(() => navigate(-1))}> <><IoMdArrowRoundBack />
                Back</></button>
            <p className="text-red-500">404 error The page is not found</p>
        </div>
    );
};

export default ErrorPage;