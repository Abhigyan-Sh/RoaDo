import { FunctionComponent } from "react";
import Dashboard from "../components/miscellaneous/Dashboard";
import QuickActions from "../components/miscellaneous/QuickActions";
import PriorityAlerts from "../components/miscellaneous/PriorityAlerts";
import HighLights from "../components/DashboardHighlights/HighLights";
import CompletedSchedule from "../components/DashboardHighlights/CompletedSchedule";
import ScheduledActivities from "../components/DashboardHighlights/ScheduledActivities";

const HomePage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background-colors-bg-3 overflow-hidden flex flex-row items-start justify-start gap-[10px] leading-[normal] tracking-[normal] text-left text-sm text-text-colors-text-color-3 font-roboto mq1025:flex-wrap mq1280:pl-3 mq1025:pr-2.5 mq1025:box-border">
      {/* left-section: Navbar */}
      <div className="h-[720px] w-[74px] flex mq1280:hidden flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
        <div className="self-stretch flex-1 relative max-w-full max-h-full flex items-center justify-center">
          <img
            className="self-stretch flex-1 overflow-hidden object-contain absolute left-[0px] top-[2px] w-full h-full [transform:scale(1.25)]"
            loading="lazy"
            alt=""
            src="/icons/navbar.svg"
          />
        </div>
      </div>
      {/* middle-section: Main Content */}
      <section className="w-3/4 mq880:min-w-full flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border text-left text-xs text-text-colors-text-color-3 font-roboto">
        <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full">
          <Dashboard />
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border gap-[24px] max-w-full">
            <QuickActions />
            <PriorityAlerts />
          </div>
        </div>
      </section>
      {/* right-section: Highlights */}
      <div className="w-1/4 mq880:min-w-full shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] bg-white overflow-hidden flex flex-col items-start justify-start pt-6 px-4 pb-9 box-border gap-[24px] mq725:pt-5 mq725:pb-[23px] mq725:box-border">
        <HighLights asOf={"19 Mar 2024"} count={14} />
        <CompletedSchedule count={14} />
        <ScheduledActivities count={14}/>
      </div>
    </div>
  );
};

export default HomePage;