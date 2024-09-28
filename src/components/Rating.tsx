import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";

interface Props {
  rating: number;
}
const Rating = ({ rating }: Props) => {
  const stars = [];
  for (let i = 1; i <= 5; i++)
    if (i <= rating) {
      stars.push(<FaStar className="text-amazon_yellow" />);
    } else if (i - 1 <= rating) {
      stars?.push(<FaStarHalfAlt className="text-amazon_yellow" />);
    } else {
      stars?.push(<FaRegStar className="text-gray-400" />);
    }
  return <div className="flex items-center gap-1">{stars}</div>;
};

export default Rating;
