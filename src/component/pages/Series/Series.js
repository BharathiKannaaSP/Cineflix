import React, { useEffect, useState } from 'react'
import axios from "axios"
import CustomPagination from '../../Pagination/CustomPagination';
import SingleContent from '../../SingleContent/SingleContent';
import Genres from '../../Genres';
// eslint-disable-next-line
import genreforURL from '../../Hooks/useGenre'
import useGenre from '../../Hooks/useGenre';

const Series = () => {
   const [page,setPage]=useState(1);
   const [content,setContent]=useState([]);
   const[numOfPages,setNumOfPages]=useState();
   const [selectedGenres,setselectedGenres]=useState([]);
   const [genres,setGenres]=useState([]);
   const genreforURL=useGenre(selectedGenres)
   const fetchMovies =async() =>{

   const{data}= await axios.get(   
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreforURL}`
   );
   setContent(data.results);
   setNumOfPages(data.total_pages);

   //console.log(data)
};
    useEffect(()=>{
        fetchMovies();
        // eslint-disable-next-line
    },[page,genreforURL])

  
    return (
        <div>
             <span className="pageTitle">Series</span>
             <Genres 
             type="tv" 
             selectedGenres={selectedGenres} 
             setselectedGenres={setselectedGenres} 
             genres={genres}
             setGenres={setGenres}
             setPage={setPage} 
             />


            <div className="trending">
                {content &&content.map((c) => (
                <SingleContent
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media_type='tv'
                    vote_average={c.vote_average}
                />
            ))}
        </div>
        {numOfPages>1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
        )}
        </div>
    )
}

export default Series
