import React, { Component } from 'react';
import Poll from 'react-polls';

// Declaring poll question and answers
const pollQuestion = 'Vocal del grupo?'
const pollAnswers = [
  { option: 'Karya', votes: 8 },
  { option: 'Isabella', votes: 2 },
  { option: 'Alexa', votes: 9 }
]

class Polling extends Component {
  // Setting answers to state to reload the component with each vote
  state = {
    pollAnswers: [...pollAnswers]
  }

  // Handling user vote
  // Increments the votes count of answer when the user votes
  handleVote = voteAnswer => {
    const { pollAnswers } = this.state
    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++
      return answer
    })
    this.setState({
      pollAnswers: newPollAnswers
    })
  }

  render () {
    const { pollAnswers } = this.state
    return (
      <div>
        <Poll question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} noStorage={true} customStyles={{"align": "center", "questionBold": true, "questionColor":  "#1d71b8", "questionSeparator": true, "questionSeparatorWidth":"question", "theme": "blue"}}/>
      </div>
    );
  }
};

export default Polling;

// "#1d71b8"


// import React, {useState, Fragment} from 'react';
// import Poll from 'react-polls';


// const Polling = () => {

//   //Declaring poll question and answers
//   const pollQuestion = '¿Vocal del grupo?'

//   const posibleAnswers = [
//       { option: 'Karya', votes: 8 },
//       { option: 'Martina', votes: 2 },
//       { option: 'Isabella', votes: 10 }
//   ]

//   const [pollAnswers, setPollAnswers] = useState([...posibleAnswers])

//   // Handling user vote
//   // Increments the votes count of answer when the user votes
//   const handleVote = voteAnswer => {
//       const newPollAnswers = posibleAnswers.map(answer => {
//       if (answer.option === voteAnswer) answer.votes++
//       return answer
//       })

//       setPollAnswers({
//       pollAnswers: newPollAnswers
//       })
//   }

//   return ( 
//     <Fragment>
//       <h2>Votación</h2>
//       <Poll question={pollQuestion} answers={pollAnswers} onVote={handleVote} />
//     </Fragment>
    
//    );
// }
 
// export default Polling;
