import axios from "axios";
import { useState } from "react"

function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [password, setPassword] = useState("")
    const [successful, setSuccessful] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://my-website-7hcq.onrender.com/users/create", { username,email,age,password,});
            setSuccessful("User sign up successfully");
        } catch (err) {
            console.error(err.message);
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>{successful ? successful : error}</h1>
            <form onSubmit = {handleSubmit}>
                <input type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} /> <br /> <br />
                <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
                <input type="age" placeholder="Enter your age" onChange={(e) => setAge(e.target.value)} /> <br /> <br />
                <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} /> <br /> <br />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;