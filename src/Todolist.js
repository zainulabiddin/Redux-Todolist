import React,{useState} from 'react'
import './Todolist.css';
import { useSelector,useDispatch } from 'react-redux';
import { addTodo,deleteTodo,removeTodo } from './action/index';

const Todolist = () => {
    const[inputdata,setInputdata]= useState('');
    const list = useSelector((state)=> state.todoReducer.list)
    const dispatch = useDispatch();
   
  return (
    <>
    <div className="main-div">
        <div className='child-div'>
            <figure>
                <figcaption>
                    Add your list here
                </figcaption>
            </figure>
            <div className='addItems'>
                <input type='text' placeholder='Add items' value={inputdata} onChange={(event)=>setInputdata(event.target.value)}/>
                <i className='fa fa-plus add-btn' onClick={()=>dispatch(addTodo(inputdata),setInputdata(''))}></i>
            </div>

            <div className="showItems">
                {
                    list.map((elem)=>{ 
                        return(
                            <>
                        <div className="eachItem" key={elem.id}>
                        <h3>{elem.data}</h3>
                        <div className="todo-btn">
                        <i className='far fa-trash-alt add-btn' title="Delete items" onClick={()=>dispatch(deleteTodo(elem.id))}></i>
                    </div>
                 
                    </div>
                    </>
                    )
                    })
                }
               
            </div>

            <div className="show-items">
                <button className='btn effect04' data-sm-link-text="remove All" onClick={()=>dispatch(removeTodo())}><span>Check List</span></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Todolist