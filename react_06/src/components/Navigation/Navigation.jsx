import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navigation({ title, path }) {
  const navigation = useNavigate();

  const handleNavigation = () => navigation(path);

  return <button onClick={handleNavigation}>{title}</button>;
}