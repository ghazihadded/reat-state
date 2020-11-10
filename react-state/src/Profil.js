import React from 'react';



function Profil(props){
 
return (
     <div>
    <section  >
        <div className='card' style={{width: "18rem"}}>
        <img className="card-img-top" src="/images.jpg"  alt={props.name} />
        <div className="card-body">
     <h1>{props.name} </h1>
      <h2>{props.bio} </h2>
      <div>{props.profession} </div>
         </div>
         
        </div>
 </section>
     
    </div>
)

}


export default Profil 