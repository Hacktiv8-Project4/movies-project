import { useEffect,useState } from "react";

const HeroSection = ({movies}) => {
   
 

    const [indexPoster, setIndexPoster] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * movies.length);
        setIndexPoster(randomIndex);
      }, 4000);
  
      return () => clearInterval(interval);
    }, [movies]);
    

  const movie = movies[indexPoster]


  return (
    <>
    <div className=" flex justify-center items-center mb-10 max-h-[1000px] max-w-ful bg-gradient-to-t from-black"  >
      {movie ? ( <img className="-z-20 w-full h-full object-coveropacity-90" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />):null}
       {/* <img className="-z-20 w-full h-full object-coveropacity-90" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} /> */}
    </div>
    </>
  )
}

export default HeroSection
