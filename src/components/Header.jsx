import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
    <div className="flex items-center justify-evenly bg-white shadow-md px-4 py-2">
        <div className="font-semibold">
            Maktab Sharif
        </div>
        <div className="flex items-center gap-10">
            <NavLink to={"/"} className={({isActive})=>isActive?'border border-red-600 text-red-600 rounded-md px-2': "text-red-600 hover:bg-red-200 rounded-md px-2"}>Home</NavLink>
            <NavLink to={"/about-us"} className={({isActive})=>isActive?'border border-gray-600 text-gray-600 rounded-md px-2': "text-gray-600 hover:bg-gray-200 rounded-md px-2"}>About Us</NavLink>
            <NavLink to={"/contact-us"} className={({isActive})=>isActive?'border border-gray-600 text-gray-600 rounded-md px-2': "text-gray-600 hover:bg-gray-200 rounded-md px-2"}>Contact Us</NavLink>
            <NavLink to={"/boot-camps"} className={({isActive})=>isActive?'border border-gray-600 text-gray-600 rounded-md px-2': "text-gray-600 hover:bg-gray-200 rounded-md px-2"}>Boot Camps</NavLink>
            <NavLink to={"/contact"} className={({isActive})=>isActive?'border border-red-600 text-red-600 rounded-md px-2': "text-red-600 hover:bg-red-200 rounded-md px-2"}>Contact</NavLink>
        </div>
        <div>
          <img className="w-[40%]" src="https://lms.maktabsharif.ir/pluginfile.php/1/theme_moove/logo/-1/logo-maktabsharif.png" alt="" />
        </div>
    </div>
    </>
  )
}
