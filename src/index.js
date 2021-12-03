//router for nav bar pair with mainheader.js, and app.js

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
	  document.getElementById('root')
);