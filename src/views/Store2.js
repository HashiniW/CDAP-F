import React, { useState, useEffect } from "react";
import {
  CDataTable,
  CCollapse,
} from "@coreui/react";
import StarRatings from 'react-star-ratings';

//import all backend api calls
import {getStore2} from '../config/api_calls'
//load css elements
import '../App.css'

const Store2 = () => {

  //Create app states
  const [details, setDetails] = useState([])
  const [stores, setStores] = useState([])


  //load initial data 
  useEffect(() =>{
    //load procesed farmer data to frontend
    getStore2().then(result =>{
      //set data to the state
      setStores(result); 
    })
  }, []);

 
  //Define table feilds
  const fields = [
    { key: 'date', _style: { width: '10%'} },
    'item',
    'store',
    { key: 'sales', _style: { width: '20%'} }
  ]

  const [modal, setModal] = useState(false);
  const toggle = ()=>{
    setModal(!modal);
  }

  return (
    <div style={{padding: 50, background: '#fff'}}>
      {/* refresh button */}
      <a className="btn btn-outline-dark" href="/admin/Demanding" style={{marginBottom: 10}}>Refresh Data</a>
      {/* load table */}
    <CDataTable
      items={stores}
      fields={fields}
      tableFilter
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      pagination
      sorter
    />
    </div>
  )
}

export default Store2;
