import AnimatedTitle from "../../animations/AnimatedTitle";
import ProjectCard from "./ProjectCard";
import {projects, ProjectProps} from "./projectDetails";
import React from "react";

const ProjectGrid = () => {
    return (
        <>
            <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16  lg:mb-20 ">
                {/* <h4 className={`text-[16px] md:text-[20px] lg:text-[34px] ${"text-[#e4ded7]"}`}>REALISATIONS</h4> */}
                <AnimatedTitle
                    text={"REALISATIONS"}
                    className={"mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"}
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />
            </div>

            <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
                {projects.map((project: ProjectProps) => (
                    <ProjectCard
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        technologies={project.technologies}
                        techNames={project.techNames}
                        techLinks={project.techLinks}
                        github={project.github}
                        demo={project.demo}
                        image={project.image}
                        available={project.available}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectGrid;
