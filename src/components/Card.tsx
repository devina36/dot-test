const Card = ({ title, body }: { title: string; body: string }) => (
  <div className="p-4 border rounded-lg shadow-lg bg-white">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-gray-700">{body}</p>
  </div>
);

export default Card;
