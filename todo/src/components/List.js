import React from "react"



function DoneImg(props) {

    if (props.done) {
        return <img alt="done" src="./assets/on.png"></img>
    } else {
        return <img alt="undone" src="./assets/off.png"></img>
    }
}





function List(props) {

    return (
        <ul>
            {props.items.map(item => <li className={item.done ? "done item" : "item"} key={item.id}>
                
                {item.text}
                <div className="abd">
                    <button onClick={() => { props.onDone(item) }}><DoneImg done={item.done}></DoneImg></button>
                    <button onClick={() => { props.onItemDeleted(item) }}><img alt="delete" src="./assets/bin.png"></img></button>
                </div>
            </li>)}
        </ul>
    )
}

export default List;