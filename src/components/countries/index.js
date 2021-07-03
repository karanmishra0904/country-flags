import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

function Countries(props) {
  const { classes, loading, filteredCountryData, searchTerm } = props;
  // debugger;

  const filterData = filteredCountryData.filter((item) => {
    if (searchTerm === '') {
      return item;
    } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
  });

  return (
    <div className={classes.cardWrapper}>
      {loading ? (
        <div>....Loading</div>
      ) : (
        filteredCountryData &&
        filterData.map((item) => {
          const { name, region, population, capital, flag } = item;
          return (
            <div className={classes.cardSection} key={Math.random() * 1000}>
              <div className={classes.imageSection}>
                <img src={flag} alt="flag" />
              </div>
              <div className={classes.textSection}>
                <h3>{name}</h3>
                <p>
                  <span>Population:</span>&nbsp;{population.toLocaleString()}
                </p>
                <p>
                  <span>Region:</span>&nbsp;
                  {region}
                </p>
                <p>
                  <span>Capital:</span>&nbsp;{capital}
                </p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default withStyles(styles)(Countries);
