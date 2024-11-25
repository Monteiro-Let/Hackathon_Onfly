import { Routes, Route } from "react-router-dom";
import Form from "../components/Form/Form";
import App from "../App";

export function MainRoute () {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/form" element={<Form />} />
        </Routes>
    );
}
