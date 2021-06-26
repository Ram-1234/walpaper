import React from 'react';
import Animal from './Animals';
import Bird from './Birds';
import Nature from './Nature';
import Flower from './Flower';
import Building from './Building';
import Tech from './Tech';
import {BrowserRouter as Router,Route,NavLink,Switch} from 'react-router-dom';
import './styles.css';

function Apps() {
    return (
        <>
         <Router>
             <div className="header">
                 <h1 className="logo">Images...</h1>
                 <input type="text" className="user-input" placeholder="search walpaper.." />
                 <i className="fas fa-search-plus"></i>
             <div className="all-list">
             <li>
                 <NavLink  to='/' className="nav-link">NATURE</NavLink>
             </li>
             <li>
                 <NavLink to='/birds' className="nav-link">BIRD</NavLink>
             </li>
             <li>
                 <NavLink to='/flower' className="nav-link">FLOWER</NavLink>
             </li>
             <li>
                 <NavLink to='/animal' className="nav-link">ANIMAL</NavLink>
             </li>
             <li>
                 <NavLink to='/tech' className="nav-link">TECH</NavLink>
             </li>
             <li>
                 <NavLink to='/building' className="nav-link">BUILDING</NavLink>
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
         </Router>
        </>
    )
}

export default Apps;
