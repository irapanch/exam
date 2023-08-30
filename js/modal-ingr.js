
import axios from 'axios'; 
const divs = document.querySelector('.modal2');
console.log(divs);

let dataIngredient = [];
const BASE_URL = 'https://drinkify-backend.p.goit.global/api/v1/cocktails/';
export async function getElement(name) {


  try {
    const response = await axios.get(`${BASE_URL}?r=${name}`); // об'єкт, що містить результати запиту
    return response.data; // виводимо результати запиту
  } catch (error) {
    console.log('error', error);
  }
}
getElement()