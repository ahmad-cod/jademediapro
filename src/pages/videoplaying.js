import { MainWrapper } from "@/components/Layout";
import React from "react";
import { InterviewData } from "../components";
import { interviewData } from "../data/interview-data/interviewData";

const videoplaying = () => {
  return (
    <MainWrapper headerType={1}>
      <div className="px-6 md:px-16">
        <div className=" max-w-[865px]">
          <video src="" width="100%" />
          <h3 className="font-bold text-2xl md:text-4xl">
            60 minutes with Adachukwu of Jademediapro
          </h3>
          <p className="text-[15px] text-[#3A3B40] py-4">24 Oct 2021</p>
          <p>
            We start by defining a clear image of exactly who you serve and
            precisely how they think. Why? Because you can’t help people unless
            you know them – their hopes, their fears, their problems, and their
            pitfalls. What converts a total stranger into a die-hard fan of your
            brand? A constant pull of value and inspiration. At this stage, we
            map out your customer’s journey so you’ll be able to meet them at
            their point of need before one of your competitors does. We partner
            with brands to take communication.
          </p>
        </div>
        <div>
          <h3 className="text-[30px] md:text-[50px] ">More on 60 minutes: </h3>
          <div className="interview-section mt-14 mb-40">
            {interviewData.slice(0, 3).map((data) => (
              <InterviewData
                key={data.cardImage}
                cardImage={data.cardImage}
                cardDescription={data.description}
              />
            ))}
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default videoplaying;
