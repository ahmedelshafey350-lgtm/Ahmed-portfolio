
import { Link } from "react-router-dom";
import './Navbar.css'
export default function ButtonAppBar() {




    return (
        <>
            <div className="nav w-80 fixed top-0 right-0 left-120 mx-8 my-8 border-1   min-w-lg z-100000 " style={{ borderColor: "#ffffff2e", backgroundColor: "#191816" }}>
                <div className="p-5 " >
                    <ul className="flex flex-row  space-x-4 font-medium uppercase text-base items-center" style={{ color: "#f6d4a4" }}>
                        <li className="grow-1">
                            <Link to={"/"} >AH.</Link>
                        </li>
                        <li className="grow-1">
                            <Link to={"/Services"}>Services</Link>
                        </li>
                        <li className="grow-1">
                            <Link to={"/Work"}>Work</Link>
                        </li>
                        <li className="grow-1">
                            <Link to={"/About"}>About</Link>
                        </li>
                        <li className="grow-1 pt-1 pb-1 " style={{ backgroundColor: "#EDD6B6", color: "oklch(13% 0.028 261.692)" }}>
                            <Link to={"/Contact"} className="ml-3 ">Lets Talk </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
