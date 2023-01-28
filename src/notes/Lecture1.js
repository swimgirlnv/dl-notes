import Return from "../buildingblocks/Return"
import "./notes.css"

export default function lecture1 () {

  return (
    <div className="note">
      <div className="content">
        <div className="header">
          <h2 className="title">1/27/23: Learn Basic Concepts of Machine Learning</h2>
          <p>Slides can be found <a target="blank" href="https://drive.google.com/file/d/1dCS9DuzZVxGCTjybaU_xiWmeFnGU4mVB/view?usp=sharing">here</a></p>
        </div>
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
            <li>Input image X is X &#x2208; R<sup>H x W x 3</sup></li>
            <li>Output Y is Y &#x2208; &#x7B; 0,1 &#x7D; ← categorical output</li>
          </ul>
          </ul>
          <br></br>
          <table className="table1">
            <tr>
              <td><b>X:</b></td>
              <td>set of input data</td>
            </tr>
            <tr>
              <td><b>Y:</b></td>
              <td>associated set of target values, outputs. For supervised learning</td>
            </tr>
            <tr>
              <td><b>x<sup>k</sup>:</b></td>
              <td>kth example input from a dataset</td>
            </tr>
            <tr>
              <td><b>y<sup>k</sup>:</b></td>
              <td>kth example output from a dataset</td>
            </tr>
            <tr>
              <td><b>&#x211D;:</b></td>
              <td>set of all real numbers</td>
            </tr>
          </table>
          <br></br>
          <ul>
          <li>But output can be more than just binary, like Y &#x2208; &#x211D;</li>
          <br></br>
          <li>Linear function <b>y=wx + b</b> where w=="weight" and b=="bias"</li>
          <li>Need bias to have flexibility to shift slope when there is an error</li>
          <li>Hard to do functions by hand! So use machine learning to learn a good approximation of the function from the data</li>
        </ul>
        <h3>"Classic" supervised learning in machine learning</h3>
        <img src="https://i.imgur.com/M5UmLq1.png" width="70%"></img>
        <h3>Testing our model on three observations</h3>
        <ul>
          <li>Can we do better? Maybe!</li>
          <ul>
            <li><mark>Option 1: collect more data and retrain</mark> ← Do this first! We need more data before we try a new function if we have a small number of observations</li>
            <li>Option 2: try a different function</li>
            <li>Option 3: both 1 and 2</li>
          </ul>
          <br></br>
          <li>Learning better models - collect more data: we see we missed the actual trend. Through retraining, we can get a better capture of the data. Still see data with large errors to the linear function, though!</li>
          <li>Introduce a polynomial: much better approximation of trends (non-linear relationship/function)</li>
          <li>Stack linear functions with non-linear functions to capture complexity of data</li>
        </ul>
        <h3>How to know which function is best? Test a new observation!</h3>
        <table className="table1">
            <tr>
              <td><b>Underfit</b></td>
              <td>“My model is not doing that well on the given data and new data”</td>
            </tr>
            <tr>
              <td><b>Good Fit</b></td>
              <td>“Doing well on given data AND new data!”</td>
            </tr>
            <tr>
              <td><b>Overfit</b></td>
              <td>“Perfect for given data but bad on new data!” (Hasn’t learned actual trends in the data!)</td>
            </tr>
        </table>
        <h3>How to train your <strike>dragon</strike> model</h3>
        <ul>
          <li>Simulate scenario with data you have</li>
        </ul>
        <table className="table1">
            <tr>
              <td><b>Training Set</b></td>
              <td>data the model <i>can</i> see</td>
            </tr>
            <tr>
              <td><b>Validatons Set</b></td>
              <td>new points the model hasn't seen yet</td>
            </tr>
            <tr>
              <td><b>Test Set</b></td>
              <td>don’t use this set at all during training process, only use it to finally evaluate work and evaluate performance</td>
            </tr>
        </table>
        <ul>
          <li><b>Training phase:</b></li>
          <ul>
            <li>If My model is not doing that well on training data and validation data, Then (underfit)</li>
            <li>If My model is doing well on the training data, the performance is bad on validation data, Then (overfit)</li>
            <li>Else my model is doing well on both!</li>
          </ul>
          <li><b>Test phase:</b></li>
          <ul>
            <li>(Ideally) I have more confidence in the generalizability of my model since we have never seen any of this data before AND the model works well!</li>
            <li>But if it doesn’t work, what trends am I missing in the training data? What is off in my training strategy? More data could help, OR there might be other factors that need to be taken into account</li>
          </ul>
          <li><b>Adding features to sample:</b> x<sup>k</sup><sub>i</sub></li>
          <ul>
            <li>k is the index of the row</li>
            <li>i is the index of the column (features)</li>
          </ul>
        </ul>
        <div className="recap">
          <h3>Recap</h3>
          <p>How to represent inputs/outputs</p>
          <ul>
            <li>Represent input and output as numbers</li>
            <li>Classification: predicting categorical outputs</li>
            <li>Regression: predicting numerical outputs</li>
          </ul>
          <p>Supervised learning</p>
          <ul>
            <li>Learn a function that approximates the data well</li>
            <li>Get more data → Try different models → Pick a good model</li>
          </ul>
        </div>
        <br></br>
        <Return></Return>
      </div>
    </div>
  )
}