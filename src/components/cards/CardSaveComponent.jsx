
import { useDispatch } from "react-redux";
import { add, remove } from "../../redux/slices/savedSlice";
import CardComponent from "./CardComponent";


function CardSaveComponent({ saved }) {
  const dispatch = useDispatch();

  const handleSaveClick = (item) => {
    dispatch(add(item));
  };

  const handleUnSaveClick = (item) => {
    dispatch(remove(item?.title));
  };
  return (
    <>
   
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 px-20 m-auto  " >
      {saved?.map((movie, index) => {
        const isSaved = saved.find((item) => item.title === movie.title);
        let button;
        if (isSaved) {
          button = (
            <button onClick={() => handleUnSaveClick(movie) } >
              
              <i className="fa-xl text-yellow-400 items-center fa-solid fa-bookmark "></i>
            </button>
          );
        } else {
          button = (
            <button onClick={() => handleSaveClick(movie)}>
              <i className="fa-xl items-center fa-regular fa-bookmark"></i>
            </button>
          );
        }
        return <CardComponent movie={movie} button={button} key={index} />;
      })}
    </div>
      </>
  );
}

export default CardSaveComponent;
