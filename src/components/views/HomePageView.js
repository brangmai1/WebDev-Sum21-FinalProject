import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import University from './images/university.jpeg';
import bestUni from './images/bestuni.png';
import Library from './images/library.jpeg';
import Award from './images/award.jpeg';
import Campus1 from './images/campus1.jpeg';
import Students from './images/students.jpeg';
import Graduation from './images/graduation.jpeg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif', 
    fontSize: '35px', 
    color: 'white'
  },
  appBar:{
    backgroundColor: '#003366',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    fontSize: '30px',
    backgroundColor: '',
    color: '#003366',
    fontFamily: 'Bungee Outline',
    justifyContent: 'center',
    width: "100%",
    marginTop: "0px",
  },
  links:{
    textDecoration: 'none',
  },
  unipic:{
    justifyContent: 'center',
    display: 'flex',
    width: "100%",
    height: "100%",
    marginTop: '0px',
  },
  bestuni: {
    justifyContent: 'center',
    display: 'flex',
    padding: '20px',
    marginTop: '100px',
    backgroundColor: 'white',
  },
  award: {
    width: '10px',
    height: '10px',  
  },
  pictures: {
    display: 'flex',
    height: '200px',
    width: '200px',
    padding: '5px',
    boarder: '2px',
  },
  footer:{
    backgroundColor: '#003366',
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: '100px',
    width: '100%',
    color: 'white',    
  }
  
}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            <strong>BU</strong> [CRUD App]
          </Typography>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      
      <div className={classes.greeting}><h1>Brang University</h1></div>
      <div className={classes.unipic}>
        <img src={University} alt={"university"} />
      </div>
     
      
      <div className={classes.bestuni}>
        <div className={classes.pictures}>
          <img src={Students} alt={"Students"} />
        </div>
        <div className={classes.pictures}>
          <img src={Library} alt={"Library"}  /> 
        </div>
          <img src={bestUni} alt={"The best university"} />
        <div className={classes.pictures}>
          <img src={Campus1} alt={"University"}  /> 
        </div>
        <div className={classes.pictures}>  
          <img src={Graduation} alt={"Graduation"} />     
        </div>
      </div>
      
      <div className={classes.footer} >
        <h3>Brang University</h3>
        <h5>New York City, USA</h5>
      </div>
      
    </div>
  );    
}

export default HomePageView;
