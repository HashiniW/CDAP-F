import React,{useEffect, useState} from 'react';
import { getPredictedPrice } from '../config/api_calls'
import {Line} from "react-chartjs-2";
import Data1 from './Data1'

const Pricing = () => {
  
  //Create states for vegetables 
  const [date, setDate] = useState('');
  const [commodity_name, setVegetable] = useState('');
  const [centre_1, setCentre1] = useState(0);
  const [centre_2, setCentre2] = useState(0);
  const [centre_3, setCentre3] = useState(0);

  //Create state to store predicted data
  const [chart, setChart] = useState('');

  //Create state
  const [vegetable_name, setVegetableName] = useState('');
  const [centre_1_name, setCentre1Name] = useState('');
  const [centre_2_name, setCentre2Name] = useState('');
  const [centre_3_name, setCentre3Name] = useState('');

  //Create state for predicted data 
  const [prediction, setPrediction] = useState([0,0,0]);

  //Create array for store selected centre values
  let selectedCentre = [centre_1, centre_2, centre_3];

  //Always check updated data of selected vegetble, centre and date
  //Render updated data to graph
  useEffect(()=>{

    //Set data for graph
    setChart({
      labels: [
        centre_1_name, centre_2_name, centre_3_name
      ],
      datasets: [
        {
          label: "Vegetable Price Prediction in Main Centres",
          backgroundColor: [
            // "rgba(255, 99, 132, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 159, 64, 0.2)",

          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          data: [prediction[0], prediction[1], prediction[2]],
          borderWidth: 2,
        }
      ]
    });
  })

  //Setters for selected centre names and selected centres
  const setNameForCentre1 = (val) =>{
    setCentre1(val.target.value);
    var index = val.nativeEvent.target.selectedIndex;
    setCentre1Name(val.nativeEvent.target[index].text)
  }

  const setNameForCentre2 = (val) =>{
    setCentre2(val.target.value);
    var index = val.nativeEvent.target.selectedIndex;
    setCentre2Name(val.nativeEvent.target[index].text)
  }

  const setNameForCentre3 = (val) =>{
    setCentre3(val.target.value);
    var index = val.nativeEvent.target.selectedIndex;
    setCentre3Name(val.nativeEvent.target[index].text)
  }

  const setNameForVegetable = (val) =>{
    setVegetable(val.target.value);
    var index = val.nativeEvent.target.selectedIndex;
    setVegetableName(val.nativeEvent.target[index].text)
  }

  // Get Prediction data for selected centres and the vegetable 
  const predictPrice = (event) =>{
    event.preventDefault();
    
  //Get form data from "event.target"
    console.log(event.target);
    
    //Map all selected categories and get prediction data for each
    selectedCentre.map(async (centre_name,i) =>{
      const results = await getPredictedPrice(centre_name, date, commodity_name);
      prediction[i] = results.predicted_retail_price
  })
  }

  return (
    <div className="container" style={{paddingLeft: 40, paddingTop: 10, paddingRight: 0}}>
      <div className="container card">
        <div className="card-body" style={{padding: 40}}>
        <form onSubmit={(e) => predictPrice(e)}>
          <div class="form-row">
            <div class="col-md-6 mb-12">
              <label for="validationDefault01">Expected Date</label>
              <input type="date" class="form-control" id="validationDefault01" placeholder="Date" 
              onChange={(e) => {setDate(e.target.value)}} 
              min='2015-01-01' max='2015-03-31'
              required/>
            </div>
            <div class="col-md-6 mb-12">
              <label for="validationDefault02">Vegetable</label>
              <select class="form-control form-control-lg" 
                onChange={(e) => {
                  setNameForVegetable(e)
                  }}>
                  <option defaultValue>Select Vegetable</option>
                  <option value={'Tomato'}>Tomato</option>
                  <option value={'Potato'}>Potato</option>
                  <option value={'Onion'}>Onion</option>
                </select>
            </div>
          </div>
          <div class="form-row">
              <div class="col-md-4 mb-12">
                <label for="validationDefault03">Centre - 01</label>
                <select class="form-control form-control-lg" 
                onChange={(e) => {
                  setNameForCentre1(e)
                  }}>
                  <option defaultValue>Select Centre - 01</option>
                  <option value={'Mumbai'}>Mumbai</option>
                  <option value={'Kolkata'}>Kolkata</option>
                  <option value={'Delhi'}>Delhi</option>
                </select>
              </div>
              <div class="col-md-4 mb-12">
                <label for="validationDefault04">Centre - 02</label>
                <select class="form-control form-control-lg"
                onChange={(e) => {
                  setNameForCentre2(e)
                  }}>
                <option defaultValue>Select Centre - 02</option>
                  <option value={'Mumbai'}>Mumbai</option>
                  <option value={'Kolkata'}>Kolkata</option>
                  <option value={'Delhi'}>Delhi</option>
                </select>
              </div>
              <div class="col-md-4 mb-12">
                <label for="validationDefault05">Centre - 03</label>
                <select class="form-control form-control-lg"
                onChange={(e) => {
                  setNameForCentre3(e)
                  }}>
                <option defaultValue>Select Centre - 03</option>
                  <option value={'Mumbai'}>Mumbai</option>
                  <option value={'Kolkata'}>Kolkata</option>
                  <option value={'Delhi'}>Delhi</option>
                </select>
              </div>
          </div>
          <div class="form-row" style={{marginTop: 30}}>
            <div>
              <div class="col-md-12 text-center">
                <p align = 'center'>
              <button className="btn btn-primary btn-block">Get Price Prediction</button>
              </p>
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
      <div className="card" style={{padding: 40}}>
        <Line data={chart} options={{ 
          responsive: true,
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Predicted Retail Price (INR)'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Centre Name'
                }
              }],
            }     
        }}/>
      </div>
      <div className="card" style={{padding: 40}}>
      <h3>All Price Details of Main Centres</h3>
      <Data1 />
      </div>
    </div>
  );
}

export default Pricing;
