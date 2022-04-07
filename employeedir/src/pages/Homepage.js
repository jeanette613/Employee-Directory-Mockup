import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import EmpList from "../components/EmplList";
import EmpListItem from "../components/EmployeeListItem";
import "../style.css";

export default function Homepage() {
    return (
        <div>
            <Header />
            <SearchBar />
            <EmpList>
                <EmpListItem />
                <EmpListItem />
                <EmpListItem />
                <EmpListItem />
                <EmpListItem />
                <EmpListItem />
            </EmpList>
        </div>
    );
}


