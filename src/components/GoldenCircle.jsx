function ValueCard({ index, title, items }) {
  return (
    <article className="value-card">
      <div className="value-card-head">
        <span className="value-index">{index}</span>
        <h3>{title}</h3>
      </div>

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
      <ValueCard index="01" title="Pourquoi" items={why} />
      <ValueCard index="02" title="Comment" items={how} />
      <ValueCard index="03" title="Quoi" items={what} />
    </section>
  );
}
