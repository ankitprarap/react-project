import './Expense.css'
import ExpenseItem from './Expenseitem';
function expense(Props)
{
return (
    <div className="expense">
    <ExpenseItem 
    date={Props.item[0].date} 
    title={Props.item[0].title} 
    amount={Props.item[0].amount}/>

    
    <ExpenseItem 
      date={Props.item[3].date} 
      title={Props.item[3].title} 
      amount={Props.item[3].amount}/>
      
    <ExpenseItem 
     date={Props.item[1].date} 
     title={Props.item[1].title} 
     amount={Props.item[1].amount}/>
    <ExpenseItem 
    date={Props.item[2].date} 
    title={Props.item[2].title} 
    amount={Props.item[2].amount}/>
</div>
);
}
export default expense;