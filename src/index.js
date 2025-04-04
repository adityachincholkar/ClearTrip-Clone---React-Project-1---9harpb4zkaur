import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./components/context/AuthorisationContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<AuthContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</AuthContextProvider>
);
