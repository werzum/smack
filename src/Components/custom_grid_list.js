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
}));

export default function CustomGridList(props) {
const classes = useStyles();

return (
<div>
  <Grid cols={3} container direction="row">
    {props.soundArray.map((tile) => (
      <Grid item>
        <CustomCard name={tile.name} active={tile.active} 
        index={tile.index} toggleActive={props.toggleActive}
        sound={tile.sound}/>
      </Grid>
    ))}
  </Grid>
</div>
);
}