import "./Features.css";

export default function Features() {
  const features = [
    {
      icon: "📌",
      title: "Daily Expense Tracking",
      desc: "Easily record daily expenses with categorized entries and optional notes. WALL·E keeps every transaction organized so users always know where their money is going.",
    },
    {
      icon: "💰",
      title: "Savings Management",
      desc: "Track daily savings alongside expenses to maintain a clear balance. This feature encourages consistent saving habits and helps users measure financial progress over time.",
    },
    {
      icon: "📅",
      title: "Weekly & Monthly Summaries",
      desc: "Automatically generated summaries provide a clear overview of spending and savings on a weekly and monthly basis, helping users analyze trends and plan better.",
    },
    {
      icon: "📊",
      title: "Animated Visual Insights",
      desc: "Interactive and lively charts transform raw financial data into meaningful visuals. Users can explore expense trends, category breakdowns, and savings growth effortlessly.",
    },
    {
      icon: "🔐",
      title: "Secure & Personal Dashboard",
      desc: "Each user gets a private dashboard where their financial data is securely stored and displayed in a clean, intuitive layout tailored to personal usage.",
    },
    {
      icon: "⚡",
      title: "Smart Auto Calculations",
      desc: "WALL·E automatically calculates totals, averages, and comparisons for expenses and savings. Users get accurate financial insights instantly without manual math.",
    },
    {
      icon: "🎯",
      title: "Progress Tracking & Motivation",
      desc: "Clear visual progress indicators help users stay motivated as they build better financial habits and long-term planning.",
    },
    {
      icon: "⏱️",
      title: "Quick & Effortless Entry",
      desc: "Designed for speed and simplicity, WALL·E lets users add expenses and savings in seconds with minimal inputs.",
    },
    {
      icon: "📱",
      title: "Responsive & User-Friendly Design",
      desc: "WALL·E works seamlessly across devices, ensuring a smooth experience on desktops, tablets, and mobiles.",
    },
  ];

  return (
    <section className="features-section">
      <h2 className="features-title">Key Features</h2>

      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-content">
              <span className="feature-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
