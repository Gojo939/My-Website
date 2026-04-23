import axios from "axios";
import { useState } from "react"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [successful, setSuccessful] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://my-website-7hcq.onrender.com/users/login", { email,password,});
            const token = res.data;
           
            localStorage.setItem("token", token);
            setSuccessful("User logged in successfully");
        } catch (err) {
            console.error(err.message);
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>{successful ? successful : error}</h1>
            <form onSubmit = {handleSubmit}>
                <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
                <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} /> <br /> <br />

                <button type="Login">Login</button>
            </form>
        </div>
    );
}

export default Login;