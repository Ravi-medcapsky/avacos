export default function Brands() {
  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

  return (
    <div className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto flex justify-between text-lg font-semibold">
        {brands.map((b) => (
          <span key={b}>{b}</span>
        ))}
      </div>
    </div>
  );
}
