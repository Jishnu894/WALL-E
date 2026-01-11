import "./How.css";

export default function How() {
  const steps = [
    {
      step: "01",
      title: "Add Daily Expenses & Savings",
      desc:
        "Users record their daily expenses and savings in just a few clicks. Each entry includes the amount, category, and date, making it easy to maintain accurate and consistent financial records.",
    },
    {
      step: "02",
      title: "Automatic Weekly & Monthly Organization",
      desc:
        "WALL·E automatically organizes all entries into weekly and monthly summaries. Expenses and savings are grouped and calculated in real time, removing the need for manual tracking or calculations.",
    },
    {
      step: "03",
      title: "Visual Insights with Lively Charts",
      desc:
        "The platform transforms financial data into interactive charts and graphs. Users can quickly understand spending patterns, savings growth, and category-wise distribution through animated visualizations.",
    },
    {
      step: "04",
      title: "Track Progress & Build Better Habits",
      desc:
        "By combining clear summaries with visual feedback, WALL·E helps users track their financial progress over time. This encourages smarter spending decisions and consistent saving habits.",
    },
  ];

  return (
    <section className="how-section" id="how">
      <h2 className="how-title">How It Works</h2>

      <div className="how-grid">
        {steps.map((item, index) => (
          <div className="how-card" key={index}>
            <span className="how-step">{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
