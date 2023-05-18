import { StackCard } from "./style";
import { Text } from "@/styles/Text";
import { IconType } from "react-icons/lib";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

interface StackProps {
  title: string;
  icon: string | IconType;
  key: number;
}

export const Stack = (
  { title, icon: Icon }: StackProps,
  key: number
): JSX.Element => {
  const isString = typeof Icon === "string";

  return (
    <StackCard className={`${key}`} key={key}>
      <Text>{title}</Text>
      {isString ? (
        <img src={Icon} alt={title} title={title} height="84px" width="84px" />
      ) : (
        <Icon size={84} color="#868E96" />
      )}
    </StackCard>
  );
};

const IconAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="icon-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CSSTransition
        in={isHovered}
        timeout={300}
        classNames="icon-rotate"
        unmountOnExit
      >
        <FaStar className="icon" />
      </CSSTransition>
    </div>
  );
};

export default IconAnimation;
