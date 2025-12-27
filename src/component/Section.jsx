import ProductCard from "./ProductCard";

export default function Section({ title }) {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <ProductCard key={i} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="border px-6 py-2 rounded-full">View All</button>
      </div>
    </section>
  );
}
