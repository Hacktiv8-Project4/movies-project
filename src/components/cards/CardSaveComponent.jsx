import React from "react";
import { useDispatch } from "react-redux";
import { add, remove } from "../../redux/slices/savedSlice";
import CardComponent from "./CardComponent";

function CardSaveComponent({ saved }) {
  const dispatch = useDispatch();

  const handleSaveClick = (item) => {
    dispatch(add(item));
  };

  const handleUnSaveClick = (item) => {
    dispatch(remove(item?.Title));
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {saved?.map((mv, index) => {
        const isSaved = saved.find((item) => item.Title === mv.Title);
        let button;
        if (isSaved) {
          button = (
            <button onClick={() => handleUnSaveClick(mv)}>
              <i className="fa-xl text-yellow-400 items-center fa-solid fa-bookmark"></i>
            </button>
          );
        } else {
          button = (
            <button onClick={() => handleSaveClick(mv)}>
              <i className="fa-xl items-center fa-regular fa-bookmark"></i>
            </button>
          );
        }
        return <CardComponent mv={mv} button={button} key={index} />;
      })}
    </div>
  );
}

export default CardSaveComponent;
