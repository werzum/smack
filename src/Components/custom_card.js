import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CustomCard(props) {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Switch
          checked={props.active}
          onClick={() => props.toggleActive(props.index)}
          name="Active"
          color="primary"
        />
      </CardActions>
      <Button onClick={() => props.sound.play()}>
        <PlayCircleFilledIcon />
      </Button>
    </Card>
  );
}
