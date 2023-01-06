import React from 'react'; 
import { FaRegStar } from 'react-icons/fa'; 



function Rating(props){
    const{
        index, 
        rating, 
        hoverRating, 
        onMouseEnter,
        onMouseLeave,
        onSaveRating,
    } = props;
    const fill = React.useMemo(() =>{
        if(hoverRating >= index){
            return 'red'; 
        } else if (!hoverRating && rating >= index){
            return 'red';
        }
        return 'none'; 
    }, [rating, hoverRating, index]);

    return(
        <div 
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave()} 
            onClick={() => onSaveRating(index)}>
            <FaRegStar fill ={fill}/>
        </div>
    )
}

const Star = () =>{
    const[rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = React.useState(0); 
    return(
        <div>
                <Rating index={1} rating={0} hoverRating={hoverRating} onMouseEnter={() => {}} onMouseLeave={() => {}} onSaveRating={() => {}}/>
            
        </div>
    )
}



export default Star; 