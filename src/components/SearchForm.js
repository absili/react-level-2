import React, {useState} from 'react'

/**
* component form search user
* @param handleSearch : handle event search user on click
*/
export const SearchForm = props => {
  const [uLogin, setuLogin] = useState('');

  /**
  * function handle click search - call global function click in parent component
  */
 const handleClicksearch = () => {
     props.handleSearch(uLogin);
    console.log("uLogin",uLogin);
 }

  return (
    <>
      <input onClick={e => handleClicksearch()} type="button" value="search"/>
      <input type="text" placeholder="Username" onChange={e => setuLogin(e.target.value)} />
    </>
  )
}

export default SearchForm