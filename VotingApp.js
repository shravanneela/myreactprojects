import React, { useState } from "react";
import "./VotingApp.css";

function VotingApp() {
  const [candidates, setCandidates] = useState([
    { name: "Candidate A", votes: 0 },
    { name: "Candidate B", votes: 0 },
    { name: "Candidate C", votes: 0 }
  ]);

  // Handle voting
  const vote = (index) => {
    const updatedCandidates = [...candidates];
    updatedCandidates[index].votes += 1;
    setCandidates(updatedCandidates);
  };

  // Find winner
  const getWinner = () => {
    let maxVotes = Math.max(...candidates.map(c => c.votes));
    let winners = candidates.filter(c => c.votes === maxVotes);

    if (maxVotes === 0) return "No votes yet";
    if (winners.length > 1) return "Tie between candidates";

    return `${winners[0].name} is winning`;
  };

  return (
    <div className="voting-container">
      <h2>Voting Application</h2>

      {candidates.map((candidate, index) => (
        <div key={index} className="candidate">
          <span>{candidate.name} - Votes: {candidate.votes}</span>
          <button onClick={() => vote(index)}>Vote</button>
        </div>
      ))}

      <h3>Result: {getWinner()}</h3>
    </div>
  );
}

export default VotingApp;
