import React from "react";
import { useSelector } from "react-redux";
import CardSaveComponent from "../components/cards/CardSaveComponent";

function SavedPage() {
  const savedData = useSelector((state) => state.saved.saved);
  console.log(savedData);
  return (
    <div className="h-screen">
      <h1 className=" inline-block text-white  border-b-gray-100 border-b-2 ml-20">SAVED </h1>
      <CardSaveComponent saved={savedData} />
    </div>
  );
}

export default SavedPage;
