import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// const calResult = useMemo(() => {
//   const price = Number(values.price)
//   const year = Number(values.year)
//   const rate = Number(values.rate)
//   if (price <= 0) return 0
//   if (year <= 0) return price
//   if (rate <= 0) return price
//   const result = ((((rate / 100) * price) + price) / year) / 12
//   return result.toFixed(2)
// }, [values])