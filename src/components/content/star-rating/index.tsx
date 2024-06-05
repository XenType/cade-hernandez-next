import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const starArray = new Array(rating)
    .fill(true)
    .concat(new Array(5 - rating).fill(false));
  return (
    <div className="flex flex-row space-x-1 items-center">
      {starArray.map((entry, index) => {
        if (entry) {
          return <StarIcon key={index} fontSize="inherit" />;
        }
        return <StarBorderIcon key={index} fontSize="inherit" />;
      })}
    </div>
  );
};

export default StarRating;
