import React from 'react';
import { iconLibrary } from "@/resources/icons";

type IconProps = {
  name: keyof typeof iconLibrary;
  size?: number | string;
  color?: string;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', className }) => {
  const IconComponent = iconLibrary[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" does not exist in the icon library.`);
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
};

export default Icon;
