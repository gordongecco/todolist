import * as React from "react";

const ListItems = props => {
  console.log(props.items);

  return (
    <div>
      <h2>{props.items}</h2>
    </div>
  );
};

export default ListItems;
