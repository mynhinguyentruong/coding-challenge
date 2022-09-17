import axios from "axios";
import { goalEndPoint, candidateId } from './index'

axios.defaults.baseURL = "https://challenge.crossmint.io/api";

const getData = async (url: string, candidateId: string) => {
  try {
    const response = await axios.get(url);
    console.log(response.data.goal);
    const matrix = response.data.goal;
    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix[row].length; column++) {
        // if the value match , make a POST request
        if (matrix[row][column] === "POLYANET") {
          await axios
            .post('/polyanets', {row, column, candidateId})
            .then(() => console.log('successful'))
            .catch(err => console.log(err))
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};

getData(goalEndPoint, candidateId);


// delete option 
// await axios
//   .delete("/polyanets", { data: {
//     row,
//     column,
//     candidateId,
//   }})