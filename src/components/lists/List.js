const List = ({id, name, avatar}) => {
    return (
        <div>
            <h3>{id}. {name}</h3>
            <div>
                <img src={avatar} alt={name}/>
            </div>
        </div>
    )
}

export default List;