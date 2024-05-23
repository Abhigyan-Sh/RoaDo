import React from 'react';

interface CompletedScheduleProps {
  count: number;
}

const CompletedSchedule: React.FC<CompletedScheduleProps> = ({ count }) => {
  return (
    <div className='w-full'>
      <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-2 gap-[20px] text-sm">
        <div className="relative font-medium">Completed Activities ({count})</div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-xs text-gray">
          <div className="relative [text-decoration:underline] inline-block min-w-[43px]">
            View All
          </div>
        </div>
      </div>
      <div className="self-stretch rounded bg-white flex flex-col items-start justify-start py-3 px-0 gap-[13.5px] border-[1px] border-solid border-lightgray">
        <div className="self-stretch h-56 relative rounded bg-white box-border hidden border-[1px] border-solid border-lightgray" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-3">
          <div className="h-8 flex-1 relative leading-[18px] whitespace-pre-wrap inline-block z-[1]">
            <span className="text-text-colors-text-color-1">
              Gurpreet Singh
            </span>
            <span>{` `}</span>
            <span className="text-dimgray">{` (Dispatch team) has created `}</span>
            <span>Load No. I-I-AAA-1325</span>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-lightgray" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-3 text-dimgray">
          <div className="flex-1 relative leading-[18px] z-[1]">
            <span className="text-text-colors-text-color-1">Aman</span>
            <span>{` (Driver) `}</span>
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
          <div className="h-8 flex-1 relative leading-[18px] whitespace-pre-wrap inline-block z-[1]">
            <span className="text-text-colors-text-color-1">
              Gurpreet Singh
            </span>
            <span>{` `}</span>
            <span className="text-dimgray">{` (Dispatch team) has created `}</span>
            <span>Load No. I-I-AAA-1325</span>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-lightgray" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-3">
          <div className="relative leading-[18px] z-[1]">
            <span>{`Load No. I-I-AAA-1325 `}</span>
            <span className="text-dimgray">will</span>
            <span>{` `}</span>
            <span className="text-dimgray">{`start added by `}</span>
            <span className="text-text-colors-text-color-1">
              Gurpreet Singh
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedSchedule;