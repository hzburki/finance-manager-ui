import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function IndexScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/transactions");
  }, []);

  return <div>Index Screen</div>;
}
