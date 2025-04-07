import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ReusableForm from "../../ReusableForm";
import Card from "../Card/Card";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function TabsComponent({
  tabs,
  cssclass = "cardForm",
  handleUpdateData,
}) {
  const [currentTab, setCurrentTab] = useState(0);

  const handleNext = () => {
    setCurrentTab((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentTab((prev) => prev - 1);
  };

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleSubmit = (values) => {
    console.log(values);

    handleUpdateData(values);
  };

  return (
    <Card style={cssclass}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel key={index} value={currentTab} index={index}>
          <ReusableForm
            fields={tab.fields}
            stepsForm={currentTab}
            onSubmit={handleSubmit}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        </CustomTabPanel>
      ))}
    </Card>
  );
}
