interface dateProps {
    datetime: string;
}

export const fetchdate = async() => {
    try {
        const date:dateProps = await fetch('http://worldtimeapi.org/api/timezone/etc/UTC').then(res => res.json())
        
        return Number(date.datetime.slice(0,4))
    } catch (error) {
        console.error('Erro fetch ano: ', error)
        return new Date().getFullYear()
    }
}