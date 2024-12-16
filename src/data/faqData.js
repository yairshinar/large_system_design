const faqData = [
  {
    question: "How does the system handle region failures?",
    answer: "DNS failover redirects traffic to healthy regions. Kafka and S3 ensure replicated data."
  },
  {
    question: "How does the platform scale during traffic spikes?",
    answer: "Kubernetes auto-scales ingestion and query services based on CPU and memory usage."
  },
  {
    question: "Why was Kafka chosen over alternatives?",
    answer: "Kafka provides high throughput and durability, making it ideal for handling 10M+ events per second."
  },
  {
    question: "What happens if query latency exceeds expectations?",
    answer: "We use Redis to cache popular queries and pre-aggregate data during ingestion."
  },
  {
    question: "What are the trade-offs between consistency and availability?",
    answer: "For non-critical analytics queries, we prioritize availability with eventual consistency. For metadata (e.g., user roles), we enforce strong consistency."
  }
];

export default faqData;
