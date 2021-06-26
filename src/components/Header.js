import React from 'react'
import './styles.css';

export default function Header(props) {
    return (
        <>
          <div className="header" style={{backgroundColor:props.color}}>
              <h1 className="logo">ALBUM</h1>
                <div className="div-item">
                    <span className="home">Home</span>
                    <span>Product</span>
                    <span>About</span>
                    <span>User</span>
                </div>  
          </div>
        </>
    )
}
