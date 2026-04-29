function ValueCard({ title, items }) {
  return (
    <article className="value-card">
      <span className="value-kicker">{title}</span>

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default function GoldenCircle({ why, how, what }) {
  return (
    <section className="value-framework">
      <ValueCard title="Pourquoi" items={why} />
      <ValueCard title="Comment" items={how} />
      <ValueCard title="Quoi" items={what} />
    </section>
  );
}
