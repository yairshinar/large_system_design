const techStackData = [
  {
    layer: "Ingestion",
    technology: "Kafka",
    reason: "Handles high throughput and provides durability and replayability."
  },
  {
    layer: "Real-Time Processing",
    technology: "Apache Flink",
    reason: "Processes streams with low latency and exactly-once semantics."
  },
  {
    layer: "Storage (Hot)",
    technology: "Druid",
    reason: "Optimized for high-speed aggregations and OLAP queries."
  },
  {
    layer: "Storage (Cold)",
    technology: "Amazon S3",
    reason: "Cost-effective, scalable archival for raw data."
  },
  {
    layer: "Query Engine",
    technology: "Presto (Trino)",
    reason: "Enables interactive SQL querying across storage layers."
  },
  {
    layer: "Caching",
    technology: "Redis",
    reason: "Provides millisecond-level latency for frequently accessed data."
  }
];

export default techStackData;
