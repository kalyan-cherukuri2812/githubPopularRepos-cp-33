import './index.css'

const Languagefilteritem = props => {
  const {details, languagebtnClick, clicked} = props
  const {id, language} = details
  const lbtnclicked = () => {
    languagebtnClick(id)
  }

  return (
    <li className="lfi-list">
      <button
        onClick={lbtnclicked}
        type="button"
        className={clicked === true ? 'lfi-btn lfi-border' : 'lfi-btn'}
      >
        {language}
      </button>
    </li>
  )
}

export default Languagefilteritem
