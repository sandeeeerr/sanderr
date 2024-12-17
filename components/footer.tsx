"use client";

import React, { useState, useEffect } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date());

      setTime(now);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="px-4 mt-10 mb-10 text-center text-gray-500">
      <small className="block mb-2 text-xs">{time} &copy;Sanderr. All rights reserved.</small>
    </footer>
  );
}
