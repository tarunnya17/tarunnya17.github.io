import { SectionsDict } from "@/types/sections.types";

export const sections: SectionsDict = {
    intro: {
        id: "intro_section",
        label: "Intro",
        icon: "Intro",
        href: "/#intro",
        active: true,
    },
    work: {
        id: "work_section",
        label: "Work",
        icon: "briefcase",
        href: "/#work",
    },
    education: {
        id: "education_section",
        label: "Education",
        icon: "user",
        href: "/#education",
    },
    
    blog: {
        id: "blog_section",
        label: "Blog",
        icon: "blog",
        href: "/#blog",
    },
};