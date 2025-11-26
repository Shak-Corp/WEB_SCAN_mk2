import DashboardCard from '../components/DashboardCard';
import RealTimeLogs from '../components/RealTimeLogs';

export default function Dashboard() {
  return (
    <main className="p-8 bg-gray-950 min-h-screen text-gray-100">
      <h2 className="text-2xl mb-6 text-blue-400 font-bold">Your Security Operations Dashboard</h2>
      <DashboardCard />
      <div className="mt-6">
        <RealTimeLogs userId="current-user-id" />
      </div>
    </main>
  );
}
