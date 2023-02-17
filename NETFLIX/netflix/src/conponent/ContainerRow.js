import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function ContainerRow({ title, fetchURL }) {
  let [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);


  return (
    <>
      <h2 className="text-white font-bold md p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
         
          className="bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies && movies.map((item, id) => <Movie key={id} item={item} />)}
        </div>
        <MdChevronRight
          
          className="bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden  group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}

export default ContainerRow;
