import { makeStyles } from '@material-ui/core/styles';
import InfoCard from './../Cards/InfoCard'
const useStyles = makeStyles((theme) => ({
    container: {
        left: '0',
        width: '100%',
        height: 'auto',
        backgroundColor: "#fff",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    heading: {
        marginTop: '80px',
        marginBottom: '40px',
        fontWeight: '700',
        fontSize: '55px',
        lineHeight: '52px',
        color: '#000000',
        margin: 'auto',
        textAlign: 'center',
        style: 'normal',
        [theme.breakpoints.down('md')]: {
            fontSize: '28px',
            lineHeight: '36px',
            margin: '0px 45px',
            marginTop: '40px',

        },
    },
    card: {
        marginTop: '12px',
        margin: 'auto',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
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
            width: '328px'
        },

    },
    imageDiv: {
        width: '49%',
        float: 'right',

        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
    },
    image: {
        width: '460px',
        maxWidth: '100%',
        float: 'right',
        //marginLeft:'auto',
        [theme.breakpoints.down('md')]: {
            width: '95%',
            //marginLeft:'auto',
            float: 'none',
            margin: 'auto',
        },

    },
    contentDiv: {
        width: '49%',
        float: 'left',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
    }
}))
export default function HowItWorks() {
    const styles = useStyles()
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.heading}>How It Works</h1>
            </div>
            <div className={styles.card}>
                <div className={styles.imageDiv}>
                    <img className={styles.image} src='/consultant.png' alt='doctor' />
                </div>
                <div className={styles.contentDiv}>
                    <InfoCard title='1. Help us know you' subtitle='Know what youre looking for? Browse ourcarefully crafted solutions. Not sure what will work for you? Schedule a free online consultation with our renowned experts' />
                    <InfoCard title='1. Help us know you' subtitle='Know what youre looking for? Browse ourcarefully crafted solutions. Not sure what will work for you? Schedule a free online consultation with our renowned experts' />
                    <InfoCard title='1. Help us know you' subtitle='Know what youre looking for? Browse ourcarefully crafted solutions. Not sure what will work for you? Schedule a free online consultation with our renowned experts' />


                </div>
            </div>
        </div>
    )
}
