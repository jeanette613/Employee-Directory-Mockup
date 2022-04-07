
import { Route, Routes } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";
import Homepage from "./pages/Homepage";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/employee" element={<EmployeePage />} />
            </Routes>
        </div>
    );
}