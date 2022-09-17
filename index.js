import axios from "axios";

axios.defaults.baseURL = "https://challenge.crossmint.io/api";

const goalEndPoint = "map/54d4b7e9-642f-41aa-93fc-e705f35fa40e/goal";
const candidateId = "54d4b7e9-642f-41aa-93fc-e705f35fa40e";

const getData = async (url, candidateId) => {
  try {
    const response = await axios.get(url);
    console.log(response.data.goal);
    const matrix = response.data.goal;
    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix[row].length; column++) {
        // if the value match , make a POST request
        if (matrix[row][column] === "POLYANET") {
 
          // await axios
          //   .delete("/polyanets", { data: {
          //     row,
          //     column,
          //     candidateId,
          //   }})
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
