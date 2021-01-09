//Backend base url
import { BASE_URL } from "./config";

//Get Price Prediction data
  export const getPredictedPrice = async (pDate, centreName, vegetable) => {
    try {
      let price_prediction = await fetch(
        `${BASE_URL}/vegetable`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            centre: centreName,
            date: pDate,
            commodity: vegetable
          })
        }
      );
      let result = await price_prediction.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  //Get Price Prediction data
  export const getTodayPredictedPrice_Tomato_Delhi = async () => {
    try {
      let price_prediction = await fetch(
        `${BASE_URL}/vegetable`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            centre: 'DELHI',
            date: '2015-03-31',
            commodity: 'Tomato'
          })
        }
      );
      let result = await price_prediction.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  //Get Price Prediction data
  export const getTodayPredictedPrice_Potato_Delhi = async () => {
    try {
      let price_prediction = await fetch(
        `${BASE_URL}/vegetable`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            centre: 'DELHI',
            date: '2015-03-31',
            commodity: 'Potato'
          })
        }
      );
      let result = await price_prediction.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  //Get Price Prediction data
  export const getTodayPredictedPrice_Onion_Delhi = async () => {
    try {
      let price_prediction = await fetch(
        `${BASE_URL}/vegetable`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            centre: 'DELHI',
            date: '2015-03-31',
            commodity: 'Onion'
          })
        }
      );
      let result = await price_prediction.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  //Get Price Prediction data
  export const getTodayPredictedPrice_Cabbage_Delhi = async () => {
    try {
      let price_prediction = await fetch(
        `${BASE_URL}/vegetable`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            centre: 'DELHI',
            date: '2015-03-31',
            commodity: 'Cabbage'
          })
        }
      );
      let result = await price_prediction.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

//Get Price Prediction data
export const getTodayPredictedPrice_Brinjal_Delhi = async () => {
  try {
    let price_prediction = await fetch(
      `${BASE_URL}/vegetable`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          centre: 'DELHI',
          date: '2015-03-31',
          commodity: 'Brinjal'
        })
      }
    );
    let result = await price_prediction.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

  //Get Price Prediction data
  export const getTodayPredictedPrice_Tomato_Mumbai = async () => {
    try {
      let price_prediction = await fetch(
        `${BASE_URL}/vegetable`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            centre: 'MUMBAI',
            date: '2015-03-31',
            commodity: 'Tomato'
          })
        }
      );
      let result = await price_prediction.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  //Get Price Prediction data
  export const getTodayPredictedPrice_Potato_Mumbai = async () => {
    try {
      let price_prediction = await fetch(
        `${BASE_URL}/vegetable`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            centre: 'MUMBAI',
            date: '2015-03-31',
            commodity: 'Potato'
          })
        }
      );
      let result = await price_prediction.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  //Get Price Prediction data
  export const getTodayPredictedPrice_Onion_Mumbai = async () => {
    try {
      let price_prediction = await fetch(
        `${BASE_URL}/vegetable`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            centre: 'MUMBAI',
            date: '2015-03-31',
            commodity: 'Onion'
          })
        }
      );
      let result = await price_prediction.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  //Get Price Prediction data
  export const getTodayPredictedPrice_Cabbage_Mumbai = async () => {
    try {
      let price_prediction = await fetch(
        `${BASE_URL}/vegetable`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            centre: 'MUMBAI',
            date: '2015-03-31',
            commodity: 'Cabbage'
          })
        }
      );
      let result = await price_prediction.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

//Get Price Prediction data
export const getTodayPredictedPrice_Brinjal_Mumbai = async () => {
  try {
    let price_prediction = await fetch(
      `${BASE_URL}/vegetable`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          centre: 'MUMBAI',
          date: '2015-03-31',
          commodity: 'Brinjal'
        })
      }
    );
    let result = await price_prediction.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

  //Get Price Prediction data
  export const getTodayPredictedPrice_Tomato_Kolkata = async () => {
    try {
      let price_prediction = await fetch(
        `${BASE_URL}/vegetable`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            centre: 'KOLKATA',
            date: '2015-03-31',
            commodity: 'Tomato'
          })
        }
      );
      let result = await price_prediction.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  //Get Price Prediction data
  export const getTodayPredictedPrice_Potato_Kolkata = async () => {
    try {
      let price_prediction = await fetch(
        `${BASE_URL}/vegetable`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            centre: 'KOLKATA',
            date: '2015-03-31',
            commodity: 'Potato'
          })
        }
      );
      let result = await price_prediction.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  //Get Price Prediction data
  export const getTodayPredictedPrice_Onion_Kolkata = async () => {
    try {
      let price_prediction = await fetch(
        `${BASE_URL}/vegetable`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            centre: 'KOLKATA',
            date: '2015-03-31',
            commodity: 'Onion'
          })
        }
      );
      let result = await price_prediction.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  //Get Price Prediction data
  export const getTodayPredictedPrice_Cabbage_Kolkata = async () => {
    try {
      let price_prediction = await fetch(
        `${BASE_URL}/vegetable`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            centre: 'KOLKATA',
            date: '2015-03-31',
            commodity: 'Cabbage'
          })
        }
      );
      let result = await price_prediction.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

//Get Price Prediction data
export const getTodayPredictedPrice_Brinjal_Kolkata = async () => {
  try {
    let price_prediction = await fetch(
      `${BASE_URL}/vegetable`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          centre: 'KOLKATA',
          date: '2015-03-31',
          commodity: 'Brinjal'
        })
      }
    );
    let result = await price_prediction.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

  export const tomato = async () => {
    try {
      let vegetable = await fetch(`${BASE_URL}/tomato`);
      let result = await vegetable.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  export const potato = async () => {
    try {
      let vegetable = await fetch(`${BASE_URL}/potato`);
      let result = await vegetable.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  export const onion = async () => {
    try {
      let vegetable = await fetch(`${BASE_URL}/onion`);
      let result = await vegetable.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  export const cabbage = async () => {
    try {
      let vegetable = await fetch(`${BASE_URL}/cabbage`);
      let result = await vegetable.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  export const brinjal = async () => {
    try {
      let vegetable = await fetch(`${BASE_URL}/brinjal`);
      let result = await vegetable.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

//get proccessed data from database
export const getFarmers = async () => {
    try {
      let farmer = await fetch(`${BASE_URL}`);
      let result = await farmer.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  //get farmers personal data from database
  export const getFarmersDetails = async () => {
    try {
      let farmer = await fetch(`${BASE_URL}/farmers`);
      let rerult = await farmer.json();
      return rerult;
    } catch (error) {
      console.log(error);
    }
  };

  //update ranking information
  export const updateScore = async (id,  score) => {
    try {
      let scores = await fetch(
        `${BASE_URL}/updateScore/${id}/${score}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        }
      );
      let rerult = await scores;
      return rerult;
    } catch (error) {
      console.log(error);
    }
  };

  //Get Demand Prediction data
  export const getDemand = async (date,  cat) => {
    try {
      let scores = await fetch(
        `${BASE_URL}/user`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            test1: cat,
            test2: date
          })
        }
      );
      let rerult = await scores.json();
      return rerult;
    } catch (error) {
      console.log(error);
    }
  };

  export const getStore1 = async () => {
    try {
      let farmer = await fetch(`${BASE_URL}/store1`);
      let rerult = await farmer.json();
      return rerult;
    } catch (error) {
      console.log(error);
    }
  };

  export const getStore2 = async () => {
    try {
      let farmer = await fetch(`${BASE_URL}/store2`);
      let rerult = await farmer.json();
      return rerult;
    } catch (error) {
      console.log(error);
    }
  };

  export const getStore3 = async () => {
    try {
      let farmer = await fetch(`${BASE_URL}/store3`);
      let rerult = await farmer.json();
      return rerult;
    } catch (error) {
      console.log(error);
    }
  };