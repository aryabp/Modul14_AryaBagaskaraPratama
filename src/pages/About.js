import { useState } from "react";

export default function About(){
    const [me, setMe] = useState({
        name:"Arya Bagaskara Pratama",
        nim:"320200401004",
        university:"Universitas Pertahanan",
        hobbies:"Coding"
    })
    return(<>
    <h1>My names is {me.name}</h1>
    <p>
        I am from {me.university} with NIM {me.nim}.
        I love {me.hobbies}
    </p>
    </>)
}