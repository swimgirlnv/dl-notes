  import "./App.css";
  import { useState, useEffect } from "react";
  import LectureTable from "./LectureTable";
  import Lecture1 from "./notes/Lecture1";


  function App() {

    return (
      <div className="App">
        <div className="page-content">
        <div className="item1">
          <h1>Deep Learning Notes</h1>
        </div>
        <div className="lecture-table">
          <LectureTable></LectureTable>
        </div>
        <br></br>
        <div className="notes">
          <div id="l1">
            <Lecture1></Lecture1>
          </div>
        </div>

        </div>
      </div>
    );
  }

  export default App;
