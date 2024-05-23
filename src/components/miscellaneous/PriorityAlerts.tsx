import React from 'react';

interface AlertProps {
  iconSrc: string;
  title: string;
  loadNo: string;
  billTo: string;
  date: string;
  description: string;
}

const Alert: React.FC<AlertProps> = ({ iconSrc, title, loadNo, billTo, date, description }) => (
  <div className="self-stretch shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] rounded-2xl bg-white flex flex-col items-start justify-start p-3 box-border gap-[14px] max-w-full text-sm text-gray">
    <div className="w-96 h-[146px] relative shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] rounded-2xl bg-white hidden max-w-full" />
    <div className="self-stretch flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
      <img
        className="h-8 w-8 relative rounded overflow-hidden shrink-0 min-h-[32px] z-[1]"
        loading="lazy"
        alt=""
        src={iconSrc}
      />
      <div className="flex-1 flex flex-row items-start justify-start gap-[44px] min-w-[208px] mq450:gap-[22px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
          <div className="relative font-medium z-[1]">
            {title}
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-3xs">
            <div className="relative inline-block min-w-[75px] z-[1]">
              Load No : {loadNo},
            </div>
            <div className="relative z-[1]">
              Bill To : {billTo}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-xs">
          <div className="relative inline-block min-w-[53px] z-[1]">
            {date}
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch relative text-xs leading-[16px] z-[1]">
      {description}
    </div>
    <div className="self-stretch flex flex-row items-start justify-end text-text-colors-text-color-1">
      <div className="w-[194px] flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border gap-[20px]">
        <div className="rounded flex flex-row items-start justify-start py-[7px] px-2.5 z-[1]">
          <div className="relative [text-decoration:underline] inline-block min-w-[40px]">
            Ignore
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[7px] px-3 bg-text-colors-text-color-1 rounded flex flex-row items-start justify-start z-[1] hover:bg-steelblue">
          <div className="relative text-sm font-roboto text-white text-left inline-block min-w-[49px]">
            Resolve
          </div>
        </button>
      </div>
    </div>
  </div>
);

const PriorityAlerts: React.FC = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[52px] max-w-full text-base mq725:flex-wrap mq450:gap-[26px]">
      <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[250px] max-w-full">
        <div className="relative font-medium">
          High Priority alerts (14)
        </div>
        <Alert 
          iconSrc="/icons/user.svg"
          title="Driver Raised Concern"
          loadNo="12454"
          billTo="RoaDo demo Bangalore"
          date="13 Feb 24"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua"
        />
      </div>
      <div className="flex-1 flex flex-col items-end justify-start gap-[13px] min-w-[250px] max-w-full text-sm text-gray">
        <button className="cursor-pointer [border:none] py-0 pr-0 pl-5 bg-[transparent] flex flex-row items-start justify-start gap-[5px]">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative text-sm font-roboto text-text-colors-text-color-1 text-left inline-block min-w-[50px]">
              View All
            </div>
          </div>
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/icons/blue-arrow.svg"
          />
        </button>
        <Alert 
          iconSrc="/icons/temperature.svg"
          title="Reefer Temp. out of range"
          loadNo="12454"
          billTo="RoaDo demo Bangalore"
          date="13 Feb 24"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua"
        />
      </div>
    </div>
  )
}

export default PriorityAlerts;