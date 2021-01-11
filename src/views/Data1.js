import React, { useState, useEffect } from "react";
import {
  CDataTable,
  CCollapse,
} from "@coreui/react";
import StarRatings from 'react-star-ratings';

//import all backend api calls
import {getData} from '../config/api_calls'
//load css elements
import '../App.css'

const Data1 = () => {

  //Create app states
  const [stores, setStores] = useState([])


  //load initial data 
  useEffect(() =>{
    //load procesed farmer data to frontend
    getData().then(result =>{
      //set data to the state
      setStores(result); 
    })
  }, []);

 
  //Define table feilds
  const fields = [
    { key: 'date', _style: { width: '10%'} },
    'commodity_name',
    'centre_name',
    { key: 'price', _style: { width: '20%'} }
  ]

  const [modal, setModal] = useState(false);
  const toggle = ()=>{
    setModal(!modal);
  }

  return (
    <div style={{padding: 50, background: '#fff'}}>
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

export default Data1;
