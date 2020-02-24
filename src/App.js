import React from 'react';
import Navbar from './Components/Navbar'
//import Canvas from './Components/Canvas'
import DrawingContainer from './Components/DrawingContainer.js'
import ChatContainer from './Components/ChatContainer.js'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      allRooms: [],
      currentRoom: {
        room: {},
        users:[],
        messages: []
      }
    }
  }

  

  render() {
    return(

    <div>
      <Navbar/>
      <DrawingContainer />
      <ChatContainer />
    </div>


    //Pusher Option:
      // <div>
      //   <Navbar/> <br></br>
      //   <div className="main">
      //     {/* <div className="color-guide">
      //       <h5>Color Guide</h5>
      //       <div className="user user">User</div>
      //       <div className="user guest">Guest</div>
      //     </div> */}
      //     <Canvas />
      //   </div>
      // </div>

    )
  }
}

export default App;
