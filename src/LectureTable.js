import "./LectureTable.css"

export default function LectureTable() {

  return (
    <div>
      <table className="table">
        <tr className="tr">
          <th className="th">Date</th>
          <th className="th">Lecture</th>
          <th className="th">Misc</th>
        </tr>
        {/* Add on to this as more lectures/notes */}
        <tr>
          <td className="td">1/27/2023</td>   
          <td className="td"><a href="#l1">Learn Basic Concepts of Machine Learning</a></td>
          <td className="td"></td>
        </tr>

      </table>
    </div>
  )

}