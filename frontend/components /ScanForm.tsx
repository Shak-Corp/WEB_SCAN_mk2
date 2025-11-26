import { useState } from "react";
export default function ScanForm({ mode = "scan" }) {
  const [target, setTarget] = useState("");
  return (
    <form className="flex flex-col gap-4 w-96">
      <input value={target} onChange={e => setTarget(e.target.value)} placeholder="Target domain/IP" className="px-3 py-2 rounded"/>
      <select className="px-3 py-2 rounded">
        <option>Nmap</option>
        <option>OpenVAS</option>
        <option>Shodan</option>
      </select>
      <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded">Submit {mode === "scan" ? "Scan" : "Crawl"}</button>
    </form>
  );
}
