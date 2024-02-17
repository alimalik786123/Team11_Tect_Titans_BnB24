import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../Admin/Admincard'
import Skeleton from '@mui/material/Skeleton';
import Navadmin from '../Navadmin';
import Corousel from '../components/Corousel'
import Grid from '@mui/material/Grid';
const Admin = () => {
    const [cat, setcat] = useState([])
    const [food, setfood] = useState([])
    const [search, setsearch] = useState('')
    const datafood = async () => {
        let data = await fetch('http://localhost:8080/foodData', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        data = await data.json()
        // console.log()
        setfood(data[0])
        setcat(data[1])


    }
    console.log(food);
    console.log(cat);
    useEffect(() => {
        datafood()
    }, [])
    return (<><Navadmin />
        <div className="container">
            <Grid className='mt-3' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    cat !== [] ? cat.map((data1) => {
                        return (

                            <Grid className='mb-1' item xs={4}>

                                <div className=''><Card data3={data1} /></div>
                            </Grid>
                        
                        )
                    }) : <div>{/* For variant="text", adjust the height via font-size */}
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

                        {/* For other variants, adjust the size with `width` and `height` */}
                    </div>
                }
            </Grid>
        </div>
        <div className=" m-5">
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
        </div>
        <Footer />
    </>)
}
export default Admin