//import all essential react libraries 
import React, { useState, useEffect } from "react";
import {
  CDataTable,
  CCollapse,
} from "@coreui/react";
import StarRatings from 'react-star-ratings';

//import all backend api calls
import {getFarmers, getFarmersDetails, updateScore, getFarmersSorted} from '../config/api_calls'
//load css elements
import '../App.css'

const SupplierSelect = () => {

  //Create app states
  const [details, setDetails] = useState([])
  const [farmers, setFarmers] = useState([])
  const [sfarmers, setSfarmers] = useState([])
  const [fdetails, setFdetails] = useState([])
  const [fscores, setFScores] = useState([])

  //load initial data 
  useEffect(() =>{
    //load procesed farmer data to frontend
    getFarmers().then(result =>{
      //set data to the state
      setFarmers(result); 
    })
    //load farmers personal data
    getFarmersDetails().then(result =>{
      //set data to the state
      setFdetails(result);  
    })
  }, []);

  //get updated rating data
  function changeRating( newRating, name ) {
    //loop farmer data to find correct records
    farmers.map(item =>{
      //match records
      if(item.index === name){
        //update new rating score in frontend
        item.score = newRating;
        //update new rating score in backend
        updateScore(item.index, newRating).then(res =>{
          console.log(res);
        });
      }   
    })
  }

  //operations for show and hide farmer details
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }
  
  
  //Define table feilds
  const fields = [
    { key: 'index', _style: { width: '10%'} },
    'supply',
    { key: 'score', _style: { width: '20%'} },
    { key: 'demand', _style: { width: '20%'} },
    { key: 'rating', _style: { width: '30%'} },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]

  //Reduce long decimal values into few decimal points
  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  const [modal, setModal] = useState(false);
  const toggle = ()=>{
    setModal(!modal);
  }

  return (
    <div style={{padding: 50, background: '#fff'}}>
      {/* refresh button */}
      <a className="btn btn-outline-dark" href="/admin/supplierSelect" style={{marginBottom: 10}}>Refresh Data</a>
      {/* load table */}
    <CDataTable
      items={farmers}
      fields={fields}
      tableFilter
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      pagination
      onRowClick={() => toggle()}
      scopedSlots = {{
        'rating':
        (item, index) =>(
          <td>
          <StarRatings
          rating={round(farmers[index].score, 4)}
          starRatedColor="orange"
          changeRating={changeRating}
          numberOfStars={10}
          name={item.index}
          starDimension= '20px'
        />
          </td>
        ),
        'show_details':
          (item, index)=>{
            return (
              <td className="py-2">
                <button className="btn btn-outline-success" style={{margin: 3}}
                  onClick={()=>{toggleDetails(index)}}
                >
                  {details.includes(index) ? 'Hide' : 'Show Farmer Details'}
                </button>
                
              </td>
              )
          },
        'details':
            (item, index)=>{
              return (
                <CCollapse show={details.includes(index)}>
                <div className="card" style={{margin: 20, borderRadius: 15, padding:10, width: 600}}>
                      {fdetails.map(data => {
                        if(data.index === item.index){
                          return(
                            <div className="card-horizontal">
                            <div className="img-square-wrapper" style={{padding: 15}}>
                            <img className="" src={data.image} alt="Card image cap" width={200} height={120} style={{borderRadius: 10}}/>
                            </div>
                            <div className="card-body" style={{padding: 15}}>
                            <h3 className="card-title">{data.name}</h3>
                            <p className="card-text">{data.address}</p>
                            <p className="card-text">{data.nic}</p>
                            <div className="container row" style={{}}>    
                            <div style={{ marginLeft: 30}}>
                            </div>
                            </div>
                            </div>
                            </div>
                          )
                        }
                      })}   
                    </div>
                    </CCollapse>
            )
          }
      }}
    />
    </div>
  )
}

export default SupplierSelect;
