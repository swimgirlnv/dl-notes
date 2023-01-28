  import "./App.css";
  import LectureTable from "./lecturetable/LectureTable";
  import Lecture1 from "./notes/Lecture1";
  import Break from "./buildingblocks/Break";


  function App() {

    return (
      <div className="App">
        <div className="page-content">
        <div className="item1" id="top">
          <h1>Deep Learning Notes</h1>
        </div>
        <div className="lecture-table">
          <LectureTable></LectureTable>
        </div>
        <Break></Break>
        <div className="notes">
          <div id="l1">
            <Lecture1></Lecture1>
          </div>
          <Break></Break>
        </div>

        </div>
      </div>
    );
  }

  export default App;
