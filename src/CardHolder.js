function CardHolder({title,desc,image}){ //property destructuring 
    return(
        <div>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-1by1">
                    <img src={image} alt="not found"></img>
                    </figure>
                </div>
                
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-8 mt-3">{desc}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )}
    
export default CardHolder