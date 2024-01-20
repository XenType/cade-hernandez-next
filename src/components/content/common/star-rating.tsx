import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const getRatingStar = (position: number): React.ReactNode => {
    if (position <= rating) {
      return <StarIcon className="text-cade-blue-lite" />;
    }
    return <StarBorderIcon className="text-cade-blue-lite" />;
  };

  return (
    <div>
      {getRatingStar(1)}
      {getRatingStar(2)}
      {getRatingStar(3)}
      {getRatingStar(4)}
      {getRatingStar(5)}
    </div>
  );
};

export default StarRating;
