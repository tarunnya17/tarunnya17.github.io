import type { Achievements, Education, Person, Projects, Publication, Social, Work } from "@/types/contents.types";

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
    email: "tarunnyamoye1917@gmail.com",
    phone: "+88000000000",
    location: "Dhaka, Bangladesh",
};

//Hero section
export const hero = {
    title: `Hey, I'm ${person.name}.`,
    description: `I'm a ${person.role} specializing in Computer Science and Engineering. Welcome to my portfolio!`,
    avatar: person.avatar,
    cvLink: "/pdfs/Tarunnyamoye_CV.pdf",
    ///pdfs/Tarunnyamoye_CV.pdf
};

//Social links

export const social: Social = [
    
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/tarunnyamoye/",
    },
    {
        name: "Facebook",
        icon: "facebook",
        link: "https://www.facebook.com/tarunnyamoye.tarunnya",
    },
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/tarunnya17",
    },
    // {
    //     name: "ResearchGate",
    //     icon: "researchgate",
    //     link: "https://www.researchgate.net/profile/Tarunnyamoye-Kundu",
    // },
    {
        name: "Google Scholar",
        icon: "scholar",
        link: "https://scholar.google.com/citations?user=2t9uwFUAAAAJ",
    },
];

//Work experience
export const workExperience: Array<Work> = [
    {
        position: "Lecturer",
        company: "Sonargaon University",
        companyLink: "https://su.edu.bd/",
        startDate: "May 2025",
        endDate: "Present",
        location: "Dhaka, Bangladesh",
        bullets: [
            "Teaching undergraduate courses in Computer Science and Engineering.",
            "Supervising student projects and theses.",
            "Conducting research in the field of computer science.",
        ],
    },
    {
        position: "Creative Executive",
        company: "Reflective Teens - RT",
        companyLink: "https://www.reflectiveteens.com/",
        startDate: "Jul 2022",
        endDate: "Feb 2025",
        location: "Remote",
        description: "Creative ideation, graphic content designing, and promoting impactful social duties.",
        bullets: [],
    },
    {
        position: "Intern",
        company: "Amreen Info Tech Ltd",
        companyLink: "https://amreenit.com/",
        endDate: "Dec 2023",
        startDate: "Jan 2024",
        location: "Khulna, Bangladesh",
        description: "At AITL for 3 weeks, developing a taxation website for Khulna City Corporation.",
        bullets: [],
    }
];

//Education
export const education: Education[] = [
    {
        degree: "BSc in Computer Science & Engineering",
        institution: "Khulna University",
        institutionLink: "https://ku.ac.bd/",
        startDate: "2019",
        endDate: "2025",
        location: "Khulna, Bangladesh",
        grade: "3.91/4.00",
        achievements: [],
    },
    {
        degree: "Higher Secondary Certificate",
        institution: "Bheramara College",
        institutionLink: "https://bheramaracollege.edu.bd/",
        startDate: "2016",
        endDate: "2018",
        location: "Bheramara, Kushtia",
        grade: "5.00/5.00",
        achievements: [],
    },
    {
        degree: "Secondary School Certificate",
        institution: "Bheramara Secondary Girls School",
        institutionLink: "https://bheramaragirlsschool.edu.bd/",
        startDate: "2011",
        endDate: "2016",
        location: "Bheramara, Kushtia",
        grade: "5.00/5.00",
        achievements: [],
    },
];

//Publications
export const publications: Array<Publication> = [
    {
        title: "Optimizing Smart City Functions through Federated Learning: Implementation and Framework Development",
        nb: "Thesis Submitted",
        authors: ["Tarunnyamoye Kundu", "Rahat Morshed Nabil"],
        journalOrConference: "Artificial Intelligence Review",
        date: "2024",
        link: "",
        summary: "This survey paper explores the application of AI techniques in wildlife conservation, discussing current methodologies, challenges, and future research directions. It highlights the potential of AI to enhance conservation efforts through improved data analysis and decision-making. ",
    },
    {
        title: "Enhanced YOLOv9-Based Endangered Tiger Detection Framework for Wildlife Surveillance",
        authors: ["Rahat Morshed Nabil", "Tarunnyamoye Kundu"],
        journalOrConference: "International Conference on Signal Processing, Information, Communication and Systems 2024",
        date: "Nov 2024",
        link: "https://ieeexplore.ieee.org/document/10941020", // Example link
        summary: "This paper presents an enhanced YOLOv9-based framework for detecting endangered tigers in wildlife surveillance, improving accuracy and efficiency in conservation efforts.",
    },
    {
        title: "Enhancing Healthcare with Desktop Companion Bot: A Novel Computer Vision Approach",
        authors: ["Tarunnyamoye Kundu", "Rahat Morshed Nabil"],
        journalOrConference: "International Conference on Advances in Computing, Communication, Electrical, and Smart Systems",
        date: "Mar 2024",
        link: "https://ieeexplore.ieee.org/document/10499474",
        summary: "This paper proposes a desktop companion bot leveraging computer vision to enhance healthcare services.",
    },
    {
        title: "Real-Time Three-Wheeler Traffic Detection on Expressways Using Yolo Model",
        authors: ["Rahat Morshed Nabil", "Uday Karmoker", "Tarunnyamoye Kundu"],
        journalOrConference: "7th International Conference on Civil Engineering for Sustainable Development (ICCESD 2024)",
        date: "Feb 2024",
        link: "https://iccesd.kuet.ac.bd/2024/Papers/966.pdf",
        summary: "This paper presents a real-time traffic detection system for three-wheelers on expressways using the YOLO model.",
    },
    {
        title: "Advancing Sustainability: Introducing Reverse Vending Machines To University Campuses",
        authors: ["Uday Karmoker", "Tarunnyamoye Kundu"],
        journalOrConference: "7th International Conference on Civil Engineering for Sustainable Development (ICCESD 2024)",
        date: "Feb 2024",
        link: "https://www.researchgate.net/publication/378263737_ADVANCING_SUSTAINABILITY_INTRODUCING_REVERSE_VENDING_MACHINES_TO_UNIVERSITY_CAMPUSES",
        summary: "This paper discusses the implementation of reverse vending machines on university campuses to promote recycling and sustainability.",
    }
];

//Achievements
export const achievements : Array<Achievements> = [
    {
        title: "## Speaker - TEDx Khulna University",
        date: "2023",
        content: 
            `I had the honor of being a speaker at TEDx Khulna University, where I shared my insights on [insert topic here]. It was an incredible experience to connect with like-minded individuals and contribute to the exchange of ideas.`,
        images: [
            {
                src: "/images/achievements/ted3.png",
                alt: "TEDx Talk 1",
            },
            {
                src: "/images/achievements/ted1.png",
                alt: "TEDx Talk 2",
            },
            {
                src: "/images/achievements/ted2.png",
                alt: "TEDx Talk 3",
            }
        ]
    },
    {
        title: "## Finalist - HULT Prize at Khulna University",
        date: "2024",
        content:
            `As a finalist in the HULT Prize competition at Khulna University, I had the opportunity to present our innovative social enterprise idea aimed at addressing [insert social issue here]. This experience honed my entrepreneurial skills and deepened my commitment to creating positive change.`,
        images: [
            {
                src: "/images/achievements/hult1.png",
                alt: "HULT Prize Event 1",
            },
        ]
    }
];

//Projects
export const projects: Array<Projects> = [
    {
        title: "Enhancing Healthcare with Desktop Companion Bot",
        description: `Baymin-1.0 is an interactive desktop companion bot designed to promote healthy screen habits and boost productivity. `,
        technologies: [
            { name: "Python", icon: "python", url: "https://www.python.org/" },
            { name: "OpenCV", icon: "opencv", url: "https://opencv.org/" },
            { name: "Tkinter", icon: "tkinter", url: "https://docs.python.org/3/library/tkinter.html" },
        ],
        links: [
            { label: "YouTube", url: "https://www.youtube.com/watch?v=zCMlpaTLjPc" },
            { label: "GitHub", url: "https://github.com/imrmnabil/Baymin_MicroProject" },
        ],
        poster: "/images/projects/sample.png",
    },
    {
        title: "CSEKU_SDP_2023_Math_Plotter",
        description: `Math_Plotter is a lightweight OpenGL-based equation plotter that renders mathematical functions in real time.`,
        technologies: [
            { name: "OpenGL", icon: "opengl", url: "https://www.opengl.org/" },
            { name: "C++", icon: "cpp", url: "https://isocpp.org/" },],
        links: [
            { label: "GitHub", url: "https://github.com/SDP1727/CSEKU_SDP_2023_Math_Plotter" },
            { label: "YouTube", url: "https://www.youtube.com/watch?v=8UaCjWoSqvo" },
        ],
        poster: "/images/projects/sample.png",
    },
    {
        title: "DBMS Project on Bishwo Shahitto Kendro Mobile Library",
        description: `This project is a basic command-line application developed for an academic project. It serves as a Library Management System tailored for the Bishwo Shahitto Kendro Mobile Library.`,
        technologies: [
            { name: "Java", icon: "java", url: "https://www.java.com/" },
            { name: "MySQL", icon: "mysql", url: "https://www.mysql.com/" },
        ],
        links: [
            { label: "GitHub", url: "https://github.com/imrmnabil/DBMS_Project" },
        ],
        poster: "/images/projects/sample.png",
    },
    {
        title: "Eventor - Web Project",
        description: `Eventor is a web project developed as part of the Web Programming Project course. It integrates modern web technologies and the SSLCOMMERZ Payment Gateway to provide a seamless event management experience.`,
        technologies: [
            { name: "JavaScript", icon: "javascript", url: "https://www.javascript.com/" },
            { name: "HTML", icon: "html", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
            { name: "CSS", icon: "css", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { name: "EJS", icon: "ejs", url: "https://ejs.co/" },
            { name: "TailwindCSS", icon: "tailwindcss", url: "https://tailwindcss.com/" },
        ],
        links: [
            { label: "GitHub", url: "https://github.com/tarunnya17/Eventor-Web-Project" },
        ],
        poster: "/images/projects/sample.png",
    },
]

//Contact
export const contact = {
    email: person.email,
    phone: person.phone,
    timezone: "Asia/Dhaka",
    social: social,
};