import React, { JSX } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const Policies = (): JSX.Element => {
  const policies = [
    {
      title: "Check-in",
      content: [
        { bold: "Available 24 hours", regular: "" },
        {
          bold: "",
          regular:
            "Guests are required to show a photo identification and credit card upon check-in",
        },
        {
          bold: "",
          regular:
            "You'll need to let the property know in advance what time you'll arrive.",
        },
      ],
    },
    {
      title: "Check-out",
      content: [{ bold: "Available 24 hours", regular: "" }],
    },
    {
      title: "Cancellation/ prepayment",
      content: [
        {
          bold: "",
          regular:
            "Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.",
        },
      ],
    },
    {
      title: "Children and beds",
      content: [
        { bold: "Child policies", regular: "" },
        { bold: "", regular: "Children of any age are welcome." },
        {
          bold: "",
          regular:
            "Children 12 years and above will be charged as adults at this property.",
        },
        {
          bold: "",
          regular:
            "To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.",
        },
        { bold: "Cot and extra bed policies", regular: "" },
        {
          bold: "",
          regular:
            "The number of extra beds allowed is dependent on the option you choose. Please check your selected option for more information.",
        },
        { bold: "", regular: "There are no cots available at this property." },
        { bold: "", regular: "All extra beds are subject to availability." },
      ],
    },
    {
      title: "No age restriction",
      content: [
        { bold: "", regular: "There is no age requirement for check-in" },
      ],
    },
    {
      title: "Pets",
      content: [{ bold: "", regular: "Pets are not allowed." }],
    },
    {
      title: "Cash only",
      content: [
        { bold: "", regular: "This property only accepts cash payments." },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-start gap-3 w-full">
        <h2 className="font-bold text-[#252525] text-[20.8px] font-['DM_Sans',Helvetica]">
          Policies
        </h2>
        <Card className="w-full rounded-xl border-[#0000001a]">
          <CardContent className="p-5">
            {policies.map((policy, index) => (
              <React.Fragment key={`policy-${index}`}>
                <div className="flex items-center justify-between h-[86px] w-full">
                  <h3 className="font-normal text-[#252525] text-2xl leading-[33.1px] whitespace-nowrap font-['DM_Sans',Helvetica]">
                    {policy.title}
                  </h3>
                  <div
                    className={`${
                      policy.title === "Children and beds"
                        ? "w-[603px]"
                        : "w-[603px] h-[66px]"
                    } font-normal text-base font-['DM_Sans',Helvetica]`}
                  >
                    {policy.content.map((item, itemIndex) => (
                      <React.Fragment
                        key={`policy-content-${index}-${itemIndex}`}
                      >
                        {item.bold && (
                          <span className="font-semibold text-[#252525] leading-[22.1px]">
                            {item.bold}
                            <br />
                          </span>
                        )}
                        {item.regular && (
                          <span className="text-[#626262] leading-[0.1px]">
                            {item.regular}
                            <br />
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                {index < policies.length - 1 && (
                  <Image
                    className="w-full h-px object-cover"
                    alt="Separator"
                    src="/line-129.svg"
                    width={1000}
                    height={1}
                  />
                )}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default Policies;
