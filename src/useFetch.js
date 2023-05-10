import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    // FETCHing data from an end-point. This is a GET request to that URL, which returns a promise
        fetch(url)
    // Once the data is returned i.e. the RESponse, THEN you extract the data by returning res.json
        .then(res => {
            if(!res.ok) {
                throw Error('Could not fetch blog data.');
            }
            return res.json();
        })
    // THEN you can fire off another function that uses the returned DATA and change the state
    // from null.
    // This 'data' is only returned within this function. Different to data set on line 5.
        .then((data) => {
            console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setIsPending(false)
            setError(err.message);
        })
    }, [url]);

    // an empty dependency array passed in as a second argument will mean useEffect only fires
    // once on initial render, not after every state change.
    // If a dependency is added e.g. 'entries' or 'dream', then React will watch for any changes
    // to these dependencies and fire on changes.   
    
    return { data, isPending, error }
};

export default useFetch;