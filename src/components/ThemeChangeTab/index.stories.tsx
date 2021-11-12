import React, { useState } from "react";
import ThemeChangeTab from "./ThemeChangeTab";

export default {
  title: "Components/ThemeChangeTab",
  component: ThemeChangeTab,
};

export const Default: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = (theme: boolean) => {
    setIsDark(theme);
  };

  return (
    <div>
      <ThemeChangeTab toggleTheme={toggleTheme} isDark={isDark} />
    </div>
  );
};
