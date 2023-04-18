import React from "react";

const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <>
          <h1>{index + 1}</h1>
          <ItemComponent key={index} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
};

export default NumberedList;
