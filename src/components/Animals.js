import React from 'react'

const Data=[
    {Id:1,Name:"Nature",Image:"https://picsum.photos/id/237/200/300"},
    {Id:2,Name:"Nature",Image:"https://picsum.photos/id/236/200/300"},
    {Id:3,Name:"Nature",Image:"https://picsum.photos/id/234/200/300"},
    {Id:4,Name:"Nature",Image:"https://picsum.photos/id/233/200/300"},
    {Id:5,Name:"Nature",Image:"https://picsum.photos/id/232/200/300"},
    {Id:6,Name:"Nature",Image:"https://picsum.photos/id/231/200/300"},
    {Id:7,Name:"Nature",Image:"https://picsum.photos/id/230/200/300"},
    {Id:8,Name:"Nature",Image:"https://picsum.photos/id/229/200/300"},
    {Id:9,Name:"Nature",Image:"https://picsum.photos/id/228/200/300"},
    {Id:10,Name:"Nature",Image:"https://picsum.photos/id/227/200/300"},
    {Id:11,Name:"Nature",Image:"https://picsum.photos/id/222/200/300"},
    {Id:12,Name:"Nature",Image:"https://picsum.photos/id/225/200/300"},
    {Id:13,Name:"Nature",Image:"https://picsum.photos/id/223/200/300"},
    {Id:14,Name:"Nature",Image:"https://picsum.photos/id/221/200/300"},
    {Id:15,Name:"Nature",Image:"https://picsum.photos/id/220/200/300"},
    {Id:16,Name:"Nature",Image:"https://picsum.photos/id/219/200/300"},
    {Id:17,Name:"Nature",Image:"https://picsum.photos/id/218/200/300"},
    {Id:18,Name:"Nature",Image:"https://picsum.photos/id/217/200/300"},
    {Id:19,Name:"Nature",Image:"https://picsum.photos/id/216/200/300"},
    {Id:20,Name:"Nature",Image:"https://picsum.photos/id/215/200/300"},
]


function Animals() {
    return (
        <>
        <div className="img-item">
            {
                Data.map(item=>{
                    return(
                        <div className="img-details">
                         <img src={item.Image} alt={item.Id} />   
                         <p className="img-name">{item.Name}</p>                   
                         </div>
                    )
                })
              }
        </div>
        </>
    )
}

export default Animals
