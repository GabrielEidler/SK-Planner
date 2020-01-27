import React, {useState, useEffect} from 'react';  


import './App.css';
import './global.css';
import './Main.css';
import './Sidebar.css';

function App() {



  const  [asideColor, setAsideColor] = useState('');
  const [count, setCount] = useState(0);

  async function HandleChangeColor(){
    
  
  if(count === 0){
    setAsideColor('rgba(37, 107, 22, 0.7)');
  }else if(count === 1){
    setAsideColor('rgba(74, 77, 82, 0.7)');
  }else if(count === 2){
    setAsideColor('rgba(179, 30, 0, 0.7)');
  }else if(count === 3){
    setAsideColor('rgba(8, 119, 192, 0.884)');
  }
  
  setCount(count + 1);
   if(count === 3) setCount(0);
    console.log(count);
   return asideColor;
  }


 /*  useEffect(()=>{
    document.title = `You clicked ${count} times`;
    //set novos valores para as variaveis
  }, [count]) */

  

  return (
 
      <div id="app">
      
          {/* Profile here */}
          <aside style={{backgroundColor:asideColor}}>
          <div>
            <img src="https://avatars3.githubusercontent.com/u/37424747?s=460&v=4" alt=""/>
          </div>

          <div className="profile-block">
            <strong onClick={HandleChangeColor}>
              Gabriel Eidler
            </strong>
          </div>

          <div className="profile-block" id="bio">
            <p>Meu Objetivo é me manter em estado de "Eudemonia"</p>
          </div>
            
          </aside>

          {/* Planner Here */}
          <main style={{backgroundColor:asideColor}}>
            <div className="outer-block">
              <div className="habit-block">
                  <div id="habitBall"/>
                  <div id="habitBall"/>
                  <div id="habitBall"/>
              </div>
              
              <div id="lineDivider"/>

              <div className="goal-block" >
                <div id="goalBox"></div>
                <div id="goalBox"></div>
                <div id="goalBox"></div>
                <div id="goalBox"></div>
              </div>
            </div>

          </main>
      </div>
  );
}

export default App;
