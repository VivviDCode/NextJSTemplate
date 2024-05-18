import { HollowStarIcon } from "@/public/assets/Icons";
import { FilledStarIcon } from "../../public/assets/Icons";

  export default function StarRating(rating) {
    const MAX_STARS = 5;
    const filledStars = Math.round(rating * MAX_STARS / 10); // Assuming ratings are out of 10
  
    const getStarIcon = (index) => {
      if (index <= filledStars) {
        return <span key={index}><HollowStarIcon/></span>; 
      } else {
        return <span key={index}><FilledStarIcon/></span>; 
      }
    };
  
    const starIcons = Array.from({ length: MAX_STARS }, (_, index) => getStarIcon(index + 1));
  
    return starIcons;
  }
  