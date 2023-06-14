
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/slices/savedSlice";
import CardComponent from "./CardComponent";

function CardItemComponent({ movie }) {
  const dispatch = useDispatch();
  const savedData = useSelector((state) => state.saved.saved);

  const handleSaveClick = (item) => {
    dispatch(add(item));
  };

  const handleUnSaveClick = (item) => {
    dispatch(remove(item?.Title));
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 px-20 m-auto mb-20">
        {movie?.map((mv, index) => {
          const isSaved = savedData.find((item) => item.Title === mv.Title);
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
                <i className="fa-xl items-center fa-regular fa-bookmark text-gray-300"></i>
              </button>
            );
          }
          return <CardComponent mv={mv} button={button} key={index} />;
        })}
      </div>
    </>
  );
}

export default CardItemComponent;
