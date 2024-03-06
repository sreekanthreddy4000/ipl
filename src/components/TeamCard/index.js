import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails

  return (
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link">
        <img className="team-logo" src={teamImageUrl} alt={name} />
        <h1 className="team-name">{name}</h1>
      </Link>
    </li>
  )
}
export default TeamCard
