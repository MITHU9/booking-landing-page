import Image from "next/image";
import { JSX } from "react";

const ImageGallery = (): JSX.Element => (
  <div className="flex flex-col items-start gap-1 w-full rounded-[14px]">
    <div className="flex items-start gap-1 w-full">
      <Image
        className="w-[768px] h-[306px] object-cover rounded-tl-md"
        alt="Main view"
        src="/images/image-8.jpg"
        width={768}
        height={306}
      />
      <div className="flex flex-col gap-1 flex-1">
        <Image
          className="h-[151px] object-cover rounded-tr-md"
          alt="view1"
          src="/images/image-11.jpg"
          width={510}
          height={151}
        />
        <Image
          className="h-[151px] object-cover"
          alt="view2"
          src="/images/image-10.jpg"
          width={510}
          height={151}
        />
      </div>
    </div>
    <div className="flex gap-1 w-full">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <Image
            key={i}
            className="flex-1 h-[151px] object-cover"
            alt={`view-${i}`}
            src={`/images/image-${i + 1}.jpg`}
            width={200}
            height={151}
          />
        ))}
    </div>
  </div>
);

export default ImageGallery;
