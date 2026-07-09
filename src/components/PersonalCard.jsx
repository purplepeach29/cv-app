import { useState } from "react";
function PersonalCard({name, email, phone, onEdit}){

    return (
        <div>
            <h3>Personal Information</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button onClick={onEdit}>Edit</button>
        </div>
    )
}
       
export default PersonalCard;