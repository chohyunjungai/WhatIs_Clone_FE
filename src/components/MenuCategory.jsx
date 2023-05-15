import React from "react";

const MenuCategory = (props) => {
  return (
    <div>
      <div>{`${props.item.imageURL} `}</div>
      <div>{` ${props.item.name} `}</div>
    </div>
  );
};

export default MenuCategory;
