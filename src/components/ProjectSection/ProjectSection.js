import assets from "@/assets";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectSection.module.css";

const ProjectSection = () => {

    const projects = [
        {
            name: 'Iqra Laptop Zone',
            description: `
                A Laptop resale website that can use three types of users – Admin, Seller, and Buyer.
                Implement JWT to protect API from unauthorized users. Seller can advertise
                their product on the home page. Users can buy a product using an authentic card.
            `,
            image: assets.projects.project1,
            liveSite: 'https://iqra-laptop-zone.web.app/',
            skills: ['React', 'Next.js', 'Node', 'Express', 'MongoDB', 'JWT', 'API', 'Auth', 'CRUD', 'Firebase', 'Router', 'Axios', 'Mongoose']
        },
        {
            name: 'Dream Kitchen',
            description: `
                A MERN Stack web application for a cloud kitchen owner which has authentication
                system for a user with private route. An authentic user can add review and new
                products. Without authentication a user cannot access protected APIs.
            `,
            image: assets.projects.project2,
            liveSite: 'https://dream-kitchen-a0911.web.app/',
            skills: ['React', 'Node', 'Express', 'MongoDB', 'JWT', 'API', 'Auth', 'CRUD']
        },
        {
            name: 'Pie Academy',
            description: `
                Pie Academy is a CSE related courses selling website where a user can see course
                details and download course curriculum in pdf format. Without authentication user
                cannot get access checkout page.
            `,
            image: assets.projects.project3,
            liveSite: 'https://pie-academy-auth.web.app/',
            skills: ['React', 'Node', 'Express', 'MongoDB', 'JWT', 'API', 'Auth', 'CRUD']
        },
    ]

    return (
        <div>
            <h1 className={`${styles.project}`}>Projects</h1>

            <div className="container mx-auto my-8">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                name={project.name}
                                liveSite={project.liveSite}
                                image={project.image}
                                description={project.description}
                                skills={project.skills}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;