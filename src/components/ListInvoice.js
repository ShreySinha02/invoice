import React from 'react'
import {Table,Thead,Tbody,Tr,Th,Td,TableContainer,Button, ButtonGroup} from '@chakra-ui/react'
function ListInvoice({setisSubmit,setShowinvoice,invoices,getInvoices}) {
  return (
    <div>
        <h4>Invoice</h4>
        <TableContainer>
  <Table variant='simple' maxWidth='100vw' overflow='hidden' >
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Due Date</Th>
        <Th >Bill no</Th>
        <Th >Bill Date</Th>
        <Th >Gross Amount</Th>
        <Th >Gst Amount</Th>
        <Th >Net Amount</Th>
        <Th >Notes</Th>
        <Th >Status</Th>
        <Th >Created at</Th>
        <Th >Updated at</Th>
      </Tr>
    </Thead>
    <Tbody>
     {
         invoices.map((invoice)=>{return(
            <Tr key={invoice.id}>
                 <Td>{invoice.name}</Td>
                 <Td>{invoice.dueDate}</Td>
                 <Td>{invoice.billNo}</Td>
                 <Td>{invoice.billDate}</Td>
                 <Td>{invoice.grossAmount}</Td>
                 <Td>{invoice.gstAmount}</Td>
                 <Td>{invoice.netAmount}</Td>
                 <Td>{invoice.notes}</Td>
                 <Td>{invoice.status}</Td>
                 <Td>{invoice.createdAt}</Td>
                 <Td>{invoice.updatedAt}</Td>
            </Tr>
         )})
     }
    </Tbody>
  </Table>
</TableContainer>
<ButtonGroup gap={4}>
<Button onClick={getInvoices} colorScheme='purple'>Show Invoices</Button>
<Button onClick={()=>{setShowinvoice(false); }} colorScheme='teal'>Home</Button>
</ButtonGroup>

    </div>
  )
}

export default ListInvoice