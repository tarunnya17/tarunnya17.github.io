import { time } from "console";
import React, { useEffect, useState } from "react";

interface RealTimeProps {
    timezone: string;
    timeFormat: string; // e.g., "HH:mm:ss" or "hh:mm:ss A"
}

const RealTime: React.FC<RealTimeProps> = ({ timezone, timeFormat }) => {
    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone: timezone,
                hour12: !timeFormat.includes("HH"),
                hour: "2-digit",
                minute: "2-digit",
                second: timeFormat.includes("ss") ? "2-digit" : undefined,
            };
            setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, [timezone, timeFormat]);

    return <span>{currentTime}</span>;
};

export default RealTime;