import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
	<GoogleOAuthProvider clientId="933787723337-hm9ukvd5fljkl88i0a6prnjtn7bpqau5.apps.googleusercontent.com">
 
	<BrowserRouter basename="/weather-forecast">
    <App />
	 </BrowserRouter>
  
  </GoogleOAuthProvider>
  </React.StrictMode>
);
