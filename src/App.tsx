import React, { FC, useState } from "react";
import "./style.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from './components/PrivatRoute/PrivatRoute';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";

const App: FC = () => {

const [isLoggedIn, setIsLoggedIn]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(true);


  return (<>
	<Routes>
	  <Route
		 index
		 element={
			<RestrictedRoute isLoggedIn={isLoggedIn} redirectTo="/trips" component={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
		 }
	  />
	  <Route
		 path="/trips"
		 element={
			<PrivateRoute isLoggedIn={isLoggedIn} redirectTo="/" component={<HomePage />} />
		 }
	  />
	<Route path="*" element={<NotFound />} />
 </Routes>
</>);}

export default App;
