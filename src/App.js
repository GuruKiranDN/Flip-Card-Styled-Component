import React, { Component } from 'react';
import sc from 'styled-components';


class App extends Component {
  render() {
    return (
      <div className="App">
       <FlipCard>
       <Hover>
       <FlipCardInner className ="element">
          <FlipcardFrontandBack>
           <FlipcardFront>{<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvslSVQuzPcCLmMOW4iGsaieZbqM7nXwr8BbI4BiHVQ9XvMb5" alt="Avatar" ></img>}</FlipcardFront>
           </FlipcardFrontandBack>
           <FlipcardFrontandBack>
            <FlipcardBack>
           {<h1>John Doe</h1>}
           {<p>Architect & Engineer</p>}
           {<p>We love that guy</p>}
           </FlipcardBack>
           </FlipcardFrontandBack>
          
</FlipCardInner>
          </Hover>
         </FlipCard>
         
       </div>
    );
  }
}


const FlipCard=sc.div`
  background-color: transparent;
  width: 250px;
  height: 250px;
  perspective: 1000px;
  position: absolute;
  perspective: 800;
  -webkit-perspective:800;

`;


const FlipCardInner =sc.div`
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  --webkit-transform-style:preserve-3d;
  position: relative;
  transition: all 2s ease;
  text-align: center;
`;

const Hover=sc.div`

 &:hover {
  transform: rotateY(180deg);

}`;


const FlipcardFrontandBack = sc.div` 
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
-webkit-backface-visiblity:hidden;
`;
const FlipcardFront = sc.div` 
background-color: #bbb;
color: black;
`;
const FlipcardBack= sc.div` 
  position: relative; 
  transform: rotateY(180deg);
  background-color: #2980b9;
  color: white;
  `;


/*</style>
</head>
<body>

<h1>Card Flip with Text</h1>
<h3>Hover over the image below:</h3>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>

</body>
</html>*/

export default App;
