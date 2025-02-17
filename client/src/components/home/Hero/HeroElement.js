import React from 'react';
import HeroHeader from './HeroHeader';
import HeroInput from './HeroInput';
import HeroButton from './HeroButton';
import Search from './Search';
import './Hero.css';


const HeroElement = props => {
  return (
    <>
      <HeroHeader appName="CineView" appSlug="Real People. Real Reviews." />
      <div className="landing-page-route-wrapper">
        <HeroInput
          handleChange={props.handleChange}
          randomTitle={props.randomTitle}
          label="Search for Movies:"
        />
        <HeroButton
          buttonLabel="Search"
          searchCriteria={props.searchCriteria}
          searchHandler={props.searchHandler}
        />
      </div>

        <Search 
            className={props.className}
            getReleaseYear={props.getReleaseYear}
            headerLabel="Search Results:"
            resultLength={props.resultLength}
            searchCriteria={props.searchCriteria}
            searchResults={props.searchResults}
        />
    </>
  );
};

export default HeroElement;
