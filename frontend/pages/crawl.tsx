import ScanForm from '../components/ScanForm';
export default function CrawlPage() {
  return (
    <main className="p-8 min-h-screen bg-gray-950 text-gray-100">
      <h1 className="text-xl font-bold mb-4 text-blue-400">Start a Web Crawler</h1>
      <ScanForm mode="crawl" />
    </main>
  );
}
