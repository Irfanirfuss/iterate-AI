import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Puja from "./components/Puja";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => (
    <Router>
        <Header />
        <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/puja" Component={Puja} />
            <Route path="/not-found" Component={NotFound} />
        </Routes>{" "}
    </Router>
);
export default App;
