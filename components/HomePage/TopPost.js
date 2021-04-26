import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    
    logoDiv: {
        height: '100%'
    },
    container: {
        display: 'flex',
        left:'0',
        width:'100%',
        height:'769px',
backgroundImage:"url('/bg.png')"
    }
}))
export default function TopPost() {
const styles=useStyles()
  return (
    <div className={styles.container}>
    </div>
  )
}
