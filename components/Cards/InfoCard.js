import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    container: {
        position: 'static',
        width: '582px',
        maxWidth:'95%' ,
        height: '159px',
        background: '#FFFFFF',
        margin: '0px 32px',
        [theme.breakpoints.up('md')]: {
            '&:hover': {
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)',
                borderRadius: '8px'
            },
        },
        [theme.breakpoints.down('md')]: {
            margin: '0px 8px',

            width: '95%',
            height: '138px',
        }
    },
    subHeader: {
        fontSize: '16px',
        lineHeight:'24px',
        fontWeight:'400',
        color: '#000000',
        marginTop: '8px',
        paddingLeft:'16px',
        [theme.breakpoints.down('md')]: {
            marginTop: '8px',
            fontSize: '14px',
        lineHeight:'20px',
        }
    },
    title: {
        fontSize: '20px',
        lineHeight:'28px',
        fontWeight:'700',
        color: '#000000',
        paddingTop: '16px',
        paddingLeft:'16px',
        [theme.breakpoints.down('md')]: {
            paddingTop: '16px',
            fontSize: '16px',
        lineHeight:'24px',
        }
    },
    img: {
        margin: 'auto',
        marginTop: '16px',
        //marginLeft: '16px',
        position: 'absolute',
        [theme.breakpoints.down('md')]: {
            //marginTop: '16px',
           // marginLeft: '6px',
        }
    }
}))
export default function CategoryCard(props) {
    const styles = useStyles()
    return (
        <div className={styles.container}>
            <a href='#'>

                <h4 className={styles.title}>{props.title}</h4>
                <p className={styles.subHeader}>{props.subtitle}</p>
            </a>
        </div>
    )
}
