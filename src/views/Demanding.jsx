import React,{useEffect, useState} from 'react';
import ChartistGraph from 'react-chartist';
import { getDemand } from '../config/api_calls'
import { Bar } from "react-chartjs-2";
import Store1 from './Store1'
import Store2 from './Store2'
import Store3 from './Store3'

const Demanding = () => {
  
  //Create states for categories 
  const [cat1, setCat1] = useState(0);
  const [cat2, setCat2] = useState(0);
  const [cat3, setCat3] = useState(0);
  const [date, setDate] = useState('');

  //Create state for store prediction data
  const [data2, setData2] = useState('');

  //Create state to store 
  const [cat1Name, setCat1Name] = useState('');
  const [cat2Name, setCat2Name] = useState('');
  const [cat3Name, setCat3Name] = useState('');

  //Create state for prediction data 
  const [pred, setPred] = useState([0,0,0]);

  //Create array for store selected category values
  let selected =[cat1, cat2, cat3];

  //Always check updated data of selected categories and date
  //Render updated data to graph
  useEffect(()=>{
    //Set data for graph
    setData2({
      labels: [
        cat1Name, cat2Name, cat3Name
      ],
      datasets: [
        {
          label: "Vegitable Demand",
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 159, 64, 0.2)",

          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          data: [pred[0], pred[1], pred[2]],
          borderWidth: 2
        }
      ]
    });
  })

  //Setters for se category names and selected categories
  const setCategory1 = (val) =>{
    setCat1(val.target.value);
    var index = val.nativeEvent.target.selectedIndex;
    setCat1Name(val.nativeEvent.target[index].text)
  }

  const setCategory2 = (val) =>{
    setCat2(val.target.value);
    var index = val.nativeEvent.target.selectedIndex;
    setCat2Name(val.nativeEvent.target[index].text)
  }

  const setCategory3 = (val) =>{
    setCat3(val.target.value);
    var index = val.nativeEvent.target.selectedIndex;
    setCat3Name(val.nativeEvent.target[index].text)
  }

  //Get Prediction data for selected categories 
  const predictDemand = () =>{
    //Map all selected categories and get prediction data for each
    selected.map((item,i) =>{
      getDemand(date, item).then(result =>{
        //Store data on prediction data array
        pred[i] = result.pred_avg_sale
      })
    })
  }

  return (
    <div className="container" style={{paddingLeft: 40, paddingTop: 10, paddingRight: 0}}>
      <div className="container card">
        <div className="card-body" style={{padding: 40}}>
        <form onSubmit={(e) => e.preventDefault() && false}>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationDefault01">Categoty 01</label>
              <select class="form-control form-control-lg" 
              onChange={(e) => {
                setCategory1(e)
                }}>
                <option defaultValue>Select Categoty 01</option>
                <option value={1}>Carrot</option>
                <option value={2}>Potato</option>
                <option value={3}>Tomato</option>
              </select>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationDefault02">Categoty 02</label>
              <select class="form-control form-control-lg"
              onChange={(e) => {
                setCategory2(e)
                }}>
              <option defaultValue>Select Categoty 01</option>
                <option value={1}>Carrot</option>
                <option value={2}>Potato</option>
                <option value={3}>Tomato</option>
              </select>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationDefault02">Categoty 03</label>
              <select class="form-control form-control-lg"
              onChange={(e) => {
                setCategory3(e)
                }}
              >
              <option defaultValue>Select Categoty 01</option>
                <option value={1}>Carrot</option>
                <option value={2}>Potato</option>
                <option value={3}>Tomato</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div>
              <label for="validationDefault03">Expected Date</label>
              <input type="date" class="form-control" id="validationDefault03" placeholder="City" 
              onChange={(e) => {setDate(e.target.value)}} 
              min='2018-01-01' max='2018-03-31'
              required/>
            </div>
          </div>
          <div class="form-row" style={{marginTop: 30}}>
            <div>
              <button className="btn btn-primary btn-block" onClick={predictDemand}>Predict Demand Of Selected Categories</button>
            </div>
          </div>
        </form>
        </div>
      </div>

      <div className="card" style={{padding: 40}}>
      <Bar
        options={{
          responsive: true
        }}
        data={data2}
      />
      </div>

      <div className="card" style={{padding: 40}}>
      <h3>Sales Details - Wattala Store</h3>
      <Store1 />
      </div>
        
      <div className="card" style={{padding: 40}}>
      <h3>Sales Details - Nuwara Eliya Store</h3>
      <Store2 />
      </div>

      <div className="card" style={{padding: 40}}>
      <h3>Sales Details - Jaffna Store</h3>
      <Store3 />
      </div>
    </div>
  );
}

export default Demanding;
