import React,{useState} from 'react'
import Product from './Product';
import './styles.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Home() {
    const [userinput,setInput]=useState("")
    const [Items,setItems]=useState([])
    console.log(Items);
   
    const userValue=(e)=>{
            setInput(e.target.value)
    }

    function addItems(){
        setItems((olditem)=>{
            return [...olditem,userinput]
        });
        setInput(" ")
    }
  function Delete(id){
      const data=Items.filter((val,index)=> {return index!==id})
      setItems(data)
  }
   

    return (
        <>
          <div className="todo-app">
              <h1>Todo List</h1>
              <div className="user-input">
              <input type="text"  onChange={e=>userValue(e)} value={userinput}/>
              <AddCircleOutlineIcon onClick={addItems}/>
              </div>
                {
                    Items.map((item,index)=>{ 
                        if(item.length>3){ 
                        return <Product
                        DeleteItem={Delete}
                            id={index}
                            key={index}
                            Data={item}
                            />
                        }else 
                          return  " "
                    })    
               }
          </div>
        </>
    )
}

export default Home;
