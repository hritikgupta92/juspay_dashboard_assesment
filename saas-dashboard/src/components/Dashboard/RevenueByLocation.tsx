import { useEffect, useRef, useState } from "react";

type Point = {
  id: string;
  label: string;
  lat: number;  
  lon: number;  
  value: number;  
};

const DATA: Point[] = [
  { id: "ny", label: "New York", lat: 40.7128, lon: -74.0060, value: 72 },
  { id: "sf", label: "San Francisco", lat: 37.7749, lon: -122.4194, value: 39 },
  { id: "syd", label: "Sydney", lat: -33.8688, lon: 151.2093, value: 25 },
  { id: "sg", label: "Singapore", lat: 1.3521, lon: 103.8198, value: 61 },
];

function clamp(v: number, a = 0, b = 1) {
  return Math.max(a, Math.min(b, v));
}

 
function lonLatToXYFraction(lon: number, lat: number) {
  const x = (lon + 180) / 360;  
  const y = (90 - lat) / 180;   
  return { x: clamp(x, 0, 1), y: clamp(y, 0, 1) };
}

export default function RevenueByLocationMap({
  width = 520,
  height = 220,
}: {
  width?: number;
  height?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [imgSize, setImgSize] = useState({ w: width, h: height });

  const values = DATA.map((d) => d.value);
  const minV = Math.min(...values);
  const maxV = Math.max(...values);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const img = el.querySelector("img");
    if (!img) return;

    function update() {
      const rect = img?.getBoundingClientRect();
      //@ts-expect-error w and h
      setImgSize({ w: rect?.width, h: rect?.height });
    }

    update();
    const ro = new ResizeObserver(update);
    ro.observe(img);
    return () => ro.disconnect();
  }, []);

  return (
    <div  style={{ width }}>
      <h3 style={{ fontSize: 18, marginBottom: 12, fontWeight: 700 }}>Revenue by Location</h3>

      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          height,
          overflow: "hidden",
          borderRadius: 8,
          background: "#f6f9fb",
        }}
      >
        <img
          src="./src/assets/Map.svg"
          alt="world map"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            userSelect: "none",
            pointerEvents: "none",  
            backgroundSize:"cover",
          }}
          draggable={false}
        />

        {/* Overlay pins */}
        {DATA.map((pt) => {
          const frac = lonLatToXYFraction(pt.lon, pt.lat);
          const left = frac.x * imgSize.w;
          const top = frac.y * imgSize.h;
          const minR = 6;
          const maxR = 14;
          const sizeRatio = (pt.value - minV) / (maxV - minV || 1); // 0..1
          const radius = Math.round(minR + (maxR - minR) * sizeRatio);
          const diameter = radius * 2;

          return (
            <div
              key={pt.id}
              onMouseEnter={() => setHovered(pt.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "absolute",
                left: left - radius,
                top: top - radius,
                width: diameter,
                height: diameter,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "auto",
                transition: "transform 150ms ease",
                transform: hovered === pt.id ? "scale(1.15)" : "scale(1)",
              }}
            >
              {/* outer ring */}
              <div
                style={{
                  width: diameter,
                  height: diameter,
                  borderRadius: "50%",
                  background: "rgba(17,24,39,0.95)",  
                  boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                }}
              />
              {/* optional tooltip */}
              {hovered === pt.id && (
                <div
                  style={{
                    position: "absolute",
                    left: diameter + 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(17,24,39,0.9)",
                    color: "white",
                    padding: "6px 8px",
                    borderRadius: 8,
                    fontSize: 12,
                    whiteSpace: "nowrap",
                  }}
                >
                  {pt.label} — {pt.value}K
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* list under map */}
      <div style={{ marginTop: 18 }}>
        {DATA.map((d) => (
          <div
            key={d.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 0",
              borderBottom: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ fontSize: 15 }}>{d.label}</div>
            <div style={{ fontWeight: 700 }}>{d.value}K</div>
          </div>
        ))}
      </div>
    </div>
  );
}