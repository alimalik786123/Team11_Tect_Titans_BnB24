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
    const [data1, setdata]=useState([])
    const datafood = async () => {
        let data = await fetch('http://localhost:8080/getcompany', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        data = await data.json()
        setdata(data)
        console.log(data,"datafrom")
        


    }
    //console.log(data1.data[0].companyname);
    console.log(data1.data?.map((data)=>{return data}));
    useEffect(() => {
        datafood()
    },[])
    return (<><Navadmin />
        <div className="container">
            <Grid className='mt-3' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data1.data !== [] ? data1.data?.map((data2) => {
                        return (

                            <Grid className='mb-1' item xs={4}>
                               {console.log(data2)}
                                <div className=''><Card data3={data2} /></div>
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