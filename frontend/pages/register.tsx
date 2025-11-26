export default function RegisterPage() {
  return (
    <main className="p-8 min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 text-blue-400">Register for SecScan</h1>
      <form className="flex flex-col gap-4 w-80">
        {/* Email, password, confirm, accept T&C check */}
        <input type="email" placeholder="Email" className="px-3 py-2 rounded"/>
        <input type="password" placeholder="Password" className="px-3 py-2 rounded"/>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded">Register</button>
      </form>
    </main>
  );
}
