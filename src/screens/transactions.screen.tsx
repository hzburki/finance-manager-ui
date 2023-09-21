import React from "react";
import {
  Tab,
  Tabs,
  Card,
  TabsBody,
  TabPanel,
  TabsHeader,
} from "@material-tailwind/react";

const tabsData = [
  {
    label: "Last Month",
    value: "08-2023",
  },
  {
    label: "This Month",
    value: "09-2023",
  },
  {
    label: "Future",
    value: "10-2023",
  },
];

export const TransactionScreen = () => {
  return (
    <div className="flex justify-center items-start py-12">
      <Card className="p-4 w-[600px] mx-4">
        <Tabs value="09-2023">
          <TabsHeader>
            {tabsData.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {tabsData.map(({ value }) => (
              <TabPanel key={value} value={value}>
                <div>Month's Summary</div>
                <hr className="my-4" />
                <div>Month's Transactions</div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </Card>
    </div>
  );
};
