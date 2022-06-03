import './ExpenseDate.css';


function ExpenseDate(Props)
{
    const month=Props.date.toLocaleString('en-us',{month:'long'});
    const day= Props.date.toLocaleString('en-us',{day:'2-digit'});
    const year= Props.date.getFullYear(); 
    return(
        <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
    </div>
    );
}
export  default ExpenseDate;