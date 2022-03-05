import logo from "./logo.svg";
import "./App.css";
import Status from "./component/Status";
import StatusClass from "./component/StatusClass";

function App() {
    return (
        <div className="container">
            <Status title="First" />
            <Status title="Second" />
            <Status title="Third" />
        </div>
    );
}

export default App;
