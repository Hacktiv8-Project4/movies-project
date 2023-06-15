import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItemComponent from "../components/cards/CardItemComponent";
import { fetchMovies } from "../redux/slices/moviesSlice";
import HeroSection from "../components/HeroSection";

function HomePage() {
  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.movies.movies);
  const isLoadingData = useSelector((state) => state.movies.isLoading);


  useEffect(() => {
    dispatch(fetchMovies());
    console.log(moviesData)
  }, [dispatch]);

  return (
    <div >
      {isLoadingData === true ? (
        <p>Loading...</p>
      ) : moviesData ? (
        <>
          <HeroSection movies={moviesData}/>
        <section className="relative -top-96">
          <h1 className=" inline-block text-white  border-b-gray-100 border-b-2 ml-20">MOVIES </h1>
          <CardItemComponent movies={moviesData} />
        </section>
        </>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default HomePage;
