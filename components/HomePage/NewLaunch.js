import { makeStyles } from '@material-ui/core/styles';
import InfoCard from './../Cards/InfoCard'
import { useState } from 'react'
import ProductCard from './../Cards/ProductCard'
import ProductsCarousel from './../Carousel/ProductsCarousel'
import dynamic from 'next/dynamic'

const SliderComponentWithNoSSR = dynamic(import('./../Carousel/ProductsCarousel'), {
  ssr: false
})
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
        marginTop: '40px',
        marginBottom: '24px',
        fontWeight: '700',
        fontSize: '36px',
        lineHeight: '44px',
        color: '#000000',
        margin: 'auto',
        textAlign: 'center',
        style: 'normal',
        [theme.breakpoints.down('md')]: {
            fontSize: '28px',
            lineHeight: '36px',
            margin: '0px 45px',
            marginTop: '30px',
            marginBottom: '16px',
        },
    },
    buttonGroup: {
        width: '358px',
        height: '48px',
        borderRadius: '40px',
        backgroundColor: '#F6F6F6',
        margin: 'auto',
        marginBottom: '40px',
        maxWidth: '358px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down('md')]: {
            width: '90%',
            marginTop: '30px',
            marginBottom: '24px',
        },
    },
    button: {
        //display: 'inline-flex',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: '36px',
        width: '110px',
        height: '36px',
        margin: 'auto',
        border: 'none',
        background: '#F6F6F6',
        color: '#000000',
        '&:hover': {
            background: '#000000',
            color: '#fff',
        },
        '&:active': {
            background: '#000000',
            color: '#fff',
        },

        '&:visited': {
            background: '#000000',
            color: '#fff',
        }
    },
    active: {
        background: '#000000',
        color: '#fff',
    },
    
    inactive: {
        background: '#F6F6F6',
        color: '#000000',
    }
}))

export default function Products() {
    const styles = useStyles()
    const [hair, setHair] = useState(true)
    const [skin, setSkin] = useState(false)
    const [weight, setWeight] = useState(false)
    const hairClick = () => {
        setSkin(false)
        setWeight(false)
        setHair(true)
    }
    const weightClick = () => {
        setSkin(false)
        setWeight(true)
        setHair(false)
    }
    const skinClick = () => {
        setSkin(true)
        setWeight(false)
        setHair(false)
    }
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.heading}>New Launches</h1>
            </div>
            <div className={styles.buttonGroup}>
                <button onClick={()=>hairClick()} className={`${styles.button}  ${hair ? styles.active :''} MyStringClass`}>Hair</button>
                <button onClick={()=>skinClick()} className={`${styles.button}  ${skin ? styles.active :''} MyStringClass`}>Skin</button>
                <button onClick={()=>weightClick()} className={`${styles.button}  ${weight ? styles.active :''} MyStringClass`}>Weight</button>
            </div>
            {/* <div>
<ProductCard rating='4.5' name='Hair fall Control Shampoo Copy'/>
<ProductCard rating='4.5' name='Hair fall Control Shampoo Copy'/>
<ProductCard rating='4.5' name='Hair fall Control Shampoo Copy'/>
</div> */}
<ProductsCarousel/>
        </div>
    )
}
