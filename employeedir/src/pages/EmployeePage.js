import Header from "../components/Header";
import EmpList from "../components/EmplList";
import EmpListItem from "../components/EmployeeListItem";
import "../style.css";

export default function EmployeePage() {
    return (
        <div className="employeepage">
            <Header />
            <EmpList>
                <EmpListItem />
            </EmpList>
        </div>
    );
}