import {useEffect, useState} from "react";

const Casts = () => {

    const [casts, setCasts] = useState([])
    console.log(casts);

    const fetchData = async() => {
        const response = await fetch('https://reqres.in/');
        const json = await response.json();

        setCasts(json);
    }

    useEffect(() => {
        fetchData ();
    }, [])
    return (
        casts.map
)
}

export default Casts;