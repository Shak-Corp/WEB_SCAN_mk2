import ScanForm from '../components/ScanForm';
export default function ScanPage() {
  return (
    <main className="p-8 min-h-screen bg-gray-950 text-gray-100">
      <h1 className="text-xl font-bold mb-4 text-blue-400">Start a New Security Scan</h1>
      <ScanForm />
    </main>
  );
}
