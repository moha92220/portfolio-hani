function CircleBlock({ title, items, tone }) {
  return (
    <div className={`circle-block ${tone}`}>
      <div className="circle-icon">{title}</div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function GoldenCircle({ why, how, what }) {
  return (
    <section className="golden-circle">
      <CircleBlock title="Pourquoi" items={why} tone="tone-one" />
      <CircleBlock title="Comment" items={how} tone="tone-two" />
      <CircleBlock title="Quoi" items={what} tone="tone-three" />
    </section>
  );
}
