import React, { useEffect, useState } from "react";
import io from "socket.io-client";

export default function RealTimeLogs({ userId }: { userId: string | number }) {
  const [logs, setLogs] = useState<string[]>([]);
  useEffect(() => {
    const socket = io("/realtime", { transports: ["websocket"] });
    socket.emit("identify", { userId });
    socket.on("log", (log) => setLogs((prev) => [...prev, log.msg]));
    return () => socket.disconnect();
  }, []);
  return (
    <div className="bg-gray-900 p-2 rounded">
      <h3 className="text-blue-400 mb-2">Live Logs</h3>
      <div className="h-48 overflow-auto text-xs font-mono">
        {logs.map((msg, i) => (<div key={i}>{msg}</div>))}
      </div>
    </div>
  );
}
