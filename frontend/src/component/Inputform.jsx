import { useState } from "react";

function InputForm() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello, ${name}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
            <button type="Submit">Submit</button>
        </form>
    );
}

export default InputForm;