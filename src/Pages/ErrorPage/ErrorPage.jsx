import { Link } from "react-router-dom"
import errorICon from "../../assets/img/404icon.png"

const ErrorPage = () => {
  return (
    <div className="bg-white w-[100%] h-[100vh] flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center text-2xl text-black">
        <img src={errorICon}/>
        <h1>Your page is not available, go back!</h1>
        <Link className="bg-red-700 text-white btn mt-[20px]" to="/">Go back</Link>
        </div>
    </div>
  )
}

export default ErrorPage
