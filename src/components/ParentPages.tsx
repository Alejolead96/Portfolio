import React from "react";

interface Props {
  children: React.ReactNode;
  activePage: number;
}

const ParentPages = ({ children, activePage }: Props) => {
  const childrenArray = React.Children.toArray(children);

  const activeChild = childrenArray.map((child) => {
    return React.isValidElement(child) && child;
  });

  return <div className="p-6">{activeChild[activePage]}</div>;
};

export default ParentPages;
