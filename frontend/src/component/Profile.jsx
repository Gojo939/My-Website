import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios"

function Profile () {
    const [currentUser, setCurrentUser] = useState({});
    const token = localStorage.getItem("token");
    const tokenDecoded = jwtDecode(token)
    const userId = tokenDecoded.userId

    useEffect(() => {
        const getUser = async() => {
            const res = await axios.get(`http://localhost:2468/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setCurrentUser(res.data);
        };
        getUser();
    }, [token, userId]);

    return(
    <div>
        <h1>Barry's Profile</h1>
        <p><b>Name: {currentUser.name}</b></p>
        <p><b>Age: {currentUser.age}</b></p>
        <p><b>Email: {currentUser.email}</b></p>
    </div>
    )
}

export default Profile;