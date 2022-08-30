import './index.css'

const Repositoryitem = props => {
  const {repositoryDetails} = props
  const {
    avatarUrl,
    forksCount,
    issuesCount,
    name,
    starsCount,
  } = repositoryDetails
  return (
    <li className="repos-li">
      <img className="repos-img" src={avatarUrl} alt={name} />
      <h1 className="name">{name}</h1>
      <div className="stars-div">
        <img
          className="stars-img"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt=" stars"
        />
        <p className="start-p">{starsCount} stars</p>
      </div>
      <div className="stars-div">
        <img
          className="stars-img"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt=" forks"
        />
        <p className="start-p">{forksCount} forks</p>
      </div>
      <div className="stars-div">
        <img
          className="stars-img"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt=" open issues"
        />
        <p className="start-p">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default Repositoryitem
