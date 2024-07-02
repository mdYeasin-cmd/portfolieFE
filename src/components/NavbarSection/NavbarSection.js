import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";

const NavbarSection = () => {
    return (
        <nav>
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <h1 className="font-bold">{"<Yeasin/>"}</h1>
                    </Link>
                </div>

                <div className="w-full px-6 py-4 md:mt-0 md:p-0 md:top-0 md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <Link href={"/"} className="flex flex-row justify-center items-center m-3">
                            <IoHomeOutline className="mr-2" /><span>Home</span>
                        </Link>

                        <Link href={"/"} className="flex flex-row justify-center items-center m-3">
                            <GoProjectRoadmap className="mr-2" /><span>Project</span>
                        </Link>

                        <Link href={"/"} className="flex flex-row justify-center items-center m-3">
                            <MdOutlineLibraryBooks className="mr-2" /><span>Blog</span>
                        </Link>

                        <Link href={"/"} className="flex flex-row justify-center items-center m-3">
                            <RiContactsBook2Line className="mr-2" /><span>Contact</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarSection;