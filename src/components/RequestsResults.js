import React from 'react';
// import axios from 'axios';

// const ingrForRequests = [
//   { ingr: 'tomato', price: '2', serving: 200 },
//   { ingr: 'chorizo', price: '3', serving: 50 },
//   { ingr: 'emmental', price: '4', serving: 100 },
//   { ingr: 'onion', price: '1', serving: 200 },
//   { ingr: 'olive', price: '2', serving: 200 },
//   { ingr: 'peppers', price: '2', serving: 200 },
//   { ingr: 'mushroom', price: '2', serving: 200 },
//   { ingr: 'ham', price: '2', serving: 200 },
//   { ingr: 'anchovies', price: '2', serving: 200 },
//   { ingr: 'mozzarella', price: '2', serving: 200 },
//   { ingr: 'pineapple', price: '2', serving: 200 },
//   { ingr: 'pizza%20dough', price: '2', serving: 200 },
//   { ingr: 'tomato%20sauce', price: '2', serving: 200 },
//   { ingr: 'arugula', price: '2', serving: 200 },
// ];

// const valuesConstruction = (array) => {
//   array.forEach((ingredient) => {
//     // console.log(ingredient);
//     axios
//       .get(
//         `https://api.edamam.com/api/food-database/v2/parser?app_id=cb0e9cff&app_key=9c4aa6b62257c975bbc78df7ddb04af6&category=generic-foods&ingr=${ingredient.ingr}`
//       )
//       .then((response) => response.data)
//       .then((data) => {
//         console.log(data);
//         console.log(data.parsed[0].food.nutrients.ENERC_KCAL);
//       });
//   });
// };

// valuesConstruction(ingrForRequests);

function RequestsResults() {
  return (
    <div className="App">
      {/* <ul>
        {ingredients.map((item) => (
          <li key={item.ingredient}>
            {item.Kcal100} ({item.serving})
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default RequestsResults;
