import { makeStyles } from '@material-ui/core/styles';
import CategoryCard from '../Cards/CategoryCard';
const useStyles = makeStyles((theme) => ({
    container: {
        left: '0',
        width: '100%',
        height: '231px',
        backgroundColor: "#F6F6F6",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
        [theme.breakpoints.down('md')]: {
            fontSize: '28px',
            lineHeight: '36px',
            margin: '0px 45px'
        },
    },
    subtitle: {
        fontSize: '18px',
        lineHeight: '28px',
        letterSpacing: '0px',
        width: '100%',
        textAlign: 'center',
        margin: 'auto',
        marginTop: '3px',
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
            lineHeight: '20px',
            margin: 'auto',
            width:'328px'
        },
    },
    button: {
        width: '343px',
        height: '53px',
        backgroundColor: '#000000',
        color: '#fff',
        border: 'none',
        fontSize: '18px',
        lineHeight: '24px',
        marginTop: '36px',
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            lineHeight: '20px',
            marginTop: '16px',
            width: '325px',
            height: '36px',
        }
    }
}))
export default function TopPost() {
    const styles = useStyles()
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.heading}>Not sure where to start? We can help</h1>
                <p className={styles.subtitle}>Let's understand you a bit by asking a few questions before you talk to our experts</p>
            </div>
            <a href='#'><button className={styles.button}>Get Started</button></a>
        </div>
    )
}
