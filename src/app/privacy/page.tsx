export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 uppercase tracking-tight">Privacy Policy</h1>
      <div className="prose prose-stone max-w-none text-stone-600">
        <p className="mb-4">At Kraft Minds by Guru, we value your privacy. As a guest-only shop, we only collect the information necessary to process your orders and provide customer support.</p>
        <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">Information We Collect</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Contact information (email address)</li>
          <li>Shipping and billing addresses</li>
          <li>Order details</li>
        </ul>
        <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">How We Use Your Data</h2>
        <p className="mb-4">We use your information to fulfill your orders, communicate with you about your purchases, and—if you opt in—send you our newsletter. We never sell your data to third parties.</p>
        <p className="mt-12 text-sm text-stone-400 italic font-medium uppercase tracking-widest">Last updated: February 2025</p>
      </div>
    </div>
  );
}
