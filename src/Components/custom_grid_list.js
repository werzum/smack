import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomCard from "./custom_card"

const useStyles = makeStyles((theme) => ({
root: {
display: 'flex',
flexWrap: 'wrap',
justifyContent: 'space-around',
overflow: 'hidden',
backgroundColor: theme.palette.background.paper,
},
gridList: {
width: 500,
height: 450,
},
customCard: {
  margin: 10,
  width: "20%"
}
}));

export default function CustomGridList(props) {
const classes = useStyles();

return (
<div>
  <Grid container direction="row">
    {props.soundArray.map((tile) => (
      <Grid item className={classes.customCard}>
        <CustomCard className={classes.customCard} name={tile.name} active={tile.active} 
        index={tile.index} toggleActive={props.toggleActive}
        sound={tile.sound}/>
      </Grid>
    ))}
  </Grid>
</div>
);
}