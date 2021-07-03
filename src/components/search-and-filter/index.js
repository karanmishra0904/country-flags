import { withStyles } from '@material-ui/styles';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import styles from './styles';

const menuValues = [
  {
    valName: 'all',
    region: 'All Countries',
  },
  {
    valName: 'africa',
    region: 'Africa',
  },
  {
    valName: 'americas',
    region: 'Americas',
  },
  {
    valName: 'asia',
    region: 'Asia',
  },
  {
    valName: 'europe',
    region: 'Europe',
  },
  {
    valName: 'oceania',
    region: 'Oceania',
  },
];

function SearchAndFilter(props) {
  const { classes, status, setStatus, searchTerm, setSearchTerm } = props;

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={classes.searchContainer}>
      <TextField
        className={classes.celebSearchField}
        id="outlined-search"
        label="Search for a country"
        type="search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <Select
        className={classes.textField}
        classes={{ select: classes.selectDiv }}
        labelId="region"
        id="region-select"
        value={status}
        onChange={statusHandler}
      >
        {menuValues.map((menu) => (
          <MenuItem value={menu.valName} key={Math.random() * 1000}>
            {menu.region}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default withStyles(styles)(SearchAndFilter);
