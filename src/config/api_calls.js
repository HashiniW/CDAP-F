//Backend base url
import { BASE_URL } from "./config";

//Get Price Prediction data
  export const getPredictedPrice = async (centreName, pDate, vegetable) => {
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

  export const getData = async () => {
    try {
      let vegetable = await fetch(`${BASE_URL}/data`);
      let result = await vegetable.json();
      return result;
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