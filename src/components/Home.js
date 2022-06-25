import {Heading, Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'
import './Home.css'
function Home({setShowinvoice,setAddInvoice}) {
  return (
    <div className='home'>
         <Heading className='head' colorScheme='messenger' as='h3' size='lg'>
   Enjoy Invoicing 
  </Heading>
        <ButtonGroup className='bttn' gap={5}>
        <Button onClick={()=>{setShowinvoice(true)}} colorScheme='gray'>Show Invoice</Button>
        <Button onClick={()=>{setAddInvoice(true)} } colorScheme='gray'>Add Invoice</Button>
        </ButtonGroup>
       
    </div>
  )
}

export default Home