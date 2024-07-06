import Link from "next/link";
import styles from "./ProjectCard.module.css";
import { IoMdCloudDownload } from "react-icons/io";

const ProjectCard = ({ name, description, image, liveSite, skills }) => {
    return (
        <div className={`${styles.project_card} p-5 mt-10`}>
            <div className='h-[200px] overflow-hidden'>
                <img src={image} className="w-full" alt="" />
            </div>
            <h4>{name}</h4>
            <p className={`${styles.project_description}`}>{description}</p>

            <div className={`${styles.card_skills}`}>
                {/* <SkillName name="React" />
                <SkillName name="Next.js" /> */}
                {skills?.map((skill, index) => (
                    <SkillName key={`skill-${index}`} name={skill} />
                ))}
            </div>

            <div className={`${styles.card_action_btn}`}>
                <Link href="/">
                    <button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#338642] rounded-lg hover:bg-[#44a354] focus:outline-none focus:ring focus:ring-[#9cd9a6] focus:ring-opacity-80">
                        <IoMdCloudDownload className="w-5 h-5 mx-1" />
                        <span className="mx-1">Live Site</span>
                    </button>
                </Link>
                <Link href={liveSite} target="_blank">
                    <button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#338642] rounded-lg hover:bg-[#44a354] focus:outline-none focus:ring focus:ring-[#9cd9a6] focus:ring-opacity-80">
                        <IoMdCloudDownload className="w-5 h-5 mx-1" />
                        <span className="mx-1">See Details</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

const SkillName = ({ name }) => {
    return (
        <span style={{ border: "1px solid #6dc17b", padding: "8px 10px", borderRadius: "3px", margin: "4px" }}>{name}</span>
    );
}

export default ProjectCard;