import axios from "axios";
import { goalEndPoint, candidateId } from './index'

axios.defaults.baseURL = "https://challenge.crossmint.io/api";

const getData = async (url: string, candidateId: string) => {
  try {
    const response = await axios.get(url);
    const matrix = response.data.goal;

    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix[row].length; column++) {
        // if the value match , make a POST request
        const value: string = matrix[row][column];
        
        switch (value) {
          case "POLYANET":
            await axios
              .post("/polyanets", { row, column, candidateId })
              .then(() => console.log(value))
              .catch((err) => console.log(err));
            break;

          case "RIGHT_COMETH":
            await axios
              .post("/comeths", {
                row,
                column,
                candidateId,
                direction: "right",
              })
              .then(() => console.log(value))
              .catch((err) => console.log(err));
            break;
            
          case "LEFT_COMETH":
            await axios
              .post("/comeths", { row, column, candidateId, direction: "left" })
              .then(() => console.log(value))
              .catch((err) => console.log(err));
            break;
          case "UP_COMETH":
            await axios
              .post("/comeths", { row, column, candidateId, direction: "up" })
              .then(() => console.log(value))
              .catch((err) => console.log(err));
            break;

          case "DOWN_COMETH":
            await axios
              .post("/comeths", { row, column, candidateId, direction: "down" })
              .then(() => console.log(value))
              .catch((err) => console.log(err));
            break;

          case "WHITE_SOLOON":
            await axios
              .post("/soloons", { row, column, candidateId, color: "white" })
              .then(() => console.log(value))
              .catch((err) => console.log(err));
            break;

          case "BLUE_SOLOON":
            await axios
              .post("/soloons", { row, column, candidateId, color: "blue" })
              .then(() => console.log(value))
              .catch((err) => console.log(err));
            break;

          case "RED_SOLOON":
            await axios
              .post("/soloons", { row, column, candidateId, color: "red" })
              .then(() => console.log(value))
              .catch((err) => console.log(err));
            break;

          case "PURPLE_SOLOON":
            await axios
              .post("/soloons", { row, column, candidateId, color: "purple" })
              .then(() => console.log(value))
              .catch((err) => console.log(err));
            break;

          default:
            console.log("empty space");
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};

getData(goalEndPoint, candidateId);
