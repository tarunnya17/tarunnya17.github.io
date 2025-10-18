import { SectionsDict } from "@/types/sections.types";
import { achievements } from "./content";

export const sections: SectionsDict = {
    intro: {
        id: "intro_section",
        label: "Intro",
        icon: "Intro",
        href: "/#intro_section",
        active: true,
    },
    work: {
        id: "work_section",
        label: "Work",
        icon: "briefcase",
        href: "/#work_section",
    },
    education: {
        id: "education_section",
        label: "Education",
        icon: "user",
        href: "/#education_section",
    },

    publications: {
        id: "publications_section",
        label: "Publications",
        icon: "book",
        href: "/#publications_section",
    },
    projects: {
        id: "projects_section",
        label: "Projects",
        icon: "code",
        href: "/#projects_section",
    },
    achievements: {
        id: "achievements_section",
        label: "Achievements",
        icon: "trophy",
        href: "/#achievements_section",
    },
    // blog: {
    //     id: "blog_section",
    //     label: "Blog",
    //     icon: "blog",
    //     href: "/#blog",
    // },
    contact: {
        id: "contact_section",
        label: "Contact",
        icon: "mail",
        href: "/#contact_section",
    },
    
};