import React, { useState } from 'react';

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
    // addEventListener(change, )
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //TODO: Make sure we call callback from parent element
    onFormSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <input type="text" placeholder="Video Search" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
}

export default SearchBar