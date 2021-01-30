// import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
// import Typography from 'material-ui/styles/typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

// export default function TextCard() {
    // const [expanded, setExpanded] = React.useState(true);
  
    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };

    // let theme = createMuiTheme();
    // theme = responsiveFontSizes(theme);

//   return (
//     <Card>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//                 <CardContent>
//                     <ThemeProvider theme={theme}>
//                         <Typography>
//                             An app to help us stay fit without training with a real partner by generating an audio-guided work-out session. 
//                             Select the moves you want to practice, the time between them and the overall number of moves. 
//                             Then, start your workout
//                         </Typography>
//                     </ThemeProvider> 
//                 </CardContent>
//             </Collapse>
//         </Card>
//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

export default function TextCard() {

  const [expanded, setExpanded] = React.useState(true);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Card>
                    <CardHeader
                title="Instructions"
                onClick={handleExpandClick}/>
      <Collapse in={expanded} timeout="auto" unmountOnExit>

                <CardContent onClick={handleExpandClick}> 
                    <ThemeProvider theme={theme}>
                        <Typography>
                            An app to help us stay fit without training with a real partner by generating an audio-guided work-out session. 
                            Select the moves you want to practice, the time between them and the overall number of moves. 
                            Then, start your workout
                        </Typography>
                    </ThemeProvider> 
                </CardContent>
        </Collapse>

    </Card>
  );
}
