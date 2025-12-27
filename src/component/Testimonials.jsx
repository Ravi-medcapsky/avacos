export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6">OUR HAPPY CUSTOMERS</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border rounded-xl p-6">
            <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
            <p className="mt-2 text-gray-600">
              Amazing quality and fast delivery. Loved the experience!
            </p>
            <p className="mt-4 font-semibold">Customer {i}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
