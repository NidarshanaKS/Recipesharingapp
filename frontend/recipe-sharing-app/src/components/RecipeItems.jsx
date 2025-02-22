import React from "react";
import { useLoaderData } from "react-router-dom";
import Arabittapenne from "../assets/Arabittapenne.jpg";
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

export default function RecipeItems() {
  const allRecipes = useLoaderData();
  console.log(allRecipes);

  return (
    <div className="card-container">
      {allRecipes?.map((item, index) => {
        return (
          <div key={index} className="card">
            <img
              src={Arabittapenne}
              width="120px"
              height="100px"
              alt={item.title}
            ></img>
            <div className="card-body">
              <div className="title">{item.title}</div>
              <div className="icons">
                <div className="timer">
                  <BsStopwatchFill />
                  <span>{item.time}</span>{" "}
                </div>
                <FaHeart />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
