import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Orders from "./Orders";

function App() {
  const [dataArr, setDataArr] = useState([]);
  const addData = (data) => {
    setDataArr((prev) => [data, ...prev]);
  };
  const deleteData = (id) => {
    setDataArr((prev) => prev.filter((x) => x.id !== id));
  };

  return (
    <div className="App">
      <Form addData={addData} dataArr={dataArr} />
      <Orders dataArr={dataArr} deleteData={deleteData} />
    </div>
  );
}

export default App;
