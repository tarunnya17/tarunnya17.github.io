import { IconName } from "@/resources/icons";

//Basic person type
export type Person = {
    firstname: string;
    lastname: string;
    name: string;
    role: string;
    avatar: Avatar;
    email: string;
    phone: string;
    location: string;
};

export type Avatar = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

export type Social = Array<{
  name: string;

  icon: IconName;

  link: string;
}>;