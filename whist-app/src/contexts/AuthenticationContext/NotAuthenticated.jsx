import {
    Route,
    Routes,
    Navigate
  } from "react-router-dom";
import Login from "./Login";

export default function() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to='/login' />} />
        </Routes>
    )
}