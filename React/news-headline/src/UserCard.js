import React from "react";
import "./news_card.css";

export default function UserCard({user}) {
    return (
    <div className="news-card">
        <h2>{user.title}</h2>
        <p>{user.description}...</p>
        <a href={user.url} target="_blank">Read More</a>
    </div>
    )
}