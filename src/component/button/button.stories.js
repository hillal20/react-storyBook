import React from "react";
import Button from "./button";

export default {
  title: "button-1",
  component: Button,
};

export const Primary = () => <Button variant="primary">primary</Button>;
export const Secondary = () => <Button variant="secondary">secondary</Button>;
export const Success = () => <Button variant="success">success</Button>;
export const Danger = () => <Button variant="danger">danger</Button>;
