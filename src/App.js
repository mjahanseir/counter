import React, { useState } from "react";
import Counter from "./components/counter";

// class App extends Component {
//   render() {
//return <Counter />;
// }

const App = () => {
  const [data] = useState([
    { id: 1, name: "Foo", age: "20" },
    { id: 2, name: "Bar", age: "30" },
    { id: 3, name: "Baz", age: "40" },
  ]);
  return (
    <table>
      <tbody>
        {data.map((person, i) => (
          <TableRow key={i} tableData={person} />
        ))}
      </tbody>
    </table>
  );
};
const TableRow = ({ key, tableData }) => {
  return (
    <tr>
      <td>id: {tableData.id}</td>
      <td>name: {tableData.name}</td>
      <td>age: {tableData.age}</td>
    </tr>
  );
};
export default App;
