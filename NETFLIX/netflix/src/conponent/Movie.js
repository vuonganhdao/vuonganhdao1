import React from 'react';

function Movie({item}) {
    return (
        <div className="w-[300px] inline-block cursor-pointer relative p-2" >
                <img className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                  alt={item?.title}
                  
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-yellow-50">
                    <p className="white-space-normal text-xs font-bold flex justify-center items-center h-full text-center">{item?.title}</p>
                </div>
              </div>
    );
}

export default Movie;