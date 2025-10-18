import { IconType } from "react-icons";

import {
    HiArrowUpRight,
    HiOutlineLink,
    HiArrowTopRightOnSquare,
    HiEnvelope,
    HiCalendarDays,
    HiArrowRight,
    HiOutlineEye,
    HiOutlineEyeSlash,
    HiOutlineDocument,
    HiOutlineGlobeAsiaAustralia,
    HiOutlineRocketLaunch,
} from "react-icons/hi2";

import { PiGraduationCapBold, PiLinkedinLogoBold, PiXLogoBold, PiThreadsLogoBold, PiGithubLogoBold } from "react-icons/pi";

import {
    PiHouseDuotone,
    PiUserCircleDuotone,
    PiGridFourDuotone,
    PiBookBookmarkDuotone,
    PiImageDuotone,
} from "react-icons/pi";

import {
    SiJavascript,
    SiNextdotjs,
    SiFigma,
    SiSupabase,
    SiResearchgate,
} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, FaResearchgate, } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";

export const iconLibrary: Record<string, IconType> = {
    arrowUpRight: HiArrowUpRight,
    arrowRight: HiArrowRight,
    email: HiEnvelope,
    globe: HiOutlineGlobeAsiaAustralia,
    person: PiUserCircleDuotone,
    grid: PiGridFourDuotone,
    book: PiBookBookmarkDuotone,
    openLink: HiOutlineLink,
    calendar: HiCalendarDays,
    home: PiHouseDuotone,
    gallery: PiImageDuotone,
    discord: FaDiscord,
    eye: HiOutlineEye,
    eyeOff: HiOutlineEyeSlash,
    github: PiGithubLogoBold,
    linkedin: FiLinkedin,
    x: PiXLogoBold,
    twitter: PiXLogoBold,
    threads: PiThreadsLogoBold,
    arrowUpRightFromSquare: HiArrowTopRightOnSquare,
    document: HiOutlineDocument,
    rocket: HiOutlineRocketLaunch,
    javascript: SiJavascript,
    nextjs: SiNextdotjs,
    supabase: SiSupabase,
    figma: SiFigma,
    facebook: LuFacebook,
    pinterest: FaPinterest,
    whatsapp: FaWhatsapp,
    reddit: FaReddit,
    telegram: FaTelegram,
    scholar: PiGraduationCapBold,
    researchgate: SiResearchgate,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;