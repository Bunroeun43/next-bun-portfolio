import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import photo from "../../public/portrait.webp";
import Image from "next/image";
import AnimatedBody from "../animations/AnimatedBody";


const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <HeroBackground />
            <div className="mx-auto px-4 mt-10 flex flex-col items-center justify-center sm:mt-0">
                <div className={`relative w-full mx-auto flex items-center justify-center gap-x-4 ${inter.className} pointer-events-none`}>
                    <div className="w-1/2">
                        <Image src={photo} alt="photo" className="h-full rounded-xl" />
                    </div>
                    <div className="w-1/2">
                        <AnimatedTitle
                            text={"Bonjour,"}
                            className={"mb-1 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"}
                            wordSpace={"mr-[10px]"}
                            charSpace={"mr-[0.001em]"}
                        />
                        <AnimatedTitle
                            text={" je m\'appelle Bunroeun CHHUM."}
                            className="text-[40px] mb-10"
                            wordSpace={"mr-[10px]"}
                            charSpace={"mr-[0.001em] mb-[0.2em]"}
                        />
                        <AnimatedBody
                            text={"Développpeur web / web mobile fullstack junior"}
                            className={"mb-12"}
                        />
                        <AnimatedBody
                            text={"Disponibilité immédiate"}
                            className={"italic animate-[blink_1s_ease-in-out_infinite] text-2xl font-bold text-blue-400 px-12"}
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
