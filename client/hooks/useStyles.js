import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5)
    },
    title: {
      padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
      color: theme.palette.openTitle
    },
    media: {
      minHeight: 400
    },
    credit: {
      padding: 10,
      textAlign: 'right',
      backgroundColor: '#ededed',
      borderBottom: '1px solid #d0d0d0',
      '& a':{
        color: '#3f4771'
      } 
    }
  }))

export default useStyles