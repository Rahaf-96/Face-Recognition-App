import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png';

const Navigation = ({onRouteChange, isSignedIn}) => {
 
      if (isSignedIn) {
         return (
         <nav style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin:'10px 10px'}}> 
            <div className="ma4 mt0" >
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                     <div className="Tilt-inner pa2"> 
                        <img style={{paddingTop: '2px', width: '100px'}} alt="logo icon" src={brain}/> 
                     </div>
               </Tilt>
            </div>
               <p  className='f3 ph0 mh0 link dim black underline pointer' onClick={()=> onRouteChange('signout')}>Sign Out</p>
         </nav> 
         );
      } else {
         return (
         <nav style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin:'10px 10px'}}> 
         <div className="ma4 mt0" >
         <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                  <div className="Tilt-inner pa2"> 
                     <img style={{paddingTop: '2px', width: '100px'}} alt="logo icon" src={brain}/> 
                  </div>
            </Tilt>
         </div>
         <div style={{display: 'flex', flexDirection: 'flex-end', margin:'10px 10px'}}>
            <p style={{ margin:'20px'}} className='f3 ph0 mh0 link dim black underline pointer' onClick={()=> onRouteChange('signin')}>Sign In</p>
            <p style={{ margin:'20px'}} className='f3 ph0 mh0 link dim black underline pointer' onClick={()=> onRouteChange('register')}>Register</p>
            </div>
      </nav> 
    );  
     } 

}

export default Navigation;