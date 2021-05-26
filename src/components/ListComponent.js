import React, { useState } from "react";
import ListItem from "./ListItem";

const ListComponent = () => {
  const [array, setarray] = useState([
    { name: "hong", age: "32", height: "184" },
    { name: "go", age: "42", height: "174" },
    { name: "dolly", age: "12", height: "174" },
  ]);
  return (
    <div>
      {array.map((user, index) => {
        return <ListItem user={user} key={index}></ListItem>;
      })}
    </div>
  );
};

export default ListComponent;
