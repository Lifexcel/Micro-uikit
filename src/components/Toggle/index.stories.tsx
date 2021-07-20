import React, { useState } from "react";
import Toggle from "./Toggle";
import { Flex } from "../Flex";

export default {
  title: "Components/Toggle",
  component: Toggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <Flex justifyContent="space-around">
      <Toggle checked={isChecked} onChange={toggle} scale="sm" />
      <Toggle checked={isChecked} onChange={toggle} scale="md" />
      <Toggle checked={isChecked} onChange={toggle} scale="lg" />
    </Flex>
  );
};
