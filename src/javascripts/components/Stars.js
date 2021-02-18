import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import {top10} from "../top10"

export default function StarRating(rating) {
  rating = Math.floor(rating)
  return [
    <FaStar color={rating >= 2 ? "red" : "gray"}/>,
    <FaStar color={rating >= 4 ? "red" : "gray"}/>,
    <FaStar color={rating >= 6 ? "red" : "gray"}/>,
    <FaStar color={rating >= 8 ? "red" : "gray"}/>,
    <FaStar color={rating >= 10 ? "red" : "gray"}/>
  ]
}