import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <Link to={'/login'} className="text-center w-full text-[16px] text-secondary_clr font-medium block pb-6 pt-8 border-t-2 border-gray-100">Back to Login</Link>
  )
}

