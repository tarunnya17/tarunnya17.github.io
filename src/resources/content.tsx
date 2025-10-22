import type {
  Achievements,
  Education,
  Person,
  Projects,
  Publication,
  Social,
  Work,
} from "@/types/contents.types";
import { link } from "fs";

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
  phone: "+8801751297196",
  whatsapp: {
    link: "https://wa.me/1751297196",
    number: "+8801751297196",
  },
  location: "Dhaka, Bangladesh",
};

//Hero section
export const hero = {
  title: `Hey, I'm ${person.name}.`,
  description: `​I'm a Lecturer in CSE and AI/ML researcher with experience in smart systems and computer vision. My vision is to continually grow my expertise by pursuing advanced opportunities in higher study and research.`,
  avatar: person.avatar,
  cvLink: "/pdfs/Tarunnyamoye_Europass_CV.pdf",
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
      
    ],
    description: "I teach core courses including AI, OOP (Java & C++), Numerical Methods, Computer Architecture, and Information System Analysis and Design, Technical Writing and Seminar. I guide collaborative lab sessions for related theories and handle academic responsibilities such as attending meetings, curriculum design, invigilation, evaluation, and research supervision.",
  },
  {
    position: "Creative Executive",
    company: "Reflective Teens - RT",
    companyLink: "https://www.reflectiveteens.com/",
    startDate: "Jul 2022",
    endDate: "Feb 2025",
    location: "Remote",
    description:
      "Creative ideation, graphic content designing, and promoting impactful social duties targeting development of teenagers.",
    bullets: [],
  },
  {
    position: "Intern",
    company: "Amreen Info Tech Ltd",
    companyLink: "https://amreenit.com/",
    endDate: "Jan 2024",
    startDate: "Dec 2023",
    location: "Khulna, Bangladesh",
    description:
      "Completed a two-week internship at Amreen Info Tech Limited, gaining hands-on experience in developing a taxation website for Khulna City Corporation using Laravel, PHP, and MySQL.",
    bullets: [],
  },
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
    grade: "3.91 out of 4.00",
    achievements: [],
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Bheramara College",
    institutionLink: "https://bheramaracollege.jessoreboard.gov.bd/",
    startDate: "2016",
    endDate: "2018",
    location: "Bheramara, Kushtia",
    grade: "5.00 out of 5.00",
    achievements: [],
  },
  {
    degree: "Secondary School Certificate",
    institution: "Bheramara Secondary Girls School",
    institutionLink: "https://bheramarasecondarygirlsschool.jessoreboard.gov.bd/",
    startDate: "2011",
    endDate: "2016",
    location: "Bheramara, Kushtia",
    grade: "5.00 out of 5.00",
    achievements: [],
  },
];

//Publications
export const publications: Array<Publication> = [
  {
    title:
      "Optimizing Smart City Functions through Federated Learning: Implementation and Framework Development",
    nb: "Thesis Submitted",
    authors: ["Tarunnyamoye Kundu", "Rahat Morshed Nabil"],
    journalOrConference: "Undergraduate Thesis Submitted, Khulna University",
    date: "2025",
    link: "",
    summary:
      "Smart cities rely on data, but handling this huge amount of data efficiently while keepingit private is a big challenge. Traditional centralized methods struggle with privacy risks,high communication costs, and inefficient computing, making decentralized approachesmore effective. This study focuses on three important smart city areas—healthcare, traf-fic, and energy grid—where data is sensitive and varies across locations. To address thesechallenges, FedPAQ is used to reduce communication overhead, and AUCTION is ap-plied to improve client selection, making federated learning more effective. Differentaggregation methods, including FedAvg, FedOpt, and FedAdam, are tested on datasetsfrom these domains with different data distributions to understand their impact on learn-ing performance. The results show that FedAdam allows models to learn faster whilemaintaining adaptability and efficiency, which is essential for real-world applications.These findings highlight the importance of choosing the right aggregation method basedon how data is distributed in smart city environments. Based on that findings, a federatedlearning framework is designed to make smart city applications more secure, scalable,and efficient."  },
  {
    title:
      "Enhanced YOLOv9-Based Endangered Tiger Detection Framework for Wildlife Surveillance",
    authors: ["Rahat Morshed Nabil", "Tarunnyamoye Kundu"],
    journalOrConference:
      "International Conference on Signal Processing, Information, Communication and Systems 2024",
    date: "Nov 2024",
    link: "https://ieeexplore.ieee.org/document/10941020", // Example link
    summary:
      "Tiger conservation requires integrating diverse strategies, including preserving natural habitats, stringent anti-poaching efforts, and active community participation to ensure sustainable tiger population growth. The emergence of artificial intelligence presents an opportunity to enhance tiger surveillance through automated object detection. This paper introduces a robust, illumination-invariant framework that leverages Enlight-enGAN and the advanced YOLOv9c model for detecting Amur tigers. The fine-tuned YOLOv9c model, coupled with illumination enhancement techniques, achieves an impressive mAP50-95 score of 71.2% and an mAP50 score of 98.7% on the ATRW dataset. This approach significantly advances the state-of-the-art in tiger detection and highlights the potential of AI -driven solutions in wildlife conservation."  },
  {
    title:
      "Enhancing Healthcare with Desktop Companion Bot: A Novel Computer Vision Approach",
    authors: ["Tarunnyamoye Kundu", "Rahat Morshed Nabil"],
    journalOrConference:
      "International Conference on Advances in Computing, Communication, Electrical, and Smart Systems",
    date: "Mar 2024",
    link: "https://ieeexplore.ieee.org/document/10499474",
    summary:
      "In recent times, the escalating use of screens, particularly in work environments, has resulted in extended periods of sitting for coders, designers, and engineers. This prolonged screen time has led to the emergence of physical and mental health issues among individuals who are both busy and less health-conscious. Recognizing the prevalence and expanding market for Desktop Companion Bots (DCBs), it is evident that there is a pressing need for research and development in the realm of low-cost DCBs.While existing bots cater to entertainment purposes, there is a noticeable gap in the healthcare sector, addressing both physical and psychological well-being. This study aims to fill this gap by developing a DCB named Baymin 1.0, focusing on core features and utilizing fundamental hardware such as Raspberry Pi-4 and a webcam. Baymin 1.0 incorporates Computer Vision technologies, including OpenCV, TensorFlow Lite, and MediaPipe, to detect user activity and presence. Through continuous data monitoring, Baymin 1.0 provides reminders for prolonged sitting, alerts for adequate water consumption, prompts for correct body posture, and integrates amusement activities. This research significantly contributes to the field of robotics, emphasizing the utility of DCBs in healthcare. Unlike previous studies that primarily focused on desktop companion bots for entertainment and conversation, this paper delves deeper into the integration of health-related functionalities. Baymin 1.0 exhibits swift performance in various scenarios; however, it is essential to note that low-light environments and variations in age may impact the accuracy of the DCB. This study sets the stage for further advancements in the development of DCBs with enhanced health-related features.",
  },
  {
    title:
      "Real-Time Three-Wheeler Traffic Detection on Expressways Using Yolo Model",
    authors: ["Rahat Morshed Nabil", "Uday Karmoker", "Tarunnyamoye Kundu"],
    journalOrConference:
      "7th International Conference on Civil Engineering for Sustainable Development (ICCESD 2024)",
    date: "Feb 2024",
    link: "https://iccesd.kuet.ac.bd/2024/Papers/966.pdf",
    summary:
      "In recent years, the development of intelligent transportation systems (ITS) has become increasinglycritical to ensure safe and efficient traffic management on expressways. One of the key challenges inthis domain is the precise and real-time detection of various types of vehicles including truck, car,motor-bike, three-wheelers, rickshaws, pedestrians etc. Among these three-wheelers, those are the coreconcern of this study which are commonly used for transportation in many regions. This paper presentsa novel approach for real-time three-wheeler traffic vehicle detection on expressways using the YouOnly Look Once (YOLO) algorithm i.e., YOLOv8. Expressways are primarily designed forconventional vehicles such as cars, buses, minibuses, microbuses, and various sizes of trucks. However,three-wheelers like CNG vehicles, electrical vehicles, auto rickshaws etc. often lead to undesirableaccidents. To confront the complexities of identifying three-wheelers in real-world traffic scenarios, amultifaceted approach was adopted. The study began with the extensive collection of data from RajshahiCity Corporation area specifically from Zero Point, Rajshahi, followed by meticulous annotation of thisdataset. Such as blurring, cropping, rotating, scaling, flipping. Moreover, the data were collected by theauthors on different light conditions i.e., sunny, gloomy etc. Subsequently, arigorous model trainingwas conducted, which was then complemented by comprehensive model testing to ensure its efficacy.The culmination of these efforts led to the successful deployment of our custom-trained YOLO modelon real-time video footage from roadside CCTV cameras. In practical the police box near entering roador expressways can use this trained model as a module. YOLO, being an open-standard-basedalgorithm, serves as a foundational pillar upon which sustainable solutions within the realm of smarttransportation can be built. Notably, it has been observed that 88.2% accuracy can be gained byimplementing YOLOv8m model which was 83.6% in case of YOLOv8n",
  },
  {
    title:
      "Advancing Sustainability: Introducing Reverse Vending Machines To University Campuses",
    authors: ["Uday Karmoker", "Tarunnyamoye Kundu"],
    journalOrConference:
      "7th International Conference on Civil Engineering for Sustainable Development (ICCESD 2024)",
    date: "Feb 2024",
    link: "https://www.researchgate.net/publication/378263737_ADVANCING_SUSTAINABILITY_INTRODUCING_REVERSE_VENDING_MACHINES_TO_UNIVERSITY_CAMPUSES",
    summary:
      "The urban areas of Bangladesh are currently facing a pressing issue of solid waste generation andmanagement, with an alarming daily accumulation of approximately 25,000 tons, equivalent to 170 kgper person per year. This crisis significantly contributes to environmental problems, including climatechange, environmental pollution, and deforestation. One promising solution for effective plastic wastedisposal is the Reverse Vending Machine (RVM). An RVM is a device designed to accept barcodedplastic bottles and offer digital cash or redeemable coupons in return. This study focuses oninvestigating the challenges associated with implementing eco-friendly devices like RVMs in universitydormitories and campuses. For our research, we selected four university campuses, Rajshahi Universityof Engineering and Technology (RUET) and Rajshahi University (RU) in Rajshahi, Khulna Universityof Engineering and Technology (KUET) and Khulna University (KU) in Khulna. Surprisingly, despitethe presence of numerous recycling bins on these campuses, they currently do not engage in anyrecycling activities for the waste generated. A well-organized Solid Waste Management (SWM) systemcan yield multiple benefits, including reduced waste disposal costs and the creation of a moresustainable environment. The primary objective of this study was to initiate the installation of RVMmachines at strategic locations within these campuses, Analyze the entire supply and waste chain ofPET bottle, establish incentive system, and assess the rate of waste reduction achieved through theimplementation of RVMs. By introducing RVMs on campus, RUET, RU, KUET and KU can transitioninto more sustainable campusses, while also encouraging recycling in a convenient, incentivizedmanner. This approach can serve as a model for adoption in other universities as well and eventually inthe national SWM system.",
  },
];

//Achievements
export const achievements: Array<Achievements> = [
    {
        title: "## Shoktikonna Leadership Cohort 2023",
        date: "2023",
        content:"Completed a four-month transformative leadership and personal development program, earning **Top Performer** and Best Assignment awards while completing 25+ empowerment-focused sessions, activities, and certified courses from OLC/World Bank, edX, and Coursera. The cohort is organized by the EU in Bangladesh, World Bank, Devtale Partners , GIZ for empowering women in STEM.",
        images: [
            {
                src: "/images/achievements/sk3.png",
                alt: "Shoktikonna Leadership Cohort 2023",
            },
            {
                src: "/images/achievements/sk1.png",
                alt: "Shoktikonna Leadership Cohort 2023",
            },
            {
                src: "/images/achievements/sk2.png",
                alt: "Shoktikonna Leadership Cohort 2023",
            }
        ],
    },
  {
    title: "## Speaker - TEDx Khulna University",
    date: "2023",
    content: `Delivered a TEDx talk highlighting how women’s contributions in STEM have been historically overlooked and how societal norms often discourage them from pursuing these fields. I discussed the systemic barriers limiting their access to opportunities and proposed actionable solutions fostering a more equitable and inclusive society, starting from ensuring basic rights to creating advanced career pathways.`,
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
      },
    ],
  },
  {
    title: "## Finalist - HULT Prize at Khulna University",
    date: "2024",
    content: `Became a finalist in the Hult Prize at Khulna University by successfully clearing the preliminary rounds and presenting an innovative startup idea supported by a comprehensive business analysis.`,
    images: [
      {
        src: "/images/achievements/hult1.png",
        alt: "HULT Prize Event 1",
      },
    ],
  },
  {
    title: "## 6th National Girls Programming Contest 2023",
    date: "2023",
    content: `Placed 57th nationally among over 150 programming teams on the onsite contest.`,
    images: [
      {
        src: "/images/achievements/ngpc1.png",
        alt: "6th National Girls Programming Contest 2023",
      },
      {
        src: "/images/achievements/ngpc2.png",
        alt: "6th National Girls Programming Contest 2023",
      },
    ],
  },
  {
    title: "## Smart Rajshahi Innovation Challenge ",
    date: "2023",
    content: `Champion of the competition hosted by Rajshahi City Corporation and Startup Rajshahi. Designed an IoT-based
Reverse Vending Machine for solid waste management.`,
    images: [
      {
        src: "/images/achievements/sric1.png",
        alt: "Smart Rajshahi Innovation Challenge",
      },
    ],
  },
];

//Projects
export const projects: Array<Projects> = [
  {
    title: "Desktop Companion Bot: Baymin-1.0",
    description: ` Baymin-1.0 is an entertaining and interactive desktop companion bot that promotes healthy screen habits, provides a friendly reminder (implementing Pomodoro) by detecting presence, distance from the monitor using Computer Vision. `,
    technologies: [
      { name: "Python", icon: "python", url: "https://www.python.org/" },
      { name: "OpenCV", icon: "opencv", url: "https://opencv.org/" },
      {
        name: "Tkinter",
        icon: "tkinter",
        url: "https://docs.python.org/3/library/tkinter.html",
      },
    ],
    links: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=zCMlpaTLjPc" },
      {
        label: "GitHub",
        url: "https://github.com/tarunnya17/Desktop-Companion-Bot",
      },
    ],
    poster: "/images/projects/baymin.png",
  },
  {
    title: "Math Equation Plotter for Desktops",
    description: ` This plotter is a lightweight OpenGL-based tool that plots mathematical functions in real time, supporting linear, trigonometric, logarithmic, and exponential equations with interactive zoom, pan, and adjustable parameters.`,
    technologies: [
      { name: "OpenGL", icon: "opengl", url: "https://www.opengl.org/" },
      { name: "C++", icon: "cpp", url: "https://isocpp.org/" },
      { name: "Qt Framework", icon: "qt", url: "https://www.qt.io/" },
    ],
    links: [
      { label: "GitHub", url: " https://github.com/tarunnya17/Math_Plotter" },
      { label: "YouTube", url: "https://www.youtube.com/watch?v=8UaCjWoSqvo" },
    ],
    poster: "/images/projects/mathploter.png",
  },
  {
    title: "DBMS Project on Bishwo Shahitto Kendro Mobile Library",
    description:
      "A Java-based Library Management System for the Bishwo Shahitto Kendro Mobile Library, enabling book management, member registration, borrowing and returning, and report generation digitally and efficiently.",
    technologies: [
      { name: "Java", icon: "java", url: "https://www.java.com/" },
      { name: "MySQL", icon: "mysql", url: "https://www.mysql.com/" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/tarunnya17/DBMS_Project" },
    ],
    poster: "/images/projects/bsk.png",
  },
  {
    title: "Eventor.com - An Event Management Website",
    description: `It is an event management and ticketing platform that lets users
create, host, and book events across various categories offering seamless experience for organizers and attendees. It
includes features like payment, integrated search etc.`,
    technologies: [
      {
        name: "JavaScript",
        icon: "javascript",
        url: "https://www.javascript.com/",
      },
      {
        name: "HTML",
        icon: "html",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "Firebase",
        icon: "firebase",
        url: "https://firebase.google.com/",
      },
      { name: "EJS", icon: "ejs", url: "https://ejs.co/" },
      {
        name: "TailwindCSS",
        icon: "tailwindcss",
        url: "https://tailwindcss.com/",
      },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/tarunnya17/Eventor-Web-Project",
      },
    ],
    poster: "/images/projects/eventor.png",
  },
];

//Contact
export const contact = {
  email: person.email,
  phone: person.phone,
  timezone: "Asia/Dhaka",
  social: social,
  whatsapp: person.whatsapp,
};
