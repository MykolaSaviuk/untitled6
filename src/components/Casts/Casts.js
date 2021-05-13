import {useEffect, useState} from "react";

const Casts = () => {

    const [casts, setCasts] = useState([])
    console.log(casts);

    const fetchData = async() => {
        const response = await fetch('https://api.sampleapis.com/futurama/cast');
        const json = await response.json();

        setCasts(json);
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        {casts && casts.map()}
    )
}

export default Casts;