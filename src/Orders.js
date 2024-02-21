import React from "react";
import List from "./List";

const Orders = (props) => {
  const table1 = props.dataArr.filter((data) => data.table === "1");
  const table2 = props.dataArr.filter((data) => data.table === "2");
  const table3 = props.dataArr.filter((data) => data.table === "3");
  return (
    <div>
      <h2>Orders</h2>
      <div>
        <label htmlFor="table1">Table 1</label>
        <ul id="table1">
          <List table={table1} deleteData={props.deleteData} />
        </ul>
      </div>
      <div>
        <label htmlFor="table2">Table 2</label>
        <ul id="table2">
          <List table={table2} deleteData={props.deleteData} />
        </ul>
      </div>
      <div>
        <label htmlFor="table3">Table 3</label>
        <ul id="table3">
          <List table={table3} deleteData={props.deleteData} />
        </ul>
      </div>
    </div>
  );
};

export default Orders;
