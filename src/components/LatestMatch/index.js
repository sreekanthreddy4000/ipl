import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData
  return (
    <div className="latest-match-container">
      <h1 className="heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-details-logo-container">
          <div className="match-details-1">
            <h1 className="team-name">{competingTeam}</h1>
            <p className="match-date">{date}</p>
            <p className="match-venue">{venue}</p>
            <p className="match-result">{result}</p>
          </div>
          <img
            className="image"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="line" />
        <div className="match-details-2">
          <p className="heading">First Innings</p>
          <p className="value">{firstInnings}</p>
          <p className="heading">Second Innings</p>
          <p className="value">{secondInnings}</p>
          <p className="heading">Man Of The Match</p>
          <p className="value">{manOfTheMatch}</p>
          <p className="heading">Umpires</p>
          <p className="value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
