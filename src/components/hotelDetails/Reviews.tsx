import { JSX } from "react";
import { Card, CardContent } from "../ui/card";
import { ArrowRight, Star } from "lucide-react";

const Reviews = (): JSX.Element => {
  const reviews = [
    {
      title: '"Breathtaking Views and Luxury Comfort!"',
      content:
        '"The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!"',
      rating: 5,
      author: "— Sofia B., France",
      date: "23.10. 2024",
    },
    {
      title: '"Exceptional Stay with Excellent Amenities"',
      content:
        '"The Executive Suite provided an exceptional experience. The room was spotless, elegantly designed, and equipped with everything you could need. The marble bathroom with its bathtub and walk-in shower was pure luxury. The location is perfect for exploring the city, and the staff truly makes you feel welcome."',
      rating: 5,
      author: "— Youssef R., Morocco",
      date: "23.10. 2024",
    },
  ];

  return (
    <div className="flex flex-col items-start gap-3 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12">
      {/* Title */}
      <h2 className="font-bold text-[#252525] text-[20.8px] font-['DM_Sans',Helvetica]">
        What Our Guests Say
      </h2>

      {/* Arrows and See All */}
      <div className="flex items-center justify-between w-full px-2 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex w-10 h-10 items-center p-2.5 bg-[#c7c7c71a] rounded-full">
            <ArrowRight className="-rotate-180" size={20} />
          </div>
          <div className="flex w-10 h-10 items-center p-2.5 bg-[#007DD01A] rounded-full text-[#007ccf]">
            <ArrowRight size={20} />
          </div>
        </div>
        <div className="flex w-32 h-10 items-center justify-center gap-2.5 p-2.5 border-t border-[#007ccf] rotate-180 cursor-pointer select-none">
          <ArrowRight className="-rotate-180 text-[#007ccf]" size={20} />
          <span className="font-normal text-[#007dd0] text-base -rotate-180 font-['DM_Sans',Helvetica]">
            See All..
          </span>
        </div>
      </div>

      {/* Review Cards */}
      <div
        className="
          flex flex-col gap-5 w-full overflow-x-auto
          sm:flex-row sm:overflow-visible sm:flex-nowrap sm:justify-center
          xl:flex-nowrap xl:overflow-visible xl:justify-center
        "
      >
        {reviews.map((review, index) => (
          <Card
            key={`review-${index}`}
            className="
              border-[#dedede] rounded-xl flex-shrink-0
              w-full sm:w-[320px] xl:w-[612px]
            "
          >
            <CardContent className="flex flex-col items-start gap-3 p-4">
              <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-[#252525] text-lg sm:text-xl font-['DM_Sans',Helvetica]">
                    {review.title}
                  </h3>
                  <p className="font-light text-[#626262] text-xs sm:text-sm font-['DM_Sans',Helvetica] whitespace-pre-line">
                    {review.content}
                  </p>
                </div>
                <div className="flex items-center justify-start gap-1">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, starIndex) => (
                      <Star
                        key={`star-${index}-${starIndex}`}
                        className="text-[#FFD700] fill-[#FFD700]"
                        size={16}
                      />
                    ))}
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="font-normal text-[#252525] text-base sm:text-lg font-['Roboto',Helvetica] whitespace-nowrap">
                    {review.author}
                  </span>
                  <span className="font-normal text-[#000000] text-xs font-['Roboto',Helvetica] whitespace-nowrap">
                    {review.date}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
