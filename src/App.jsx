import { useEffect, useState } from "react";
import { getDishesData } from "./api/resturants";
import RestaurantsSection from "./components/RestaurantsSection";
import Nav from "./components/Nav";
import { io } from "socket.io-client";

const App = () => {
  const [dishes, setDishes] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3000", {
      withCredentials: true,
      transports: ['websocket', 'polling'],
      upgrade: false
    });

    setSocket(newSocket);

    const fetchData = async () => {
      try {
        const data = await getDishesData();
        setDishes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        console.log('Connected to Socket.IO server');
      });

      socket.on('connect_error', (error) => {
        console.error('Socket.IO connection error:', error);
      });

      socket.on('dishUpdated', (updatedDish) => {
        setDishes((prevDishes) =>
          prevDishes.map((dish) => (dish._id === updatedDish._id ? updatedDish : dish))
        );
      });
    }
  }, [socket]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center ">
      <Nav/>
      <div className="max-w-[1024px] w-full">
        <RestaurantsSection dishes={dishes} />
      </div>
    </div>
  );
};

export default App;