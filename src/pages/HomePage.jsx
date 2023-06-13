import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItemComponent from "../components/cards/CardItemComponent";
import { fetchMovies } from "../redux/slices/moviesSlice";

function HomePage() {
  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.movies.movies);
  const isLoadingData = useSelector((state) => state.movies.isLoading);

  console.log(isLoadingData);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="App">
      {isLoadingData === true ? (
        <p>Loading...</p>
      ) : moviesData ? (
        <CardItemComponent movie={moviesData} />
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default HomePage;
