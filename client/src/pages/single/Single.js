import React from "react";
import SideBar from "../../Components/sidebar/SideBar";
import SinglePost from "../../Components/singlePost/SinglePost";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
}
