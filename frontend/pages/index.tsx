import AIArtCarousel from '../components/AIArtCarousel';
import FeatureCard from '../components/FeatureCard';
import RealTimeLogs from '../components/RealTimeLogs';
const features = [
  { title: 'Multi-engine Scanning', desc: 'Nmap, OpenVAS, Shodan, SSL, plugins' },
  { title: 'Advanced Crawler', desc: 'Site crawling, robots.txt, screenshot, enrichment' },
  { title: 'Audit & Compliance', desc: 'Consent logs, quotas, RBAC, exportable reports' },
  { title: 'Team & Access Control', desc: 'Invite users, manage orgs, assign permissions' },
  { title: 'Stream Logs & Analytics', desc: 'Live dashboards, charts, export CSV/PDF' },
  { title: 'AI Art & Branding', desc: 'Animated Steam-inspired UI, DALL·E support' }
];
export default function Home() {
  const artImages = ['/ai-art1.jpg', '/ai-art2.jpg', '/ai-art3.jpg'];
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-gray-100">
      <header className="py-6 border-b border-blue-900 text-3xl font-bold text-blue-400">SecScan Platform</header>
      <AIArtCarousel images={artImages} />
      <section className="flex flex-wrap gap-6 justify-center pt-6">
        {features.map((f, i) => <FeatureCard key={i} {...f} />)}
      </section>
      <div className="mt-10 p-8">
        <RealTimeLogs userId="demo-user" />
      </div>
    </main>
  );
}
