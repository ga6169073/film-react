import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTlkNDkwMDcxNDE5YTI1Zjc3Y2MzYWJmMTFhZmY4MyIsInN1YiI6IjY0ZGJiNjg3ZjQ5NWVlMDI4ZjY2MTYxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-6zKGngSDGu52lDGFsmyWneg4I6X31EEoaPZz2Q7t4w";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};