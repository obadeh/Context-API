import { useState } from 'react';
// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

// const useFetch = (callback) => {
//   const [todoList,setTodoList] = useState([]);

//   const callAPI = (url, method = 'get', body, handler, errorHandler) => {
//     return fetch(url, {
//       method: method,
//       mode: 'cors',
//       cache: 'no-cache',
//       headers: { 'Content-Type': 'application/json' },
//       body: body ? JSON.stringify(body) : undefined,
//     })
//       .then(response => response.json())
//       .then(data => typeof handler === 'function' ? handler(data) : null )
//       .catch( (e) => typeof errorHandler === 'function' ? errorHandler(e) : console.error(e)  );
//   };



// };

// export default useFetch;