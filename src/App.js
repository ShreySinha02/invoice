import { useState } from "react";
import "./App.css";
import ListInvoice from "./components/ListInvoice";
import AddInvoice from "./components/AddInvoice";
import Home from "./components/Home";
function App() {
  // const [isSubmit,setisSubmit]= useState(true);
  const [addInvoice,setAddInvoice]=useState(false)
  const [showinvoice,setShowinvoice]=useState(false);
  const [invoices, setInvoices] = useState([]);
  const [form,setForm] =useState({
    name: "",
    dueDate: "",
    grossAmount: "",
    billNo: "",
    billDate: "",
    lineItem: [],
    gstAmount: "",
    netAmount: "",
    notes: "",
    status: "",
  })
  function getInvoices() {
    fetch("https://rscdev.taxadda.com/api/invoice/list")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        const array = data.invoices;
        // console.log(array[1].name)
        setInvoices(array);
      });
  }
  //  if(invoices) console.log(invoices)

  return (
    <div className="App">
      {
        !showinvoice && !addInvoice && (<Home setShowinvoice={setShowinvoice} setAddInvoice={setAddInvoice} />)
      }
      {
        addInvoice && !showinvoice && (<AddInvoice setAddInvoice={setAddInvoice} setShowinvoice={setShowinvoice} form={form} setForm={setForm}/>)
      }
      {
        showinvoice && (<ListInvoice   setShowinvoice={setShowinvoice} invoices={invoices}getInvoices={getInvoices}/>)
      }
      
    </div>
  );
}

export default App;
