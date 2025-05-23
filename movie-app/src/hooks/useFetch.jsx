import { useEffect, useState } from "react";
import { options } from "../utils/Options";

const useFetch = (apiPath) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/${apiPath}`, options)
                const data = await response.json();
                // console.log('Data:', data.results);
                setData(data.results ? data.results : data)
            } catch(error) {
                console.error('Error in fetching Data...', error);
            }
        }

        fetchMovies()

    }, [apiPath])

    console.log('Data Stored:', data);

    return {
        data
    }
    

}

export default useFetch