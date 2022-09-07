import React from 'react'
import Card2 from './Card2'

function ListCard2() {
    var Articles = [{
        id: 'art1',
        name: 'article1',
        type: '00',
        prix: '00',
        img: "/imgarticles/art1.png", 
        description: '...',     
      }, {
        id: 'art2',
        name: 'article2',
        type: '00',
        prix: '00',
        img: "/imgarticles/art2.png",  
        description: '...', 
    
        
      }, {
        id: 'art3',
        name: 'article3',
        type: '00',
        prix: '00',
        img: "/imgarticles/art3.png",
        description: '...',   
        
      }, {
        id: 'art4',
        name: 'article4',
        type: '00',
        prix: '00',
        img: "/imgarticles/art4.png",   
        description: '...',
        }, {
            id: 'art5',
        name: 'article5',
        type: '00',
        prix: '00',
        img: "./imgarticles/art5.png", 
        description: '...', 
        
      }, {
        id: 'art6',
        name: 'article6',
        type: '00',
        prix: '00',
        img: "./imgarticles/art6.png",
        description: '...',
        
      }, {
        id: 'art7',
        prix: '00',
        name: 'article7',
        type: '00',
        img: "./imgarticles/art7.png",
        description: '...',
      }, {
        id: 'art8',
        prix: '00',
        name: 'article8',
        type: '00',
        img: "./imgarticles/art8.png",
        description: '...',
      }];
  return (
    <div className='row justify-content-center'>
        
        {Articles.map((item,index)=>{
            return (
                
                <Card2
                item={item}
                key={index}
                />
               
            
            )
        }
        )}


    </div>
  )
}

export default ListCard