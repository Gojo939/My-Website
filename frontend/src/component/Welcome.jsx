function Welcome() {

    const currentUser = {
        name: "Gojo",
        age: 19,
        hobby: "Gaming",
    };

    const name = currentUser.name;
    const age = currentUser.age;
    const hobby = currentUser.hobby;
    return (
        <>
            <h1 className="pur">This is my first react code</h1>
            <p style={{textAlign: "center", fontSize: 24, color: "blue"}}>This is going to be a ride</p>
            <p>My name is {name}</p>
            <p>I am {age}</p>
            <p>I love {hobby}</p>
        </>
    );
}

export default Welcome;