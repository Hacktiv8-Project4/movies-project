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
    <div className=" flex justify-center items-centermb-10  h-[446px] bg-gradient-to-t from-black"  >

      <img className="-z-10  w-full h-full object-cover" src={movie.Poster} alt={movie.Title} />
    </div>
    </>
  )
}

export default HeroSection
