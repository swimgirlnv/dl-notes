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
          <Heading className="title">1/30/23: </Heading>
          <Text>Slides can be found <a target="blank" href="">here</a></Text>
        </div>
        <br></br>
        <Stack spacing={1}>
        
        <br></br>
        <div className="recap">
          <Heading size='sm'>Recap</Heading>
          
        </div>
        </Stack>
        <br></br>
        <Return></Return>
      </div>
    </div>
  )
}