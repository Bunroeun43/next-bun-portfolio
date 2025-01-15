import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
    SiHtml5, SiCss3,
    SiFigma,
    SiPhp, SiJavascript,
    SiWordpress, SiDrupal,
    SiGit, SiGithub,
    SiMysql, SiMongodb, SiMariadb,
    SiNextdotjs, SiReact, SiAlpinedotjs,
    SiTailwindcss, SiBootstrap, SiFontawesome, SiGooglefonts,
    SiNodedotjs, SiSymfony, SiLaravel, SiMamp, SiXampp, SiVirtualbox,
    SiUbuntu, SiWindows, SiMacos
} from "react-icons/si";
import { FaLinux } from "react-icons/fa6";
import { DiResponsive } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import uml from "../../public/uml.svg";
import Image from 'next/image';
import AnimatedTools from "../animations/AnimatedTools.tsx";

const Tools = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"COMPETENCES"}
                    className={"mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"}
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">

                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="BASIC" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.2} stepSize={0.1} iconSize={50}>
                                <SiHtml5 size={50}/>
                                <SiCss3 size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>

                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Conception" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.2} stepSize={0.1} iconSize={50}>
                                <SiFigma size={50}/>
                                <Image src={uml} className="text-white w-full" />
                            </AnimatedTools>
                        </div>
                    </div>

                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Langages" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.2} stepSize={0.1} iconSize={50}>
                                <SiJavascript size={50}/>
                                <SiPhp size={50}/>
                                <TbSql size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>

                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Cms" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.2} stepSize={0.1} iconSize={50}>
                                <SiWordpress size={50}/>
                                <SiDrupal size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>

                    {/* <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Frontend" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.2} stepSize={0.1} iconSize={50}>
                                <SiReact size={50}/>
                                <SiNextdotjs size={50}/>
                                <SiBootstrap size={50}/>
                                <SiTailwindcss size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.3} text="Backend" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.3} stepSize={0.1} iconSize={50}>
                                <SiMysql size={50}/>
                                <SiMongodb size={50}/>
                                <SiMariadb size={50}/>
                                <SiNodedotjs size={50}/>
                            </AnimatedTools>
                        </div>
                    </div> */}
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Framework" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <SiSymfony size={50}/>
                                <SiLaravel size={50}/>
                                <SiNextdotjs size={50}/>
                                <SiBootstrap size={50}/> 
                                <SiTailwindcss size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Librairie" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <SiReact size={50}/>
                                <SiAlpinedotjs size={50}/>
                                <SiGooglefonts size={50}/>
                                <SiFontawesome size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Versionning" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <SiGithub size={50}/>
                                <SiGit size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Plateforme" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <SiMacos size={50}/>
                                <SiWindows size={50}/>
                                <FaLinux size={50}/>
                                <SiVirtualbox size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
