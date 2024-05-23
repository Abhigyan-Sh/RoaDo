export type ScheduledActivitiesType = {
  className?: string;
  count: number;
};

const ScheduledActivities: React.FC<ScheduledActivitiesType> = ({
  count, 
  className = "",
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
        <div className="relative font-medium">
          Scheduled Activities ({count})
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-xs text-gray">
          <div className="relative [text-decoration:underline] inline-block min-w-[43px]">
            View All
          </div>
        </div>
      </div>
      <div className={`self-stretch rounded bg-white flex flex-col items-start justify-start py-3 px-0 gap-[13.5px] text-left text-xs text-text-colors-text-color-3 font-roboto border-[1px] border-solid border-lightgray ${className}`}>
        <div className="self-stretch h-48 relative rounded bg-white box-border hidden border-[1px] border-solid border-lightgray" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-3">
          <div className="relative leading-[16px] z-[1]">
            <span>{`Load No. I-I-AAA-1325 `}</span>
            <span className="text-dimgray">will be</span>
            <span>{` `}</span>
            <span className="text-gray">delivered</span>
            <span className="text-text-colors-text-color-1"> by</span>
            <span>{` `}</span>
            <span className="text-text-colors-text-color-1">Aman</span>
            <span>{` `}</span>
            <span className="text-text-colors-text-color-1">(Driver)</span>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-lightgray" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-3 text-dimgray">
          <div className="flex-1 relative leading-[16px] z-[1]">
            <span className="text-text-colors-text-color-1">Aman</span>
            <span>{` (Driver) will `}</span>
            <span className="text-gray">Picked Up</span>
            <span>{` goods at `}</span>
            <span className="text-gray">Location_Name</span>
            <span>{` for `}</span>
            <span className="text-text-colors-text-color-3">
              Load No. I-I-AAA-1325
            </span>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-lightgray" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-3">
          <div className="relative leading-[16px] z-[1]">
            <span>{`Load No. I-I-AAA-1325 `}</span>
            <span className="text-dimgray">will</span>
            <span>{` `}</span>
            <span className="text-dimgray">{`start added by `}</span>
            <span className="text-text-colors-text-color-1">Gurpreet Singh</span>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-lightgray" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-3">
          <div className="relative leading-[16px] z-[1]">
            <span>{`Load No. I-I-AAA-1325 `}</span>
            <span className="text-dimgray">will</span>
            <span>{` `}</span>
            <span className="text-dimgray">{`start added by `}</span>
            <span className="text-text-colors-text-color-1">Gurpreet Singh</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduledActivities;