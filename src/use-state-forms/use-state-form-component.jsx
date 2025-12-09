import React, { useState } from "react";
const UseStateFormComponent=()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
const fun1 = (e) => {
    setName(e.target.value);
};
const submitthings = () => {
    console.log("The name is :", name);
    console.log("The email is :", email);
};
return (
    <div>
    <h1>Use State Form Component</h1>
    <form action={submitthings}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={fun1} /><br /><br />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Submit</button>
    </form>

    <p>your name: {name}</p>
    <p>your email: {email}</p>
    </div>
);
};

export default UseStateFormComponent;