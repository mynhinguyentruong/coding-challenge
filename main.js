import axios from "axios";

axios.defaults.baseURL = "https://challenge.crossmint.io/api";

const goalEndPoint = "map/54d4b7e9-642f-41aa-93fc-e705f35fa40e/goal";
const candidateId = "54d4b7e9-642f-41aa-93fc-e705f35fa40e";

const getData = async (url, candidateId) => {
  try {
    const response = await axios.get(url);
    // console.log(response.data.goal);
    const matrix = response.data.goal;
    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix[row].length; column++) {
        // if the value match , make a POST request
          const value = matrix[row][column];
          switch(value) {
            case 'POLYANET':
              console.log('POLYANET');
              await axios.post('/polyanets', { row, column, candidateId }).then(() => console.log(value)).catch(err => console.log(err));
              break;
            case 'RIGHT_COMETH':
              console.log('RIGHT_COMETH');
              await axios.post('/comeths', { row, column, candidateId, direction: "right" } ).then(() => console.log(value)).catch(err => console.log(err));
              break;
            case 'LEFT_COMETH':
              console.log('LEFT_COMETH');
              await axios.post('/comeths', { row, column, candidateId, direction: "left" } ).then(() => console.log(value)).catch(err => console.log(err));
              break;
            case 'UP_COMETH':
              await axios.post('/comeths', { row, column, candidateId, direction: "up" } ).then(() => console.log(value)).catch(err => console.log(err));
              break;

            case 'DOWN_COMETH':
              await axios.post('/comeths', { row, column, candidateId, direction: "down" } ).then(() => console.log(value)).catch(err => console.log(err));
              break;

            case 'WHITE_SOLOON':
              await axios.post('/soloons', { row, column, candidateId, color: 'white'}).then(() => console.log(value)).catch(err => console.log(err));
              break;

            case 'BLUE_SOLOON':
              await axios.post('/soloons', { row, column, candidateId, color: 'blue'}).then(() => console.log(value)).catch(err => console.log(err));
              break;

            case 'RED_SOLOON':
              await axios.post('/soloons', { row, column, candidateId, color: 'red'}).then(() => console.log(value)).catch(err => console.log(err));
              break;

            case 'PURPLE_SOLOON':
              await axios.post('/soloons', { row, column, candidateId, color: 'purple'}).then(() => console.log(value)).catch(err => console.log(err));
              break;

            default:
              console.log('empty space');
          }
      }
    }
  } catch (err) {
    console.log(err);
  }
};

getData(goalEndPoint, candidateId);
