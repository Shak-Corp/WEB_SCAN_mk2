export default function FeatureCard({ title, desc }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-5 w-64">
      <div className="font-bold text-blue-300 text-lg mb-2">{title}</div>
      <div className="text-gray-300 text-sm">{desc}</div>
    </div>
  );
}
