export default function BrowseStyle() {
  const styles = ["Casual", "Formal", "Party", "Gym"];

  return (
    <section className="max-w-7xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        BROWSE BY DRESS STYLE
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {styles.map((s) => (
          <div
            key={s}
            className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-xl font-bold"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
