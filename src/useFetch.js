import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw Error('A problem occured with the ressources');
                }
                console.log(response);
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