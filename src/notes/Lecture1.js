import "./notes.css"

export default function lecture1 () {
  return (
    <div className="note">
      <div className="header">
        <h2 className="title">1/27/23: Learn Basic Concepts of Machine Learning</h2>
      </div>
      <div className="content">
        <h3>How do we represent input/output?</h3>
        <ul>
          <li>Model == function</li>
          <li>How can we represent input images as numbers?</li>
          <ul>
            <li>2D arrays of pixel types</li>
          </ul>
          <li>How can we represent output labels as numbers?</li>
          <ul>
            <li>Binary codings like 0 and 1</li>
          </ul>
          <li>"Binary classification":</li>
          <ul>
            <li>Input image X is X e R^(HxWx3)</li>
            <li>Output Y Y e{0,1} ← categorical output</li>
          </ul>
          

        </ul>
      </div>
      
    </div>
  )
}