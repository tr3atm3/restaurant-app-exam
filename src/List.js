import React from "react";

const List = (props) => {
  return (
    <>
      {props.table.map((obj) => (
        <li key={obj.id}>
          {obj.price} - table{obj.table} - {obj.dish}
          <button onClick={() => props.deleteData(obj.id)}>Delete</button>
        </li>
      ))}
    </>
  );
};

export default List;
