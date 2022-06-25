import React, { useState } from "react";
import "./AddInvoice.css";
// import { data } from "../data/data";
import {
  Input,
  FormLabel,
  Grid,
  GridItem,
  InputGroup,
  InputLeftElement,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
function AddInvoice({setAddInvoice,setShowinvoice,form,setForm}) {

  const [lineItems,setLinenItem]=useState({
    productName: "",
        quantity: "5",
        price: "",
        amount: "",
        gstRate: "10",
  })
  const handleChanges=(e)=>{
    // console.log(e.target)
    const {name,value} = e.target;
    setForm({...form , [name]:value})
    setLinenItem({...lineItems,[name]:value})
    // console.log(lineItems)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    
    form.lineItem[0]=lineItems
    addInvoice()
    // console.log(form)

  }

  const addInvoice = () =>
    fetch("https://rscdev.taxadda.com/api/invoice/add", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        // alert(data.message)
        if(data.message)
        {
          alert(data.message)
        //   <Alert status='error'>
        //   <AlertIcon />
        //   There was an error processing your request
        // </Alert>
        }
        else{
          alert(data.invoice)
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });


  return (
    <div className="add">
      <h4>AddInvoice</h4>
      <form  Style="margin:10px">
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem>
            <FormLabel>Name</FormLabel>
            <Input name="name" value={form.name} onChange={handleChanges} placeholder="Name" ></Input>
          </GridItem>
          <GridItem>
            <FormLabel>DueDate</FormLabel>
            <Input name="dueDate" value={form.dueDate} onChange={handleChanges} type="date" ></Input>
          </GridItem>
          <GridItem>
            <FormLabel>Gross Amount</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="Rs"
              />
              <Input name="grossAmount" value={form.grossAmount} onChange={handleChanges} placeholder="Enter amount" />
            </InputGroup>
          </GridItem>
          <GridItem>
            <FormLabel>Bill no</FormLabel>
            <Input name="billNo" value={form.billNo} onChange={handleChanges} type="number"></Input>
          </GridItem>
          <GridItem>
            <FormLabel>BillDate</FormLabel>
            <Input name="billDate" value={form.billDate} onChange={handleChanges} type="date"></Input>
          </GridItem>
    
          <GridItem>
            <FormLabel>Gst Amount</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="Rs"
              />
              <Input name="gstAmount" value={form.gstAmount} onChange={handleChanges} placeholder="Enter amount" />
            </InputGroup>
          </GridItem>
          <GridItem>
            <FormLabel>Net Amount</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="$"
              />
              <Input name="netAmount" value={form.netAmount} onChange={handleChanges} placeholder="Enter amount" />
            </InputGroup>
          </GridItem>
          <GridItem>
            <FormLabel>Notes</FormLabel>
            <Input name="notes" value={form.notes} onChange={handleChanges} type="text"></Input>
          </GridItem>
          <GridItem>
            <FormLabel>Status</FormLabel>
            <RadioGroup>
              <Stack direction="row">
                <Radio name="status" onChange={handleChanges} value="paid">Paid</Radio>
                <Radio name="status" onChange={handleChanges} value="outstanding">Outstanding</Radio>
                <Radio name="status" onChange={handleChanges} value="late">Late</Radio>
                <Radio name="status" onChange={handleChanges} value="due">Due</Radio>
              </Stack>
            </RadioGroup>
          </GridItem>
        </Grid>
        <br></br>
        <h4>LineItem</h4>
        <Grid>
          <GridItem>
            <FormLabel>Product Name</FormLabel>
            <Input name="productName" value={lineItems.productName} onChange={handleChanges}type="text"></Input>
          </GridItem>
          <GridItem>
            <FormLabel>Quantity</FormLabel>
            <NumberInput defaultValue={0} min={0} max={20}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </GridItem>
          <GridItem>
            <FormLabel>Price</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="Rs"
              />
              <Input name="price" value={lineItems.price} onChange={handleChanges} placeholder="Enter amount" />
            </InputGroup>
          </GridItem>
          <GridItem>
            <FormLabel>Amount</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="Rs"
              />
              <Input name="amount" value={lineItems.amount} onChange={handleChanges} placeholder="Enter amount" />
            </InputGroup>
          </GridItem>
          <GridItem>
            <FormLabel>Gst rate</FormLabel>
            <NumberInput>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </GridItem>
        </Grid>
        <Button onClick={handleSubmit} mt={5}> Submit</Button>
      </form>
      <ButtonGroup>
      <Button  colorScheme='facebook' onClick={()=>{setAddInvoice(false); }}>Home</Button>
      </ButtonGroup>
    </div>
  );
}

export default AddInvoice;
