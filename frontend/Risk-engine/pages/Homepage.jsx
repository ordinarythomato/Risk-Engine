import { Card } from '../components/Card.jsx'
import { Nav } from '../components/Nav.jsx'
import './homepage.css'

export function Homepage(){
    return(
        <>
            <Nav />
            <div className='card_container' >
                <Card className='accident' header='Total Accidents' number='0'/>
                <Card className='cost' header='Cost' number='$ 0'/>
                <Card className='losses' header='Fatal Accidents' number='0'/>
            </div>
        </>
    )
}

