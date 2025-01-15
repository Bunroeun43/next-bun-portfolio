import {
    SiBootstrap,
    SiGithub,
    SiJquery,
    SiNextdotjs,
    SiMysql,
    SiPhp,
    SiReact,
    SiSymfony,
    SiTailwindcss,
    SiTypescript,
    SiWordpress,
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "CTI Melun",
        description:
            "Plateforme du système de badgage pour les entrées sorties et les demandes de congés du personnel.",
        technologies: [SiWordpress, SiPhp, SiMysql, SiBootstrap],
        techNames: ["WordPress", "PHP", "MySQL", "Bootstrap"],
        techLinks: ["https://www.wordpress.org/", "https://www.php.net/", "https://www.mysql.com/", "https://getbootstrap.com/"],
        github: "https://github.com/Bunroeun43/wp-cti-melun",
        demo: "",
        image: "/cti-melun.png",
        available: true,
    },
    {
        id: 1,
        name: "Bistrot Babylon",
        description:
            "Site vitre pour le bistrot Babylon, avec possibilité de commander en ligne.",
        technologies: [SiSymfony, SiPhp, SiMysql, SiBootstrap],
        techNames: ["Symfony", "PHP", "MySQL", "Bootstrap"],
        techLinks: ["https://get.webgl.org/", "https://www.typescriptlang.org/", "https://reactjs.org/", "https://getbootstrap.com/"],
        github: "https://github.com/Bunroeun43/sf-bistrot-babylon",
        demo: "",
        image: "/babylon.webp",
        available: true,
    },
    {
        id: 2,
        name: "Skill Performance PC",
        description:
            "Site e-commerce pour PC sur-mesure",
        technologies: [SiSymfony, SiPhp, SiMysql, SiJquery],
        techNames: ["Symfony", "PHP", "MySQL", "jQuery"],
        techLinks: ["https://get.webgl.org/", "https://www.typescriptlang.org/", "https://reactjs.org/", "https://jquery.com/"],
        github: "https://github.com/Bunroeun43/sf-spp",
        demo: "",
        image: "/spp.webp",
        available: true,
    },
];
