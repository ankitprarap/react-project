import React ,{useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props)
{
    //let title="car Insurance ";
    const [newtitle,setNewTitle] = useState("");
    const [title,setTitle] = useState(props.title);

     
    function clickHandler()
    {
        setTitle(newtitle)   ;
    }
    function changeHandler(event){
        setNewTitle(event.target.value);
    }
    return(

    <div className="expense-item">
       <ExpenseDate date={props.date}/>
    <div className="expense-item__description">
        <h2>
            {title}
        </h2>
        <div className="expense-item__price">${props.amount}</div>
    </div>
    <input type="text" value={newtitle} onChange={changeHandler}/>
    <button onClick={clickHandler}>change title</button>
    </div>

);

}
export default ExpenseItem;