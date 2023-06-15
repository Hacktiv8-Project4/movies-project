import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItemComponent from "../components/cards/CardItemComponent";
import { fetchMovies, fetchSeries } from "../redux/slices/moviesSlice";
import HeroSection from "../components/HeroSection";

function HomePage() {
  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.movies.movies);
  const seriesData = useSelector((state) => state.movies.series);
  const isLoadingData = useSelector((state) => state.movies.isLoading);

  console.log(seriesData);

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchSeries());
  }, [dispatch]);

  return (
    <div>
      {isLoadingData === true ? (
        <p>Loading...</p>
      ) : moviesData ? (
        <>
          <HeroSection movies={moviesData} />
          <section className="relative -top-36">
            <h1 className=" inline-block text-white  border-b-gray-100 border-b-2 ml-20">
              MOVIES{" "}
            </h1>
            <CardItemComponent movies={moviesData} />
            <h1 className=" inline-block text-white  border-b-gray-100 border-b-2 ml-20 ">
              SERIES
            </h1>
            <CardItemComponent movies={seriesData} />
          </section>
        </>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default HomePage;
