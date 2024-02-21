import React, { useState } from "react";

const Form = (props) => {
  const [UID, setUID] = useState("");
  const handleUIDChange = (e) => {
    setUID(e.target.value);
  };
  const [price, setPrice] = useState("");
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const [dish, setDish] = useState("");
  const handleDishChange = (e) => {
    setDish(e.target.value);
  };
  const [table, setTable] = useState("1");
  const handleTableChange = (e) => {
    setTable(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      id: UID,
      price: price,
      dish: dish,
      table: table,
    };
    const maxId = Math.max(...props.dataArr.map((e) => e.id));

    if (
      props.dataArr.length > 0 &&
      props.dataArr.map((e) => e.id).includes(UID)
    ) {
      alert(`Enter unique id. Enter greater then ${maxId}`);
    } else if (UID !== "" && price !== "" && dish !== "") {
      props.addData(obj);
      setUID("");
      setDish("");
      setPrice("");
      setTable("1");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">Unique Order Id</label>
        <input id="id" type="number" value={UID} onChange={handleUIDChange} />
      </div>
      <div>
        <label htmlFor="price">Enter Price</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <label htmlFor="dish">Enter Dish</label>
        <input id="dish" type="text" value={dish} onChange={handleDishChange} />
      </div>
      <div>
        <label htmlFor="table">Choose Table No.</label>
        <select id="table" value={table} onChange={handleTableChange}>
          <option value="1">Table 1</option>
          <option value="2">Table 2</option>
          <option value="3">Table 3</option>
        </select>
      </div>

      <button type="submit">Add to Bill</button>
    </form>
  );
};

export default Form;
