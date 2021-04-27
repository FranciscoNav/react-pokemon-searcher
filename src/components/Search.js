import React from 'react'

const Search = props => {

  // handleChange = (event)=>{
  //   console.timeLog('i',event.target.value)
  // }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={props.handleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search

//Test Search:
//ivysaur