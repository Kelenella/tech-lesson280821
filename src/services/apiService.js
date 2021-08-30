import axios from 'axios'


const MY_API_KEY = '23121091-79cfae32e8a9d261b4a6138dc'

axios.defaults.baseURL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal'

function async getPictures (query, page) {

    const {data: {hits}} = await axios.get(`&q=${query}&page=${page}&per_page=12&key=${MY_API_KEY}`);
    return hits;
}


// import axios from "axios";

// const MY_API_KEY = "22948593-eb3728724c643cf2948c736ef";
// axios.defaults.baseURL =
//   "https://pixabay.com/api/?image_type=photo&orientation=horizontal";

// export function getPictures(query, page) {
//   return axios.get(`&q=${query}&page=${page}&per_page=12&key=${MY_API_KEY}`);
// }

// display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   grid-gap: 20px;
//   padding: 0;
//   margin: 0;
//   list-style: none;
//   max-width: calc(100vw - 80px);
//   margin-left: auto;
//   margin-right: auto;
