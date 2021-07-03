import { withStyles } from '@material-ui/styles';
import React from 'react';
import styles from './styles';

function TopBar(props) {
  const { classes } = props;
  return (
    <div className={classes.headerSection}>
      <div className={classes.headerWrapper}>
        <div className={classes.header}>Where in the world?</div>
        {/* <div className={classes.rightSection}>
          <div className={classes.bulbIcon}>
            <i class="far fa-lightbulb"></i>
          </div>
          <span>Light Mode</span>
        </div> */}
      </div>
    </div>
  );
}

export default withStyles(styles)(TopBar);
