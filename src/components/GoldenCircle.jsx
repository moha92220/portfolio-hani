export default function GoldenCircle({ why, how, what }) {
  const sections = [
    { label: 'POURQUOI', title: 'Pourquoi', items: why },
    { label: 'COMMENT',  title: 'Comment',  items: how },
    { label: 'QUOI',     title: 'Quoi',     items: what },
  ];

  return (
    <div className="golden-grid">
      {sections.map((s, i) => (
        <div key={i} className="golden-card">
          <div className="golden-label">{s.label}</div>
          <h3>{s.title}</h3>
          <ul>
            {s.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
