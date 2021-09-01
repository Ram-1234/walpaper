import React,{useState} from 'react';
import Animal from './Animals';
import Bird from './Birds';
import Nature from './Nature';
import Flower from './Flower';
import Building from './Building';
import Tech from './Tech';
import { Route,NavLink,Switch,useHistory} from 'react-router-dom';
import './styles.css';

function Apps() {
   const [input,setInput]=useState('')
   const [tabname,setTabname]=useState("NATURE")
   let history=useHistory()
   console.log("history "+history)
   //console.log(input)
   const setColor=(e)=>{
      setTabname(e.target.innerText)
   }

   const keyHandler=(e)=>{
    if(e.key==='Enter'){
        setInput(e.target.value.toUpper)
        setTabname(e.target.value.toUpperCase())
        let value=(e.target.value).toLowerCase()
       if(e.target.value.toLowerCase()==="nature"){
           history.replace('','http://localhost:3000/')
           e.target.value=''
       }else{
            history.push(value)
            e.target.value=''
       }
    }
   }

    return (
        <>
             <div className="header">
                 <h1 className="logo">Images...</h1>
                 <input type="text" className="user-input" onKeyPress={(e)=>keyHandler(e)}  placeholder="search nature.." />
                 <i className="fas fa-search-plus"></i>
             <div className="all-list">
             <li>
                 <NavLink style={{border:tabname==='NATURE' ? '2px solid white':'none' }} onClick={(e)=>setColor(e)}  to='/' className="nav-link">NATURE</NavLink>
             </li>
             <li>
                 <NavLink style={{border: tabname==='BIRDS' ? '2px solid white':'none'}} to='/birds' onClick={(e)=>setColor(e)} className="nav-link">BIRDS</NavLink>
             </li>
             <li>
                 <NavLink style={{border: tabname==='FLOWER' ? '2px solid white':'none'}}  to='/flower' onClick={(e)=>setColor(e)} className="nav-link">FLOWER</NavLink>
             </li>
             <li>
                 <NavLink style={{border: tabname==='ANIMAL' ? '2px solid white':'none'}} to='/animal' onClick={(e)=>setColor(e)} className="nav-link">ANIMAL</NavLink>
             </li>
             <li>
                 <NavLink style={{border: tabname==='TECH' ? '2px solid white':'none'}} to='/tech' onClick={(e)=>setColor(e)} className="nav-link">TECH</NavLink>
             </li>
             <li>
                 <NavLink style={{border: tabname==='BUILDING' ? '2px solid white':'none'}} to='/building' onClick={(e)=>setColor(e)} className="nav-link">BUILDING</NavLink>
             </li>
             </div>
             </div>
                           
             <Switch>
                 <Route exact path='/' ><Nature/></Route>
             </Switch>
             <Switch>
                 <Route exact path='/birds' ><Bird/></Route>
             </Switch>
             <Switch>
                 <Route exact path='/flower' ><Flower/></Route>
             </Switch>
             <Switch>
                 <Route exact path='/animal' ><Animal/></Route>
             </Switch>
             <Switch>
                 <Route exact path='/tech' ><Tech/></Route>
             </Switch>
             <Switch>
                 <Route exact path='/building' ><Building/></Route>
             </Switch>
        </>
    )
}

export default Apps;
