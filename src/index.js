import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';

// function Test(){
//   const [test , setTest] = useState(0)
//   return(
//     <div>
//       <StarRating color='aqua'  onSetRating={setTest} />
//       <p>Rating:{test}</p>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);