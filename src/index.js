import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { Provider } from './context/context';
import {SpeechProvider} from'@speechly/react-client'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <SpeechProvider appId='366a6888-4fb2-44ea-b84a-695e1b51a149'language='en-US'>
    <Provider>
    <App />
    </Provider>
    </SpeechProvider>
  </React.StrictMode>
);
