import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    container: {
        position: 'relative',
        width: '346px',
        height: '516px',
        background: '#FFFFFF',
        boxSizzing: 'border-box',
        border: '1px solid #DEDEDE',
        borderRadius: '10px',
        margin: '8px 15px',
        display: 'inline-flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            '&:hover': {
                boxShadow: '-1px 6px 20px 0px rgba(0,0,0,0.8)',
            },
        },
        [theme.breakpoints.down('md')]: {
            margin: '8px 15px',
            width: '280px',
            height: '482px',
        }
    },
    subHeader: {
        width: '111px',
        height: '77px',
        background: '#2A658D',
        borderRadius: '0px',
        [theme.breakpoints.down('md')]: {
            width: '92px',
            height: '56px',
        }
    },
    imageDiv: {
        width: '347px',
        height: '270px',
        background: '#fff',
        borderRadius: '8px',
        background: "url('/product.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        [theme.breakpoints.down('md')]: {
            width: '280px',
            height: '210px',
        },

    },
    title: {
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: '500',
        color: '#000000',
        marginTop: '22px',
        marginLeft: '19px',
        marginBottom: '26px',
        [theme.breakpoints.down('md')]: {
            marginTop: '20px',
            fontSize: '16px',
            lineHeight: '24px',
            marginBottom: '36px',
        }
    },
    rating: {
        width: '58px',
        height: '24px',
        backgroundColor: '#000000',
        margin: 'auto',
        marginTop: '255px',
        marginLeft: '-3px',
        position: 'absolute',
        fontSize: '14px',
        lineHeight: '20px',
        color: '#fff',
        textAlign: 'center',
        paddingTop: '2px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            marginTop: '198px',
            marginLeft: '-3px',
        }
    },
    ratingContent: {
        margin: 'auto',
        display: 'inline-flex'
    },
    newLaunch: {
        width: '99px',
        height: '24px',
        backgroundColor: '#66509A',
        margin: 'auto',
        marginTop: '17px',
        marginLeft: '-3px',
        position: 'absolute',
        fontSize: '14px',
        lineHeight: '16px',
        color: '#fff',
        textAlign: 'center',
        paddingTop: '2px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            backgroundColor: '#2A658D',
            marginTop: '16px',
            width: '87px',
        }
    },
    launchContent: {
        margin: 'auto',
        display: 'inline-flex',
    },
    use: {
        height: '24px',
        width: '100%',
        background: '#F6F6F6',
        display: 'flex'
    },
    for: {
        marginLeft: '18px',
        fontSize: '15px',
        lineHeight: '16px',
        fontWeight: '700',
        color: '#000000',
        marginTop: 'auto',
        marginBottom: 'auto',

        display: 'inline-flex',

    },
    line: {
        border: '1px solid #E6EAEA',
        margin: '0px 16px',
        width: '2px',
        display: 'inline-flex',
    },
    divider: {
        border: '1px solid #E6EAEA',
        width: '100%',
        display: 'block',
    },

    subtitle: {
        marginLeft: '0px',
        fontSize: '15px',
        lineHeight: '16px',
        fontWeight: 'normal',
        color: '#000000',
        marginTop: 'auto',
        marginBottom: 'auto',
        display: 'inline-flex',
    },
    pricing: {
        marginTop: '13px',
        marginLeft: '19px',
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            marginTop: '20px',
        }
    },
    srp: {
        fontSize: '18px',
        lineHeight: '25px',
        fontWeight: '500',
        color: '#030303',
        display: 'inline-flex',
        margintTop: 'auto',
        margintBottom: 'auto',
    },
    mrp: {
        fontSize: '12px',
        lineHeight: '25px',
        fontWeight: '700',
        color: '#828282',
        disply: 'inline-flex',
        textDecorationLine: 'line-through',
        marginLeft: '6px',
        margintTop: 'auto',
        margintBottom: 'auto',
    },
    discount: {
        fontSize: '16px',
        lineHeight: '25px',
        fontWeight: '700',
        color: '#09864A',
        disply: 'inline-flex',
        marginLeft: '6px',
        margintTop: 'auto',
        margintBottom: 'auto',
    },
    cta:{
        height: '40px',
        width: '100%',
        display: 'flex',
        position:'absolute',
        bottom: '0',   
    },   
    buyNow: {
        width: '50%',
        height: '40px',
        backgroundColor: '#000000',
        color: '#fff',
        border: 'none',
        fontSize: '14px',
        lineHeight: '16px',
        borderRadius:'0px 0px 8px 0px',
        cursor: 'pointer',
    },
    cart: {
        width: '50%',
        height: '40px',
        backgroundColor: '#EEEEEE',
        color: '#000000',
        border: 'none',
        fontSize: '14px',
        lineHeight: '16px',
        borderRadius:'0px 0px 0px 8px',
        cursor: 'pointer',

    },
    whiteSpace:{
        width:'100%',
        height:'8px'
    }
}))
export default function ProductCard(props) {
    const styles = useStyles()
    return (
        <div className={styles.container}>
            <a href='#'>
                <div className={styles.imageDiv}>
                    <div className={styles.newLaunch}><div className={styles.launchContent}>New Launch</div></div>

                    <div className={styles.rating}><div className={styles.ratingContent}><img height='14' src='/star.png' /> &nbsp;{props.rating}</div></div>
                </div>
                <div>
                    <p className={styles.title}>{props.name}</p>
                    <div className={styles.use}>
                        <div className={styles.for}>For</div>
                        <div className={styles.line} />
                        <div className={styles.subtitle}>Hair fall reduction</div>
                    </div>
                    <div className={styles.whiteSpace} />
                    <div className={styles.use}>
                        <div className={styles.for}>With</div>
                        <div className={styles.line} />
                        <div className={styles.subtitle}>Keratin</div>
                        <div className={styles.line} />
                        <div className={styles.subtitle}>Biotin</div>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.use}>
                        <div className={styles.line} />

                        <div className={styles.subtitle}>Niacinamide</div>
                        <div className={styles.line} />
                        <div className={styles.subtitle}>Vitamin B5</div>
                    </div>
                </div>
                <div className={styles.pricing}>
                    <div className={styles.srp}>Rs 499</div>
                    <div className={styles.mrp}>₹1194</div>
                    <div className={styles.discount}>🎉 17% OFF</div>
                </div>
                <a href='#'>

<div className={styles.cta}>
<button className={styles.cart}>Add to Cart</button>

<button className={styles.buyNow}>Buy Now</button>
</div>
</a>
            </a>
        </div>
    )
}
