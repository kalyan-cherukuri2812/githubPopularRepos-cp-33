import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

import Languagefilteritem from '../LanguageFilterItem'
import Repositoryitem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    langbtnclickstatus: languageFiltersData[0].id,
    reposList: [],
    loading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {langbtnclickstatus} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${langbtnclickstatus}`,
    )
    const respData = await response.json()
    const updatedrespData = respData.popular_repos.map(each => ({
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      id: each.id,
      issuesCount: each.issues_count,
      name: each.name,
      starsCount: each.stars_count,
    }))
    console.log(updatedrespData)
    this.setState({reposList: updatedrespData, loading: false})
  }

  languagebtnClick = id => {
    this.setState({loading: true})
    this.setState({langbtnclickstatus: id}, this.getData)
  }

  render() {
    const {langbtnclickstatus, reposList, loading} = this.state
    console.log(reposList)
    return (
      <div className="bg-container">
        <h1 className="main-heading">Popular</h1>
        <ul className="lfi-ul">
          {languageFiltersData.map(each => (
            <Languagefilteritem
              key={each.id}
              details={each}
              clicked={langbtnclickstatus === each.id}
              languagebtnClick={this.languagebtnClick}
            />
          ))}
        </ul>
        {loading === true ? (
          <div testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="lfi-ul-2">
            {reposList.map(each => (
              <Repositoryitem key={each.id} repositoryDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
