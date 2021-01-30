import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import StopIcon from '@material-ui/icons/Stop';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import {IconButton, ButtonGroup} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
root: {
display: 'flex',
flexWrap: 'wrap',
justifyContent: 'space-around',
overflow: 'hidden'
},
buttonGroup:{
  backgroundColor:"white"
}
}));

export default function MusicPlayer(props) {
const classes = useStyles();

return (
<div className={classes.root}>
  <ButtonGroup size="large" className={classes.buttonGroup}>
    <IconButton aria-label="reset" size="small">
      <RotateLeftIcon />
    </IconButton>
    <IconButton aria-label="play" size="medium" key={props.playing.tostring} onClick={()=>props.start()}>
        {props.playing? <PauseCircleFilledIcon/> : <PlayCircleFilledIcon />}
    </IconButton>
    <IconButton aria-label="reset" size="small" onClick={()=>props.stop()}>
      <StopIcon />
    </IconButton>
  </ButtonGroup>
</div>
);
}