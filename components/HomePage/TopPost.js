import { makeStyles } from '@material-ui/core/styles';
import CategoryCard from '../Cards/CategoryCard';
const useStyles = makeStyles((theme) => ({

  logoDiv: {
    height: '100%'
  },
  container: {
    left: '0',
    width: '100%',
    height: '769px',
    backgroundImage: "url('/bg.png')",
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: '-webkit-flex',
    display: 'flex',
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
    fontSize: '44px',
    lineHeight: '52px',
    color: '#000000',
  },
  subtitle: {
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '28px',
    letterSpacing: '0px',
    width: '574px',
    textAlign: 'center',
    margin: 'auto'
  },
  subtitle2: {
    //styleName: Heading / Small;
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '32px',
    width: '574px',
    textAlign: 'center',
    marginTop: '32px',
    margin: 'auto'
  },
  categories:{
    marginTop:'12px',
    margin:'auto',
    display:'inline-flex',
  }
}))
export default function TopPost() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Heading Title</h1>
        <h4 className={styles.subtitle}>We are the country’s first holistic wellness platform for men. We talk to men, listen to them and understand their needs</h4>
        <h4 className={styles.subtitle2}>What’s your concern?</h4>
        <div className={styles.categories}>
          <CategoryCard name={'Hair'} image='/hairproduct.png' color='#2A658D'/>
          <CategoryCard name={'Skin'} image='/hairproduct.png' color='#EB9633'/>
          <CategoryCard name={'Weight'} image='/hairproduct.png' color='#007061'/>
        </div>
      </div>
    </div>
  )
}
