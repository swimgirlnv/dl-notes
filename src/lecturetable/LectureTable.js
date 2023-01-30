import "./LectureTable.css"

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

export default function LectureTable() {

  return (
    <div>
      <TableContainer>
        <Table className="table" variant='simple'>
          <Thead>
            <Tr className="tr">
              <Th className="th">Date</Th>
              <Th className="th">Lecture</Th>
              <Th className="th">Misc</Th>
            </Tr>
          </Thead>
          {/* Add on to this as more lectures/notes */}
          <Tbody>
            <Tr>
              <Td className="td">1/27/2023</Td>   
              <Td className="td"><a href="#l1">Learn Basic Concepts of Machine Learning</a></Td>
              <Td className="td"><a target="blank" href="https://drive.google.com/file/d/1dCS9DuzZVxGCTjybaU_xiWmeFnGU4mVB/view?usp=sharing">Slides</a></Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr className="tr">
              <Th className="th">Date</Th>
              <Th className="th">Lecture</Th>
              <Th className="th">Misc</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  )

}