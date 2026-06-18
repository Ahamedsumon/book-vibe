import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";
const data = [
  { name: "The Great Gatsby", value: 192, color: "#0084FF" },
  { name: "To kill a mocking bird", value: 281, color: "#00C49F" },
  { name: "1984", value: 328, color: "#FFBB28" },
  { name: "The Alchemist", value: 177, color: "#FF8042" },
  { name: "Pride and prejudice", value: 279, color: "#FF2E2E" },
];
const getCurvedBarPath = (x, y, width, height) => {
  return `
    M ${x},${y + height} 
    C ${x + width * 0.1},${y + height} ${x + width * 0.35},${y + height * 0.5} ${x + width * 0.5},${y}
    C ${x + width * 0.65},${y + height * 0.5} ${x + width * 0.9},${y + height} ${x + width},${y + height}
    Z
  `;
};
// Custom shape component for Recharts Bar
const CurvedBar = (props) => {
  const { x, y, width, height, payload } = props;
  return (
    <path d={getCurvedBarPath(x, y, width, height)} fill={payload.color} />
  );
};
const PagesToRead = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        background: "#f8f9fa",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e0e0e0"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            stroke="#888"
            tick={{ fontSize: 12 }}
          />
          <YAxis
            domain={[0, 340]}
            ticks={[0, 85, 170, 255, 340]}
            axisLine={false}
            tickLine={false}
            stroke="#888"
          />
          <Bar dataKey="value" shape={<CurvedBar />} barSize={80}>
            <LabelList
              dataKey="value"
              position="top"
              fill="#555"
              style={{ fontSize: "13px", fontWeight: "bold" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
