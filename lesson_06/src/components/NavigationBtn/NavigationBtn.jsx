import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationBtn({title, path}) {
  const navigation = useNavigate();

  const handlerNavigation = () => navigation(path);

  return <button onClick={handlerNavigation}>{title}</button>;
}