'use client'
import { fetchdate } from "@/services/dateService";
import { useEffect, useState } from "react";

export default function DireitosReservados() {
    const [ ano , setAno] = useState<number>()

    useEffect(()=>{
        getAno()
    },[])

    const getAno = async() => {
        const getDate = await fetchdate()  
        setAno(getDate)
    }

    return(
        <>
        <p className="text-center">&copy; {ano} Dereitos reservados a RetroStation</p>
        </>
    )
}