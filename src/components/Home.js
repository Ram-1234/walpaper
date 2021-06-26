import React,{useState,useEffect} from 'react';
import Header from './Header';
import Card from './Card';
import Data from './data.json';
import './styles.css';
import randomcolor from 'randomcolor';

export default function Home() {
    const [color,setColor]=useState("");
    const [album,setAlbum]=useState();
    console.log(color)
    console.log(album)
    
    
    useEffect(()=>{
        setAlbum("green");
        setColor("green")
        //var color = randomColor();
        setColor(randomcolor())
    },[])

    

    return (

        <>
          <Header color={color}/>
          {/* <h1 style={{color:color}}>Hello Wworld</h1> */}
            <div className="main-body">
                {
                    Data.map(item=> <Card 
                        key={item.id}
                        image={item.thumbnailUrl}
                    />)
                }
            </div>
        </>
    )
}
