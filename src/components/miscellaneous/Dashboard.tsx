import status from '../../utils/status.json';
import { FunctionComponent } from "react";
import Card from "../widgets/Card";

export type DashboardType = {
  className?: string;
};

export type StatusType = {
  upcoming: number;
  ongoing: number;
  completed: number;
};

export type CardType = {
  trips?: string;
  total?: number;
  status?: StatusType;
};

export type StatusData = {
  items: CardType[];
};

const statusData: StatusData = status as StatusData;
// console.log(statusData);

const Dashboard: FunctionComponent<DashboardType> = ({
  className = "",
}) => {
  return (
    <div className="w-full flex flex-col">
      {/* header */}
      <div className="w-full text-5xl font-montserrat flex justify-between items-start">
        <h3 className="m-0 relative text-inherit font-medium font-inherit mt-1">
          Dashboard
        </h3>
        <div className="h-[52]">
          <img 
            className="w-full h-full overflow-hidden"
            loading="lazy"
            alt=""
            src="/icons/toolbar.svg"
          />
        </div>
      </div>
      {/* cards */}
      <div className="flex flex-row justify-between items-center relative bg-background-colors-bg-3 overflow-hidden gap-[10px] leading-[normal] tracking-[normal] text-left text-sm text-text-colors-text-color-3 font-roboto mq1025:flex-wrap mq1025:pl-3 mq1025:pr-2.5 mq1025:box-border">
        {statusData.items.map((each : CardType, index : number) => (
          <Card 
            key={index} 
            trips={each.trips} 
            // total={each.total} 
            status={each.status} 
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;