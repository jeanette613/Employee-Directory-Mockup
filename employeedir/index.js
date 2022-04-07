import { StrictMode } from "react";
import { ReactDOM } from "react";
import "./style.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>,
    document.getElementById("root")
)