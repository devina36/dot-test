import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/config';
import Card from '../components/Card';
import Button from '../components/Button';

interface IDataProps {
  id: number;
  title: string;
  body: string;
}

const Home = () => {
  const [data, setData] = useState<IDataProps[]>([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response: any) => setData(response.data.slice(0, 10)));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border px-4 py-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="w-[180px]">
          <Button label="Log Out" onClick={handleLogout} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <Card key={item.id} title={item.title} body={item.body} />
        ))}
      </div>
    </div>
  );
};

export default Home;
