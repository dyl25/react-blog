import { useEffect, useState } from "react";

function useFetch(url/*, method = 'get'*/) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    /*if(method !== 'get' ) {
        let header = {
            method: 'GET',
            headers: { "Content-Type" : "application/json" }
        };
    }*/

    useEffect(() => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw Error('A problem occured with the ressources');
                }
                return response.json();
            })
            .then(data => {
                setLoading(false);
                setData(data);
                setErrors(null)
            })
            .catch(err => {
                setLoading(false);
                setErrors(err.message);
            });
    }, [url]);

    return {data, isLoading, errors};
}

export default useFetch;