import React from 'react'
import Container from '@material-ui/core/Container';

class ChatContainer extends React.Component {
  state = {
    text: ''
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({ text: e.target.value })
  }

  render =() =>{
    return(
      <Container maxWidth="sm">
        <div className="newDrawingForm">
          <form onSubmit={this.handleSubmit}>
            <label>Type Something</label>
            <br/>
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <input type="submit"/>
          </form>
        </div>
      </Container>
    )
  }
}

export default ChatContainer