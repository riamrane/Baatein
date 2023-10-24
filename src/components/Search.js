import React from "react";
import profile from "../img/profile2.jpg"
const Search =()=>{
    return (
        <div className="search">  
            <div className="searchForm">
                <input type="text" placeholder="Find a user"/>
            </div>

            <div className="userChat">
                <img src={profile}/>
                <div className="userChatInfo">
                    <span>Jay</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Search