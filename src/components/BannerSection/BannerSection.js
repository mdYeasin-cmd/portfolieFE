import Link from "next/link";
import styles from "./BannerSection.module.css";
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import assets from "@/assets";
import { IoMdCloudDownload } from "react-icons/io";

const BannerSection = () => {
    return (
        <div className="py-10">
            <div className="md:flex justify-center items-center">
                <img
                    src={assets.images.myImage}
                    alt="Md Yeasin - Fullstack Developer"
                    className={`${styles.my_image}`}
                />
                <div className={`${styles.my_info}`}>
                    <h1 className={`${styles.my_name}`}>Md Yeasin</h1>
                    <h2 className={`${styles.my_description}`}>Frontend Web Developer</h2>
                </div>
            </div>
            <p className={`${styles.about_me} text-center`}>
                I&apos;m Yeasin, a MERN Stack Web Developer.
                Try to solve real life problems using programming which impacts human life.
                I am coming here because of my passion and I want to do something remarkable with it.
                Have advanced knowledge about Frontend Development focused on React.
                Also have a comportable idea about the backend with node.
                Explore new technology daily to build a strong knowledge of full stack development.
                Now I&apos;m acquiring deep knowledge about MERN Stack.
            </p>
            <div className="flex justify-center my-5">
                <Link href="https://discord.com/users/874667456633905192" target="_blank"><FaDiscord className="mx-3" /></Link>
                <Link href="https://github.com/mdYeasin-cmd" target="_blank"><FaGithub className="mx-3" /></Link>
                <Link href="https://www.linkedin.com/in/md-yeasin-b755141b9/" target="_blank"><FaLinkedin className="mx-3" /></Link>

            </div>
            {/* <div className='text-center'>
                <a href="https://drive.google.com/file/d/1VeJzwtgRCPE8-uV7yrQCeDNdOyY2loIE/view?usp=share_link">
                    <button className="btn bg-[#6DC17B] text-black">Resume</button>
                </a>
            </div> */}
            <div className="flex justify-center">
                <button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    {/* <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                    </svg> */}

                    <IoMdCloudDownload className="w-5 h-5 mx-1" />

                    <span className="mx-1">Download</span>
                </button>
            </div>
        </div>
    );
};

export default BannerSection;