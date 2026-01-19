import './card.css'

export function Card({ className,header,number }){
    return(
        <div className={`card ${className}`}>
            <div className='image_container'>
                <img/>
            </div>
            <div className='text_container'>
                <h3>{header}</h3>
                <h1>{number}</h1>
            </div>
        </div>
    )
}

