import React from 'react'

function List(props) { // {list}
    return (
        <ul>
            {
                props.list.map(function (item) {
                    return (<li key={item.objectID}>
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                    </li>)
                })
            }
        </ul>
    )
}

export default List