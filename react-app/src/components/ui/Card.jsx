export function Card({ children }) {
  return <div className="border rounded-lg p-4 bg-white shadow-sm">{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="border-b pb-2 mb-2">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
