import React, { Component } from 'react';
import Poll from 'react-polls';
import SweetAlert from "react-bootstrap-sweetalert";

class Polling extends Component {
  // Setting answers to state to reload the component with each vote
  state = {
    pollAnswers: [...this.props.filterParentMeeting.pollingA],
    error:false,
    errorType:'',
    userParentsVote:[...this.props.filterParentMeeting.userParentsVote],
    user: this.props.login.userName
  }

  // Handling user vote
  // Increments the votes count of answer when the user votes
  handleVote = voteAnswer => {
    const { pollAnswers, user, userParentsVote } = this.state
    // let usersVote=[this.props.filterParentMeeting.userParentsVote]
    
    const filterUser = this.props.filterParentMeeting.userParentsVote.includes(this.props.login.userName)
    
    if(!filterUser){
      const newPollAnswers = pollAnswers.map(answer => {
        if (answer.option === voteAnswer) answer.votes++
        return answer
      })

      const newUserVote = [this.props.filterParentMeeting.userParentsVote.push(this.props.login.userName)]

      console.log(newUserVote)

      this.setState({
        pollAnswers: newPollAnswers,
        userParentsVote: [...this.props.filterParentMeeting.userParentsVote], newUserVote
      })

      // this.props.setFilterParentMeeting.userParentsVote(userParentsVote)
      localStorage.setItem("meetings", JSON.stringify(this.props.meetings))
  
    } else if(filterUser){
      this.setState({
        error:true,
        errorType:'Usted ya emitio su voto, no puede volver a votar'
      })
    }
  }

  render () {
    const { pollAnswers, error, errorType } = this.state
    return (
      <div>
        {!error ? 
        
        <Poll question={this.props.filterParentMeeting.pollingQ} answers={this.props.filterParentMeeting.pollingA} onVote={this.handleVote} noStorage={true} customStyles={{"align": "center", "questionBold": true, "questionColor":  "#1d71b8", "questionSeparator": true, "questionSeparatorWidth":"question", "theme": "blue"}}/>

        :  
        <SweetAlert
          danger
          title="Error"
          onConfirm={() => {
            return this.setState({error:false});
          }}
        >
          {errorType}
        </SweetAlert>}
      </div>
    );
  }
};

export default Polling;

