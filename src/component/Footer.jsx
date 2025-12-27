export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-bold text-lg">SHOP.CO</h4>
          <p className="mt-2 text-gray-600">
            We have clothes that suits your style.
          </p>
        </div>

        <FooterCol title="Company" items={["About", "Works", "Career"]} />
        <FooterCol title="Help" items={["Support", "Delivery", "Terms"]} />
        <FooterCol title="FAQ" items={["Account", "Orders", "Payments"]} />
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h5 className="font-semibold mb-2">{title}</h5>
      {items.map((i) => (
        <p key={i} className="text-gray-600">
          {i}
        </p>
      ))}
    </div>
  );
}
