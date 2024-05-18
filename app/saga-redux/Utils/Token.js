"use client";
import { useEffect, useState, useMemo } from "react";

export default function UseToken() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const Token = localStorage.getItem("loginData");
    if (Token) {
      const parsedData = JSON.parse(Token);
      if (parsedData) {
        setToken(parsedData);
      }
    }
  }, []);

  const memoizedToken = useMemo(() => token, [token]);

  return memoizedToken;
}
