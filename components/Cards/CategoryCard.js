import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

  logoDiv: {
    height: '100%'
  },
  container: {
position: 'static',
width: '111px',
height: '130px',
background: '#FFFFFF',
boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)',
borderRadius: '4px',
margin: '0px 32px',
[theme.breakpoints.up('md')]: {
'&:hover': {
      boxShadow: '-1px 6px 20px 0px rgba(0,0,0,0.8)',
      '& img':{
      marginTop:'12px',
      marginLeft:'16px',
      }
    },
},
    [theme.breakpoints.down('md')]: {
      margin: '0px 8px',

        width: '92px',
height: '118px',
    }
  },
subHeader:  {
    width: '111px',
    height: '77px',
    background: '#2A658D',
    borderRadius: '0px',
    [theme.breakpoints.down('md')]: {
        width: '92px',
height: '56px',
    }
  },
  whiteSpace:{
    width: '111px',
    height: '53px',
    background: '#fff',
    borderRadius: '0px',
    [theme.breakpoints.down('md')]: {
        width: '92px',
height: '62px',
    }
  },
  title:{
    fontSize: '12px',
    color: '#fff',
    paddingTop:'42px',
     [theme.breakpoints.down('md')]: {
        paddingTop:'22px',

    }
  },
  img:{
      margin:'auto',
      marginTop:'16px',
      marginLeft:'16px',
      position:'absolute',
      [theme.breakpoints.down('md')]: {
        marginTop:'16px',
        marginLeft:'6px',
    }
  }
}))
export default function CategoryCard(props) {
  const styles = useStyles()
  return (
    <div className={styles.container}>
              <a href='#'>
        <div className={styles.whiteSpace}>
      <img src={props.image} className={styles.img} alt={props.name} />
      </div>
      <div style={{background: props.color,}} className={styles.subHeader}>
      <p className={styles.title}>{props.name}</p>
      </div>
      </a>
    </div>
  )
}
