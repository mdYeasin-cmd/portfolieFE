import assets from "@/assets";
import styles from "./ExperienceSection.module.css";

const ExperienceSection = () => {
    return (
        <div>
            <h1 className={`${styles.experience}`}>Experience</h1>

            <div className="my-8">
                <div className={`${styles.experience_card}`}>
                    <div>
                        <div>
                            <img style={{ borderRadius: "50%" }} src={assets.images.catHomeLogo} alt="cat home logo" />
                        </div>
                    </div>
                    <div style={{ paddingLeft: "30px" }}>
                        <h4 style={{ fontSize: "20px" }}>Junior Web Developer</h4>
                        <p>Cat Home | Full-time</p>
                        <p>Mar 2023 - Present | 1 yr 5 mos</p>
                        <p>Singapore | Remote</p>

                        <br />
                        <h4>Duties/Responsibilities:</h4>
                        <ul className={`${styles.ul_elem}`}>
                            <li>Design, recommend, and pitch improvements to new and existing features.</li>
                            <li>Assist in troubleshooting issues on web-based systems.</li>
                            <li>Update and edit website content, posts, and pages.</li>
                            <li>Provide technical support related to web-based systems to internal teams.</li>
                            <li>Test and give feedback on new and existing technologies.</li>
                            <li>Create prototypes and experiment with new technologies and features as assigned.</li>
                            <li>And other ad-hoc tasks to support the Senior Developer that arise from time to time.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;