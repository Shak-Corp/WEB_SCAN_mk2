export default function HelpPage() {
  return (
    <main className="p-8 min-h-screen bg-gray-950 text-gray-100">
      <h1 className="text-xl font-bold mb-4 text-blue-400">Help & FAQ</h1>
      <section>
        <h2 className="text-lg mb-2">How do I start a scan?</h2>
        <p>Go to the Scan tab, fill in your target, select a scan type, and submit.</p>
        <h2 className="text-lg mt-6 mb-2">How is my data protected?</h2>
        <p>All scans are sandboxed and results are only visible in your dashboard.</p>
        <h2 className="text-lg mt-6 mb-2">Is it legal?</h2>
        <p>You must have **explicit authorization** for every scan. All usage is logged for compliance.</p>
        <h2 className="text-lg mt-6 mb-2">Contact</h2>
        <p>Email: support@secscan.example | Developed by Shashank Daksh</p>
      </section>
    </main>
  );
}
