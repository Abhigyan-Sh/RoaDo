import { FunctionComponent } from "react";
import CashFlow from "../widgets/CashFlow";

export type HighLightsType = {
  asOf?: string;
  count?: number;
  className?: string;
};

const HighLights: FunctionComponent<HighLightsType> = ({
  asOf = "", 
  count = "", 
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[6px] text-left text-xs text-text-colors-text-color-3 font-roboto ${className}`}
    >
      <div className="relative text-base font-medium">
        Todays Highlights ({count})
      </div>
      <div className="flex flex-row items-start justify-start pt-0 pb-2 pr-5 pl-0 text-dimgray">
        <div className="relative inline-block min-w-[68px]">{asOf}</div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[18px] gap-[18px] text-dimgray">
        <CashFlow
          income="Income"
          cAD="100000 CAD"
          paymentsReceived="2 payments received"
        />
        <CashFlow
          income="Expenses"
          cAD="50000 CAD"
          paymentsReceived="5 payments paid"
          propMinWidth="52px"
          propColor="#d04141"
          propMinWidth1="81px"
          propMinWidth2="89px"
        />
      </div>
    </div>
  );
};

export default HighLights;