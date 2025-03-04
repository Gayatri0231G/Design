import React from "react";
import "./Design.css";
import { LuCalendarMinus2 } from "react-icons/lu";
import { MdOutlineNotifications } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";

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
                    <div className="on-progress">On Progress<a className="num"> (12)</a></div>
                    <div className="view">View More</div>
                </div>
                <div className="design">
                    <div className="design-box">
                        <div className="design-ui">
                            <div className="design-title">Design UI ToDo APP
                                <div className="fri">Friday, 08 July 2022</div>
                            </div>
                            <div className="user-icon"><TbUsersGroup /></div>
                        </div>
                        <div className="line"></div>
                        <div className="description">Description :</div>
                        <div className="design-description">Design a simple home pages with clean layout and color based on the guidelines..</div>
                        <div className="team">
                            <div className="teams">Teams :</div>
                            <div className="progress">Progress :</div>
                        </div>
                        <div className="team-icons">
                            <div className="teams-icons"><a className="img1">jhjj</a></div>
                            <div className="progress-bar"><div className="progress-circle"></div></div>
                            <div className="number">78%</div>
                        </div>
                        <div className="bottom-line"></div> 
                    </div>
                    <div className="wee-box">
                        <div className="wee">Wee</div>
                        <div className="friday">Friday</div>
                        <div className="line1"></div>
                        <div className="descr">Descr</div>
                        <div className="meet"> Meet pager</div>
                        <div className="teams1">Team</div>
                        <div className="bottom-line2"></div>
                    </div>
                </div>
                <div className="complete">
                    <div className="completed">Completed</div>
                    <div className="view">View More</div>
                </div>
                <div className="meeting-box"></div>
            </div>
            <div className="second-box">
                ggg
            </div>
        </div>
    );
};

export default Design;