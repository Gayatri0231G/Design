import React from "react";
import "./Design.css";
import { LuCalendarMinus2 } from "react-icons/lu";
import { MdOutlineNotifications } from "react-icons/md";

const Design = () => {
    return (
        <div className="main-box">
            <div className="frist-box">
                <div className="profile">
                    <div className="profile-images">
                        <img src="https://static.vecteezy.com/system/resources/previews/010/966/743/non_2x/avatar-nerd-man-free-vector.jpg"></img>
                        <div className="hello">Hello, <div className="joko">Joko Husein</div></div>
                    </div>
                    <div className="top-icons1"><LuCalendarMinus2 /></div>
                    <div className="top-icons2"><MdOutlineNotifications /></div>
                </div>
                <div className="progress">
                    <div className="on-progress">On Progress<a className="num">(12)</a></div>
                    <div className="view">View More</div>
                </div>
            </div>
            <div className="second-box">
                ggg
            </div>
        </div>
    );
};

export default Design;