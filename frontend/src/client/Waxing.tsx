
import { useEffect, useState } from "react";
import  {GetServices}  from "../components/GetServices";
import { set } from "mongoose";
import Body from "../components/Body";

export default function Waxing() {
    const base_url = import.meta.env.VITE_BASE_URL;
    const [services, setServices] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [waxing, setWaxing] = useState<any>([]);

    const fetchServices = async () => {
        const res = await fetch(`${base_url}/admin/nails`);
        const data = await res.json()
              
        setServices(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchServices();
    }
    , []);

    useEffect(() => {
        const waxing = services.filter((service: { type: string; }) => service.type === "Waxing");
        setWaxing(waxing);
    }, [services]);

  
    return (
        <Body navbar={true} >

        <div className="service-container">
        {loading ? <h2>Loading...</h2> : (    
                <>
                <center><h1>Waxing</h1> </center>  
                
                    {waxing.map((service: { _id: any; name: any; price: any; description: any; image: any; }) => {
                        return (
                            <ul key={service._id}>

                                <li >{service.name+'.....'}{service.price}</li>
                                <p>{service.description}</p>
                            </ul>


                        )
                    }
                    )}
                </> 
        )}
    </div>
    </Body>
    )
}

const styles = {

    card: {    
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid white',
        borderRadius: '10px',
        padding: '10px',
    }
}