import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <App></App>
)
//react element 
// const reactElement = <div>Hello</div>;

// //react Function  component -> js function which returns JSX;
// const ReactComponent = (props) => {
//   return (
//     <div>Hii {props.name}</div>
//   )
// }
