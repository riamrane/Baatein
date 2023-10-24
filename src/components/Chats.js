import React from "react";
import profile from '../img/profile2.jpg'

const Chats =()=>{
    return (
        <div className="chats">
            <div className="userChat">
                <img src={profile}/>
                <div className="userChatInfo">
                    <span>Jay</span>
                </div>
            </div>
            <div className="userChat">
                <img src={profile}/>
                <div className="userChatInfo">
                    <span>Jay</span>
                </div>
            </div>
            <div className="userChat">
                <img src={profile}/>
                <div className="userChatInfo">
                    <span>Jay</span>
                </div>
            </div>
            <div className="userChat">
                <img src={profile}/>
                <div className="userChatInfo">
                    <span>Jay</span>
                </div>
            </div>
        </div>
    )
}

export default Chats