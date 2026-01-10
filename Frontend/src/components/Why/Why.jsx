import "./Why.css";

export default function Why() {
  const cards = [
    {
      title: "A Daily Financial Companion",
      desc:
        "WALL·E acts as a quiet and reliable companion for everyday money management. It helps users consistently track daily expenses and savings, turning financial discipline into an easy, repeatable habit rather than a complex task.",
    },
    {
      title: "Organized Simplicity",
      desc:
        "WALL·E is built around the idea of simplicity through organization. By converting scattered daily spending into clear weekly and monthly insights, the platform brings structure and clarity to personal finances with a clean and intuitive experience.",
    },
    {
      title: "Financial Awareness Through Insights",
      desc:
        "WALL·E promotes smarter financial awareness by transforming raw expense data into meaningful visual insights. Animated graphs and summaries help users understand where their money goes and how their saving patterns evolve over time.",
    },
    {
      title: "Modern Approach to Personal Finance",
      desc:
        "WALL·E delivers a modern take on personal finance management. With a visually engaging interface, lively animations, and a data-driven dashboard, it reimagines expense and savings tracking as an interactive and motivating experience.",
    },
  ];

  return (
    <section className="why-section" id="why">
      <h2 className="why-title">Why WALL·E?</h2>

      <div className="why-grid">
        {cards.map((card, index) => (
          <div className="why-card" key={index}>
            <div className="why-card-content">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
