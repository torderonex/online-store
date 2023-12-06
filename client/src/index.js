import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import SpeechProvier from './components/speech-provide/SpeechProvider';
import Store from "./store/store"

const store = new Store();

export const Context = createContext({
  store,
 });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{store}}>
    <React.StrictMode>
        <BrowserRouter>
        <SpeechProvier>
          <App/>
          </SpeechProvier>
        </BrowserRouter>
    </React.StrictMode>
  </Context.Provider>
    
  
);