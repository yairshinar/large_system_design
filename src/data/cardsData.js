const cardsData = [
  {
    title: "Data Ingestion",
    description: "Apache Kafka handles high-throughput, durable, and replayable data ingestion.",
    examples: [
      "Partition topics to handle 10 million events per second.",
      "Replay events using Kafka’s offset system."
    ],
    alternatives: [
      { name: "Amazon Kinesis", tradeoff: "Managed, simpler to use but less flexible." },
      { name: "RabbitMQ", tradeoff: "Ideal for smaller systems but cannot scale as well." }
    ]
  },
  {
    title: "Real-Time Processing",
    description: "Apache Flink processes streams with low latency and exactly-once semantics.",
    examples: [
      "Monitor IoT sensor data in real-time for anomalies.",
      "Calculate rolling averages for website clickstreams."
    ],
    alternatives: [
      { name: "Google Dataflow", tradeoff: "Fully managed but higher cost." },
      { name: "Spark Streaming", tradeoff: "Good for batch workflows but slower for real-time." }
    ]
  },
  {
    title: "Storage (Hot and Cold)",
    description: "Hot data is stored in Apache Druid, and cold data is archived in Amazon S3.",
    examples: [
      "Use Druid for queries like 'Hourly user counts for the past 7 days.'",
      "Archive raw logs in S3 for compliance or reprocessing."
    ],
    alternatives: [
      { name: "ClickHouse", tradeoff: "Faster on-premises OLAP but harder to scale to the cloud." },
      { name: "BigQuery", tradeoff: "Serverless querying but expensive for frequent workloads." }
    ]
  },
  {
    title: "Query Engine",
    description: "Presto enables interactive SQL querying across storage layers.",
    examples: [
      "Run ad-hoc queries like 'Top 10 products sold yesterday.'",
      "Query both Druid (hot) and S3 (cold) layers seamlessly."
    ],
    alternatives: [
      { name: "Snowflake", tradeoff: "Fully managed and performant but expensive." },
      { name: "Hive", tradeoff: "Great for batch jobs but too slow for interactive queries." }
    ]
  },
  {
    title: "Caching",
    description: "Redis caches frequently accessed queries to reduce backend load.",
    examples: [
      "Cache popular queries like 'Top 10 products.'",
      "Pre-aggregate hourly data during ingestion for faster retrieval."
    ],
    alternatives: [
      { name: "Memcached", tradeoff: "Simpler but lacks durability." },
      { name: "ElasticSearch", tradeoff: "Supports full-text search but adds overhead." }
    ]
  }
];

export default cardsData;
