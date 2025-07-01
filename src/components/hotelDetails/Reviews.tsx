import Image from "next/image";
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
    <>
      <div className="flex flex-col items-start gap-3 w-full">
        <h2 className="font-bold text-[#252525] text-[20.8px] font-['DM_Sans',Helvetica]">
          What Our Guests Say
        </h2>
        <div className="flex flex-col items-start gap-2.5 p-2.5 w-full">
          <div className="flex items-center justify-between px-[82px] w-full">
            <div className="flex items-center gap-3">
              <div className="flex w-[42px] h-[42px] items-center p-2.5 bg-[#c7c7c71a] rounded-[33px]">
                <ArrowRight className="-rotate-180" />
              </div>
              <div className="flex w-[42px] h-[42px] items-center p-2.5 bg-[#007DD01A] rounded-[33px] text-[#007ccf]">
                <ArrowRight />
              </div>
            </div>
            <div className="flex w-[135px] h-[42px] items-center justify-center gap-2.5 p-2.5 border-t border-[#007ccf] rotate-180">
              <ArrowRight className="-rotate-180 text-[#007ccf]" />
              <span className="font-normal text-[#007dd0] text-xl -rotate-180 font-['DM_Sans',Helvetica]">
                See All..
              </span>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="flex flex-col items-start gap-2.5 p-2.5 w-full">
          <div className="flex items-center gap-5 w-full overflow-hidden">
            {reviews.map((review, index) => (
              <Card
                key={`review-${index}`}
                className="w-[612px] border-[#dedede] rounded-xl"
              >
                <CardContent className="flex flex-col items-start gap-3 p-4">
                  <div className="flex items-center gap-[30px] w-full">
                    <div className="flex flex-col items-start gap-3 flex-1">
                      <div className="flex flex-col items-start justify-end gap-3 w-full">
                        <div className="flex flex-col items-start gap-2 w-full">
                          <h3 className="font-semibold text-[#252525] text-xl font-['DM_Sans',Helvetica]">
                            {review.title}
                          </h3>
                          <p className="font-light text-[#626262] text-xs font-['DM_Sans',Helvetica]">
                            {review.content}
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-[3px]">
                          {Array(review.rating)
                            .fill(0)
                            .map((_, starIndex) => (
                              <Star
                                key={`star-${index}-${starIndex}`}
                                className="text-[#FFD700] fill-[#FFD700] size-5"
                              />
                            ))}
                        </div>
                      </div>
                      <div className="flex items-end justify-between w-full">
                        <span className="font-normal text-[#252525] text-xl text-center whitespace-nowrap font-['Roboto',Helvetica]">
                          {review.author}
                        </span>
                        <span className="font-normal text-[#000000] text-xs whitespace-nowrap font-['Roboto',Helvetica]">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Reviews;
