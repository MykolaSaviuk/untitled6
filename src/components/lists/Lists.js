import {useEffect, useState} from "react";
import List from "./List";

const Lists = () => {
        const [lists, setLists] = useState([]);
        const [count, setCount] = useState(1);
        const fetchData = async () => {
                const resp = await fetch('https://reqres.in/api/users?page=' + count);
                const json = await resp.json();
                setLists(json.data)
        }

        useEffect(() => {
                fetchData ()
        }, [count])

        const incrementCount = () => {
                if (count >= 2) {
                        return
                }
                setCount(count + 1);
        }

        const decrementCount = () => {
                if (count <= 0) {
                        return
                }
                setCount(count - 1);
        }

        console.log(count);

        return (

            <>
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                            {lists.map((value) =>
                                <List
                                    key={value.id}
                                    id={value.id}
                                    avatar={value.avatar}
                                    name={value.first_name}
                                />)}
                    </div>
                    <button onClick={decrementCount}>Previous page</button>
                    <button onClick={incrementCount}>Next page</button>
            </>

    )
}

export default Lists;