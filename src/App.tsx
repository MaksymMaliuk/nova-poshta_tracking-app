import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { OrderStatus } from './components/OrderStatus';
import { FormComponent } from './components/FormComponent';
import { Response } from './types/types';
import { sendPostRequest } from './api/requests';
import { useLocalStorage } from './custom-hooks/useLocalStorage';

export const App: React.FC = () => {
  const [order, setOrder] = useState<Response | null>(null);

  const documentNumber = order?.data.find(item => item.Number);
  
  const [storedOrders, setStoredOrders] = useLocalStorage<Response[]>('orders', []);
  console.log(storedOrders);
  
  const addOrder = (item: Response | null) => {
    const orderExist = storedOrders.some((orders: Response) => (
      orders.data.map(orderData => orderData.Number === documentNumber?.Number)
    ));

    if (!orderExist) {
      const updatedOrders = [...storedOrders, item];
      setStoredOrders(updatedOrders);
    }
  };

  useEffect(() => {
    const storedOrder = localStorage.getItem('phones');

    if (order) {
      addOrder(order); 
      return;
    }
    
    if (storedOrder) {
      setStoredOrders(JSON.parse(storedOrder));
    }
  }, [order]);

  const handleSendStatusRequest = async (tnnNumber: string): Promise<void> => {
    const response = await sendPostRequest(tnnNumber);
    setOrder(response);
  };

  return (
    <Flex direction="column" height='100vh'>
      <Header />

      <Flex
        flex="1"
        flexDir='column'
        alignItems="center"
        justifyContent="center"
        background="#fafafa"
      >
        <FormComponent onSendStatus={handleSendStatusRequest} />
        
        {order && 
          <OrderStatus order={order} />
        }
      </Flex>

      <Footer />
    </Flex>
  );
};
