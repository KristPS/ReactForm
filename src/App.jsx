import SignUpForm from "./Components/SignUpForm.jsx"; 
import Authenticate  from './Components/Authenticate.jsx';
import './App.css';
import {useState} from 'react';

export default function App() {
  const [token, setToken] = useState(null);
  
  return (
    <>
     <Authenticate token={token}/>
     <SignUpForm setToken={setToken} />

    </>
  );
}

