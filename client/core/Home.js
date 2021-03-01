import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import unicornbikeImg from './../assets/images/unicornbike.jpg'


export default function Home(){
  const classes = useStyles()
    return (
        <Card className={classes.card}>
          <Typography variant="h2" className={classes.title}>
            Home Page
          </Typography>
          <CardMedia className={classes.media} image={unicornbikeImg} title="Unicorn Bicycle"/>
          <Typography variant="body2" component="p" className={classes.credit} color="textSecondary">Photo by <a href="https://unsplash.com/@boudewijn_huysmans" target="_blank" rel="noopener noreferrer">Boudewijn Huysmans</a> on Unsplash</Typography>
          <CardContent>
            <Typography variant="body1" component="p">
              Welcome to the MERN Skeleton home page.
            </Typography>
          </CardContent>
        </Card>
    )
}

