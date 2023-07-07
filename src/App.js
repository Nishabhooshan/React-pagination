import { useState } from "react";
import JsonData from "./JSON_DATA.json";
import "./App.css";
import ReactPaginate from "react-paginate";

console.log("nhh", JsonData);
function App() {
  const [data, setData] = useState(JsonData.slice(0, 50));
  const [pageNum, setPageNum] = useState(0);

  const userPerPage = 10;
  const pagesVisited = pageNum * userPerPage;
  const showDataPerPage = data
    .slice(pagesVisited, pagesVisited + userPerPage)
    .map((user) => {
      return (
        <div className="user">
          <h1>{user.email}</h1>
          <h2>{user.firstName}</h2>
          <h3>{user.lastName}</h3>
        </div>
      );
    });
const pageCount = Math.ceil(data.length/userPerPage)
const onPageChange = ({selected}) =>{
  setPageNum(selected)
}
  return <div className="App">{showDataPerPage}
  <ReactPaginate
  previousLabel ={"Previous"}
  nextLabel={"Next Label"}
  pageCount={pageCount}
  onPageChange={onPageChange}
  containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}

  

  />
  </div>;
}

export default App;
