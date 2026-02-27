"use client";

/* Particules/étincelles dorées flottantes — animation CSS pure */
const sparks = [
  { left: "10%", bottom: "5%", size: 3, duration: 8, animDelay: 0 },
  { left: "22%", bottom: "12%", size: 2, duration: 10, animDelay: 1.5 },
  { left: "35%", bottom: "3%", size: 4, duration: 9, animDelay: 3 },
  { left: "48%", bottom: "8%", size: 2, duration: 11, animDelay: 0.5 },
  { left: "55%", bottom: "15%", size: 3, duration: 8.5, animDelay: 2 },
  { left: "68%", bottom: "6%", size: 2, duration: 10.5, animDelay: 4 },
  { left: "75%", bottom: "10%", size: 3, duration: 9.5, animDelay: 1 },
  { left: "85%", bottom: "4%", size: 2, duration: 12, animDelay: 3.5 },
  { left: "92%", bottom: "18%", size: 3, duration: 8, animDelay: 2.5 },
  { left: "5%", bottom: "20%", size: 2, duration: 11, animDelay: 5 },
];

interface SparkEffectProps {
  className?: string;
}

export const SparkEffect = ({ className = "" }: SparkEffectProps) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {sparks.map((spark, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-gold"
          style={{
            left: spark.left,
            bottom: spark.bottom,
            width: spark.size,
            height: spark.size,
            opacity: 0,
            animation: `float-up ${spark.duration}s ${spark.animDelay}s infinite ease-out`,
          }}
        />
      ))}
    </div>
  );
};
