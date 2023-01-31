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


export default function lecture2 () {

  return (
    <div className="note">
      <div className="content">
        <div className="header">
          <Heading className="title">1/30/23: The first component of a deep learning model</Heading>
          <Text>Slides can be found <a target="blank" href="https://drive.google.com/file/d/1kUGan_fqyi6gGiRsAV_c4Fq5OZiL0HsF/view?usp=sharing">here</a></Text>
        </div>
        <br></br>
        <Stack spacing={1}>
          {/* Main Notes Body */}
          <Text>Perceptron:</Text>
          <OrderedList>
            <ListItem>Machine Learning Problem - recognizing handwritten digits</ListItem>
            <ListItem>Perceptron</ListItem>
            <ListItem>Parameters - weights and biases</ListItem>
          </OrderedList>

          <br></br>
          <Text>Handwritten digit recognition</Text>
          <UnorderedList>
            <ListItem>Motivation: US postal service scanning zip codes</ListItem>
            <ListItem>Input X: handwritten digit</ListItem>
            <ListItem>Target Y: which digit is it?</ListItem>
            <br></br>
            <ListItem>Representing digits in the computer: numbers known as <b>pixel values</b>, (a grid of discrete values that make up an image)</ListItem>
              <UnorderedList>
                <ListItem>0 is (usually) white</ListItem>
                <ListItem>255 is (usually) black</ListItem>
                <ListItem>Numbers in between are shades of grey</ListItem>
              </UnorderedList>
            <ListItem>Trends of inputs and outputs, we see if we input a 0, the pixels in the middle of the digit tend to be “light”/0</ListItem>
            <ListItem>How does the pattern compare with digit 3? Looking at just the middle of 3, you see darker pixels in the middle</ListItem>
            <ListItem>Can we define a set of <b>heuristics</b> (ie rules based on out institution)?</ListItem>
            <br></br>
            <ListItem>Heuristics, not as simple as we think</ListItem>
              <UnorderedList>
                <ListItem>Distortions, overlappings, underlinings, etc.</ListItem>
                <ListItem>Cannot rely on an exact set of rules</ListItem>
              </UnorderedList>
            <br></br>
            <ListItem>ML pipeline for digit recognition: Dataset → Preprocessing → Train model → Evaluate model</ListItem>
            <ListItem>MNIST → Modified National Institute of Standards and Technology database</ListItem>
            <ListItem>MNIST Preprocessing:</ListItem>
              <UnorderedList>
                <ListItem>Training set: 60,000 images</ListItem>
                <ListItem>Test set: 10,000 images</ListItem>
                <ListItem>No explicit validation set. Can split up test set into 5,000.</ListItem>
              </UnorderedList>
            <br></br>
            <TableContainer>
              <Table size="sm" className="dottedtable">
                <Thead>
                  <Tr>
                    <Th>Input X</Th>
                    <Th>Multiclass Classification</Th>
                    <Th>Target Y</Th>
                  </Tr>
                  </Thead>
                  <Tbody>
                  <Tr>
                    <Td>x<sup>1</sup> = 2 (28x28 pixel grid)</Td>
                    <Td>Function: f(x) → Y</Td>
                    <Td>y<sup>1</sup> = "2"</Td>
                  </Tr>
                  <Tr>
                    <Td>X &#x2208; [0, 255]<sup>28x28</sup></Td>
                    <Td></Td>
                    <Td>Y &#x2208; [0, 9]</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <br></br>
            <TableContainer>
              <Table size="sm" className="dottedtable">
                <Thead>
                  <Tr>
                    <Th>Input X</Th>
                    <Th>Binary Classification</Th>
                    <Th>Target Y</Th>
                  </Tr>
                  </Thead>
                  <Tbody>
                  <Tr>
                    <Td>x<sup>1</sup> = 2 (28x28 pixel grid)</Td>
                    <Td>Function: f(x) → Y</Td>
                    <Td>y<sup>1</sup> = 1</Td>
                  </Tr>
                  <Tr>
                    <Td>x<sup>2</sup> = 0</Td>
                    <Td>Is it "2" or not?</Td>
                    <Td>y<sup>2</sup> = 0</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <br></br>
            <Text>Perceptron: Our first deep-learning model unit</Text>
            <ListItem>Biological motivation, loosely inspired by neurons, basic working unit of the brain</ListItem>
            <ListItem>Important: Neuron must <i>pass a threshold</i> to pass on information to the next neuron</ListItem>
            <br></br>
            <ListItem>Input: a vector of numbers x = [x<sub>1</sub>, x<sub>2</sub>, ... x<sub>n</sub>]</ListItem>
              <UnorderedList>
                <ListItem>Any numerical value that represents the data</ListItem>
                <ListItem>On MNIST image, each pixel in the matrix is an input</ListItem>
              </UnorderedList>
              <br></br>
            <ListItem>Predicting with a Perceptron</ListItem>
              <OrderedList>
                <ListItem>Multiply each input x<sub>i</sub> by its corresponding weight w<sub>i</sub>, sum them up</ListItem>
                <ListItem>Add the bias b</ListItem>
                <UnorderedList>
                  <ListItem>B + &#x2211;
                    <span class='supsub'>
                      <sup class='superscript'>num inputs</sup>
                      <sub class='subscript'>i = 0</sub>
                    </span> [w<sub>i</sub> &#x22C5; x<sub>i</sub>]</ListItem>
                <ListItem>How is perceptron different from linear regression? We introduce a threshold!</ListItem>
                </UnorderedList>
                <ListItem>If the result value is greater than 0, return 1; otherwise, return 0.</ListItem>
              </OrderedList>
              <br></br>
              <UnorderedList>
                <Text>Parameters: values we adjust!</Text>
                <ListItem><b>Weights</b> - the importance of each input to determining the output</ListItem>
                  <UnorderedList>
                    <ListItem>Weight near 0 implies this input has little influence on the output</ListItem>
                    <ListItem>Negative weight means an increase in input will decrease output (inverse relationship!)</ListItem>
                  </UnorderedList>
                <ListItem><b>Bias</b></ListItem>
                  <UnorderedList>
                    <ListItem>Geometric explanation: bias is essentially the b term in y=mx+b</ListItem>
                    <ListItem>Conceptual explanation: the <i>a priori</i> likelihood of the positive class</ListItem>
                      <UnorderedList>
                        <ListItem>Ensures that even if all inputs are 0, there will be some result value</ListItem>
                        <ListItem>Just because all inputs are 0, it does not mean there are no 1's in the world</ListItem>
                      </UnorderedList>
                    <ListItem>Another way to think of bias is to represent it as an extra weight for an input/feature that is always 1</ListItem>
                  </UnorderedList>
              </UnorderedList>
              <ListItem>In modern parlance, b + w &#x22C5; x is known as a <b>linear unit</b></ListItem>
          </UnorderedList>
          <br></br>
          <Heading size="sm">The Perceptron Learning Algorithm</Heading>
          <OrderedList>
            <ListItem>Set <i>w</i>'s to 0.</ListItem>
            <ListItem>For <i>N</i> iterations, or unitl the weights do not change:</ListItem>
            <UnorderedList>
              <ListItem>for each training example <i>x<sup>k</sup></i> with label <i>y<sup>k</sup></i></ListItem>
              <UnorderedList>
                <ListItem>if <i>y<sup>k</sup> - f(x<sup>k</sup>) = 0</i> continue</ListItem>
                <ListItem>else, for all weights <i>w<sub>i</sub></i>, 
                &#x394; <i>w<sub>i</sub> = (y<sup>k</sup> - f(x<sup>k</sup>))x<span class='supsub'>
                      <sup class='superscript'>k</sup>
                      <sub class='subscript'>i</sub>
                    </span></i></ListItem>
              </UnorderedList>
            </UnorderedList>
            <TableContainer>
              <Table size="sm" className="dottedtable">
                <Tbody>
                  <Tr>
                    <Td><i>b</i> = bias</Td>
                    <Td><i>w</i> = weights</Td>
                  </Tr>
                  <Tr>
                    <Td><i>N</i> = maximum number of training iterations</Td>
                    <Td>x<sup>k</sup> = k<sup>th</sup> training example</Td>
                  </Tr>
                  <Tr>
                    <Td>y<sup>k</sup> = label for the k<sup>th</sup> example</Td>
                    <Td>w<sub>i</sub> = weight for the i<sup>th</sup> input where i &#8804; <i>n</i></Td>
                  </Tr>
                  <Tr>
                    <Td><i>n</i> = number of pixels per image</Td>
                    <Td>x<span class='supsub'>
                      <sup class='superscript'>k</sup>
                      <sub class='subscript'>i</sub>
                    </span> = i<sup>th</sup> input of the example where i &#8804; <i>n</i></Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </OrderedList>
        
        <br></br>
        {/* Recap Section */}
        <div className="recap">
          <Heading size='sm'>Recap</Heading>
          <Text>MNIST Data</Text>
          <UnorderedList>
            <ListItem>Representing handwritten digits</ListItem>
            <ListItem>Handwritten digit prediction task</ListItem>
            <ListItem>Machine learning pipeline</ListItem>
          </UnorderedList>
          <Text>Perceptron</Text>
          <UnorderedList>
            <ListItem>Biological motivation</ListItem>
            <ListItem>Perceptron equation</ListItem>
            <ListItem>Perceptron parameters</ListItem>
          </UnorderedList>
        </div>
        </Stack>
        <br></br>
        <Return></Return>
      </div>
    </div>
  )
}