import type { Person, Social } from "@/types/contents.types";

const person: Person = {
    firstname: "Tarunnyamoye",
    lastname: "Kundu",
    name: "Tarunnyamoye Kundu",
    role: "Lecturer",
    avatar: {
        src: "/images/avatar.jpeg",
        alt: "Tarunnyamoye Kundu",
        width: 200,
        height: 200,
    },
    email: "tarunnyamoye@gmail.com",
    phone: "+88000000000",
    location: "Dhaka, Bangladesh",
};

//Hero section
export const hero = {
    title: `Hey, I'm ${person.name}.`,
    description: `I'm a Web Designer, Music Artist & Photographer.
    I spend most of time thinking about Tea.`,
    avatar: person.avatar,
};

//Social links

export const social: Social = [
    {
        name: "Google Scholar",
        icon: "scholar",
        link: "https://scholar.google.com/citations?user=TarunnyamoyeKundu",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/tarunnyamoye/",
    },
    {
        name: "X",
        icon: "x",
        link: "https://x.com/tarunnyamoye",
    },
    {
        name: "Threads",
        icon: "threads",
        link: "https://www.threads.net/@tarunnyamoye",
    },
];
