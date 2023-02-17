
let requests = {
  getPopular: `https://api.themoviedb.org/3/movie/popular?api_key=4a91b757f8bce90b15ad8458b36aedbc&language=en-US&page=1`,
  getTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=4a91b757f8bce90b15ad8458b36aedbc`,
  getNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=4a91b757f8bce90b15ad8458b36aedbc&language=en-US&page=1`,
  
  getUpcomming: `https://api.themoviedb.org/3/movie/upcoming?api_key=4a91b757f8bce90b15ad8458b36aedbc&language=en-US&page=1`,
};
export default requests;
