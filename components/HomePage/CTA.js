import { makeStyles } from '@material-ui/core/styles';
import CategoryCard from '../Cards/CategoryCard';
const useStyles = makeStyles((theme) => ({

  logoDiv: {
    height: '100%'
  },
  container: {
    left: '0',
    width: '100%',
    height: '231px',
    backgroundColor: "#F6F6F6",
    // display: '-webkit-box',
    // display: '-ms-flexbox',
    // display: '-webkit-flex',
     display: 'flex',
     flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    position: 'absolute',
    width: '725px',
    height: '399px',
    // top: '50%',
    // right: '50%',
    // transform: 'translate(50%,-50%)',
    textAlign: 'center',
    background: '#FFFFFF',
  },
  heading: {
    marginTop: '32px',
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeight: '44px',
    color: '#000000',
    margin: 'auto',
    textAlign: 'center',

    style: 'normal',
  },
  subtitle: {
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '0px',
    width: '100%',
    textAlign: 'center',
    margin: 'auto',
    marginTop:'3px',
  },
  
}))
export default function TopPost() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
        <div>
        <h1 className={styles.heading}>Not sure where to start? We can help</h1>
        <p className={styles.subtitle}>Let's understand you a bit by asking a few questions before you talk to our experts</p>
   </div>
    </div>
  )
}
