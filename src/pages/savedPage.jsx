import React from "react";
import { useSelector } from "react-redux";
import CardSaveComponent from "../components/cards/CardSaveComponent";

function SavedPage() {
  const savedData = useSelector((state) => state.saved.saved);

  return (
    <div>
      savedPage
      <CardSaveComponent saved={savedData} />
    </div>
  );
}

export default SavedPage;
