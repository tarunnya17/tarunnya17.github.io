export type Section = {
    id: string;
    label: string;
    icon: string;
    href: string;
    active?: boolean;
};

export type SectionsDict = {
    [id: string]: Section;
};