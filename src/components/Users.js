import React, { useState, useEffect } from "react";

function DisplayUsers() {
    const [usernames, setUsernames] = useState([]);

    const getdatafu = async () => {
        try {
            let res = await fetch("http://localhost:5000/users");
            let resultat = await res.json();
            const username = resultat.map(user => user.user_name);  
            setUsernames(username);  
        } catch (error) {
            console.error("Erreur:", error);
        }
    };

    useEffect(() => {
        getdatafu();
    }, []);  
    return (
        <div>
            <h2>List of Users</h2>
            {usernames.length === 0 ? (
                <h3>Loading...</h3> 
            ) : (
                <ul>
                    {usernames.map((username, index) => (
                        <li key={index}>{username}</li> 
                    ))}
                </ul>
            )}
        </div>
    );
}

export { DisplayUsers };
