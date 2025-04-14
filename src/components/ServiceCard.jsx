import React from "react";

const ServiceCard = ({ title,description}) => {
    return (
        <div style = {styles.card}>
            <h2 style = {styles.title}>{title}</h2>
            <p style = {styles.description}>{description}</p>

        </div>
 
    )
    
}

const styles = {
    card:{
        border: "1px solid #ddd",
        padding: "15px",
        margin: " 10px",
        borderRadius: "8px",
        boxShadow: "2px 2px 10px",
        textAlign: "centre",
        width: "250px",
        backgroundColor: "#ffffff"
    },

    title:{
        margin: "0",
        fontSize: "1.2em",
        color: "red",
    },

    description:{
        margin: "5px",
        fontSize: "1em",
        color: "black",
    },

};

export default ServiceCard;