import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationBtn({ title, path }) {
  const navigation = useNavigate();

  const handleRedirect = () => navigation(path);

  return <button onClick={handleRedirect}>{title}</button>;
}
