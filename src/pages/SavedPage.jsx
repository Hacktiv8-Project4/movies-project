import React from "react";
import { useSelector } from "react-redux";
import CardSaveComponent from "../components/cards/CardSaveComponent";

function SavedPage() {
  const savedData = useSelector((state) => state.saved.saved);
  return (
    <div className="h-full mb-96 mt-20 ">
      <h1 className=" inline-block text-white  border-b-gray-100 border-b-2 ml-20">
        FAVORITES{" "}
      </h1>
  
      <CardSaveComponent saved={savedData} />
     
    
    
    </div>
  );
}

export default SavedPage;
