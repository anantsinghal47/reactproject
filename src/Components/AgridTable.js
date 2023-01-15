import React, { useState, useEffect} from 'react';
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { Button } from 'semantic-ui-react';


export default function AgridTable() {

    
    

    const [rowData, setRowData] = useState([
        
            { "make": "TCS", "model": "ABC", "price": 72000 },
            { "make": "Tata", "model": "EFG", "price": 32000 },
            { "make": "Titan", "model": "RGH", "price": 32000 },
    
    ]);

    const [columnDefs, setColumnDefs] = useState([
        {field: 'make', filter: true , sortable:'true'},
        {field: 'model', filter: true , sortable:'true'},
        {field: 'price'}
      ])

      
      const [updateData , updateFunc] = useState(0);
       useEffect(() => {
        console.log("use effect")
        fetch('https://www.ag-grid.com/example-assets/row-data.json').
        then(result =>result.json()).then(updateData =>updateFunc(updateData));
        //.then(rowData => setRowData(rowData))

      }, []);

      console.log(updateData);
  

  return (
    <div className='ag-theme-alpine' style={{width :500 , height:500 , marginTop:60 , marginLeft:100 , colum}}>
        
        
     <Button onClick={() => {setRowData(0)}} id="ResetButton" color='red' content="reset Data" ></Button>   
     <Button onClick={() => {setRowData(updateData)}}  id ="loadButton" color='facebook' content="Load Data" ></Button>   
     <Button onClick={() => {setRowData(updateData)}}  id ="loadButton" color='yellow' content="Load Data"></Button>   
     <Button onClick={() => {setRowData(updateData)}}  id ="loadButton" color='orange' content="Load Data"></Button>   


      <AgGridReact
      rowData={rowData}
      columnDefs={columnDefs}>

      </AgGridReact>

      <AgGridReact
      rowData={rowData}
      columnDefs={columnDefs}>

      </AgGridReact>
      
    </div>
  )
}
