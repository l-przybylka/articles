import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function MultiActionAreaCard({ article }) {

  return (
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="140"
    //       image={article.headerImage}
    //       alt="green iguana"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {article.header}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {article.intro}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography> {article.header} {article.intro}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      {article.article}
      </Typography>
    </AccordionDetails>
  </Accordion>
  );
}