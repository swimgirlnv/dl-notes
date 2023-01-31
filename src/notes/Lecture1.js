import Return from "../buildingblocks/Return"
import "./notes.css"

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

import { Heading, Text, Stack } from '@chakra-ui/react'


export default function lecture1 () {

  return (
    <div className="note">
      <div className="content">
        <div className="header">
          <Heading className="title">1/27/23: Learn Basic Concepts of Machine Learning</Heading>
          <Text>Slides can be found <a target="blank" href="https://drive.google.com/file/d/1dCS9DuzZVxGCTjybaU_xiWmeFnGU4mVB/view?usp=sharing">here</a></Text>
        </div>
        <br></br>
        <Stack spacing={1}>
        <Text>How do we represent input/output?</Text>
        <UnorderedList>
          <ListItem>Model == function</ListItem>
          <ListItem>How can we represent input images as numbers?</ListItem>
          <UnorderedList>
            <ListItem>2D arrays of pixel types</ListItem>
          </UnorderedList>
          <ListItem>How can we represent output labels as numbers?</ListItem>
          <UnorderedList>
            <ListItem>Binary codings ListItemke 0 and 1</ListItem>
          </UnorderedList>
          <ListItem>"Binary classification":</ListItem>
          <UnorderedList>
            <ListItem>Input image X is X &#x2208; R<sup>H x W x 3</sup></ListItem>
            <ListItem>Output Y is Y &#x2208; &#x7B; 0,1 &#x7D; ← categorical output</ListItem>
          </UnorderedList>
          </UnorderedList>
          <br></br>
          <TableContainer>
            <Table className="dottedtable" size='sm'>
              <Thead>
                <Tr>
                  <Th>Variable</Th>
                  <Th>Description</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td><b>X:</b></Td>
                  <Td>set of input data</Td>
                </Tr>
                <Tr>
                  <Td><b>Y:</b></Td>
                  <Td>associated set of target values, outputs. For supervised learning</Td>
                </Tr>
                <Tr>
                  <Td><b>x<sup>k</sup>:</b></Td>
                  <Td>kth example input from a dataset</Td>
                </Tr>
                <Tr>
                  <Td><b>y<sup>k</sup>:</b></Td>
                  <Td>kth example output from a dataset</Td>
                </Tr>
                <Tr>
                  <Td><b>&#x211D;:</b></Td>
                  <Td>set of all real numbers</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          
          <br></br>
          <UnorderedList>
          <ListItem>But output can be more than just binary, ListItemke Y &#x2208; &#x211D;</ListItem>
          <br></br>
          <ListItem>Linear function <b>y=wx + b</b> where w=="weight" and b=="bias"</ListItem>
          <ListItem>Need bias to have flexibiListItemty to shift slope when there is an error</ListItem>
          <ListItem>Hard to do functions by hand! So use machine learning to learn a good approximation of the function from the data</ListItem>
        </UnorderedList>
        <h3>"Classic" supervised learning in machine learning</h3>
        <img src="https://i.imgur.com/M5UmLq1.png" width="70%"></img>
        <h3>Testing our model on three observations</h3>
        <UnorderedList>
          <ListItem>Can we do better? Maybe!</ListItem>
          <UnorderedList>
            <ListItem><mark>Option 1: collect more data and retrain</mark> ← Do this first! We need more data before we try a new function if we have a small number of observations</ListItem>
            <ListItem>Option 2: try a different function</ListItem>
            <ListItem>Option 3: both 1 and 2</ListItem>
          </UnorderedList>
          <br></br>
          <ListItem>Learning better models - collect more data: we see we missed the actual trend. Through retraining, we can get a better capture of the data. Still see data with large errors to the linear function, though!</ListItem>
          <ListItem>Introduce a polynomial: much better approximation of trends (non-linear relationship/function)</ListItem>
          <ListItem>Stack linear functions with non-linear functions to capture complexity of data</ListItem>
        </UnorderedList>
        <br></br>
        <h3>How to know which function is best? Test a new observation!</h3>
        <TableContainer>
          <Table className="dottedtable" size="sm">
              <Tr>
                <Td><b>Underfit</b></Td>
                <Td>“My model is not doing that well on the given data and new data”</Td>
              </Tr>
              <Tr>
                <Td><b>Good Fit</b></Td>
                <Td>“Doing well on given data AND new data!”</Td>
              </Tr>
              <Tr>
                <Td><b>Overfit</b></Td>
                <Td>“Perfect for given data but bad on new data!” (Hasn’t learned actual trends in the data!)</Td>
              </Tr>
          </Table>
        </TableContainer>
        <br></br>
        <h3>How to train your <strike>dragon</strike> model</h3>
        <UnorderedList>
          <ListItem>Simulate scenario with data you have</ListItem>
        </UnorderedList>
        <TableContainer>
          <Table className="dottedtable" size='sm'>
            <Tbody>
              <Tr>
                  <Td><b>Training Set</b></Td>
                  <Td>data the model <i>can</i> see</Td>
                </Tr>
                <Tr>
                  <Td><b>VaListItemdatons Set</b></Td>
                  <Td>new points the model hasn't seen yet</Td>
                </Tr>
                <Tr>
                  <Td><b>Test Set</b></Td>
                  <Td>don’t use this set at all during training process, only use it to finally evaluate work and evaluate performance</Td>
                </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <br></br>
        <UnorderedList>
          <ListItem><b>Training phase:</b></ListItem>
          <UnorderedList>
            <ListItem>If My model is not doing that well on training data and validation data, Then (underfit)</ListItem>
            <ListItem>If My model is doing well on the training data, the performance is bad on validation data, Then (overfit)</ListItem>
            <ListItem>Else my model is doing well on both!</ListItem>
          </UnorderedList>
          <UnorderedList><b>Test phase:</b></UnorderedList>
          <UnorderedList>
            <ListItem>(Ideally) I have more confidence in the generalizability of my model since we have never seen any of this data before AND the model works well!</ListItem>
            <ListItem>But if it doesn’t work, what trends am I missing in the training data? What is off in my training strategy? More data could help, OR there might be other factors that need to be taken into account</ListItem>
          </UnorderedList>
          <ListItem><b>Adding features to sample:</b> x<sup>k</sup><sub>i</sub></ListItem>
          <UnorderedList>
            <ListItem>k is the index of the row</ListItem>
            <ListItem>i is the index of the column (features)</ListItem>
          </UnorderedList>
        </UnorderedList>
        <br></br>
        <div className="recap">
          <Heading size='sm'>Recap</Heading>
          <p>How to represent inputs/outputs</p>
          <UnorderedList>
            <ListItem>Represent input and output as numbers</ListItem>
            <ListItem>Classification: predicting categorical outputs</ListItem>
            <ListItem>Regression: predicting numerical outputs</ListItem>
          </UnorderedList>
          <p>Supervised learning</p>
          <UnorderedList>
            <ListItem>Learn a function that approximates the data well</ListItem>
            <ListItem>Get more data → Try different models → Pick a good model</ListItem>
          </UnorderedList>
        </div>
        </Stack>
        <br></br>
        <Return></Return>
      </div>
    </div>
  )
}