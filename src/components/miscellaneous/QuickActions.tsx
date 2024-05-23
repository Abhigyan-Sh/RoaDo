import React from 'react';
import Divider from '../ui/Divider';

interface QuickActionProps {
  iconSrc: string;
  label: string;
  minWidth?: number;
}

const QuickAction: React.FC<QuickActionProps> = ({ iconSrc, label, minWidth = 65 }) => (
  <div className={`w-[${minWidth}px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border text-center`}>
    <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
      <div className="flex flex-row items-start justify-start py-0 pr-[23px] pl-[22px]">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={iconSrc}
        />
      </div>
      <div className="self-stretch relative font-medium inline-block" style={{ minWidth: `${minWidth}px` }}>
        {label}
      </div>
    </div>
  </div>
);

const QuickActions: React.FC = () => {
  const actions = [
    { iconSrc: '/icons/right-arrow.svg', label: 'Create Indents', minWidth: 79 },
    { iconSrc: '/icons/driving-truck.svg', label: 'Add Vehicle' },
    { iconSrc: '/icons/rover-truck.svg', label: 'Add Trailer' },
    { iconSrc: '/icons/user-outlined.svg', label: 'Add Driver' },
    { iconSrc: '/icons/driving-truck.svg', label: 'Add Indents' }
  ];

  return (
    <>
      <div className="relative text-base font-medium inline-block min-w-[100px] mt-1">
        Quick Actions
      </div>
      <div className="self-stretch shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] rounded-2xl bg-white overflow-hidden flex flex-row items-start justify-between py-3.5 pr-[35px] pl-12 gap-[20px] mq725:flex-wrap mq725:justify-center mq975:pl-6 mq975:box-border">
        {actions.map((action, index) => (
          <React.Fragment key={index}>
            <QuickAction iconSrc={action.iconSrc} label={action.label} minWidth={action.minWidth} />
            {index < actions.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default QuickActions;