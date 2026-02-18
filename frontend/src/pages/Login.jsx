import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import { notify } from "../components/Notification";

const Login = ({ setRefreshAuth }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        try {
            await API.post("/auth/login", { email, password });
            setRefreshAuth(prev => !prev);
            notify("Login successful", "success");
            navigate("/");
        } catch (err) {
            notify(
                err.response?.data?.message || "Login failed",
                "error"
            );
        }
    };


    return (
        <form onSubmit={submit} className="max-w-md mx-auto mt-10 space-y-4">
            <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full"
            />
            <input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 w-full"
            />
            <button className="bg-black text-white px-4 py-2">
                Login
            </button>
        </form>
    );
};

export default Login;
