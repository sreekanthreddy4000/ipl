import React from 'react'
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
  const getMatchStatusClassName = status =>
    status === 'won' ? 'match-won' : 'match-lost'
  const matchStatusClassName = `match-status ${getMatchStatusClassName(
    matchStatus,
  )}`
  return (
    <li>
      <div className="container">
        <img
          className="team-logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="team-name">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={matchStatusClassName}>{matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard
