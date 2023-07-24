import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { OrderStatus } from '../components/OrderStatus';
import { FormComponent } from '../components/FormComponent';
import { Response } from '../types/types';
import { sendPostRequest } from '../api/requests';
import { useLocalStorage } from '../custom-hooks/useLocalStorage';
import { OrdersHistory } from '../components/OrdersHistory';

export const OrdersPage: React.FC = () => {
  const [order, setOrder] = useState<Response | null>(null);
  const [storedOrders, setStoredOrders] = useLocalStorage<Response[]>('orders', []);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [statusCode, setStatusCode] = useState('');

  const orderNumber = order?.data[0]['Number'];

  const addOrder = (item: Response | null) => {
    const orderExist = storedOrders.some(({ data }: Response) =>
      data.some(({ Number }) => Number === orderNumber)
    );

    if (!orderExist) {
      const updatedOrders = [...storedOrders, item];
      setStoredOrders(updatedOrders);
    }
  };

  const clearHistory = () => {
    setStoredOrders([]);
  };

  useEffect(() => {
    const storedOrder = localStorage.getItem('orders');

    if (order && statusCode !== '3') {
      addOrder(order);
      return;
    }

    if (storedOrder) {
      setStoredOrders(JSON.parse(storedOrder));
    }
  }, [order]);

  const handleSendStatusRequest = async (tnnNumber: string): Promise<void> => {
    const response = await sendPostRequest(tnnNumber);
    const statusCode = response.data[0]['StatusCode'];
    setStatusCode(statusCode);   
    
    setOrder(response);
  };

  return (
    <Flex direction='column' height='100vh'>

      <Flex flex='1' alignItems='center' background='#fafafa' justifyContent='center' gap={10}>
        <Flex flexDir='column' alignItems='center' justifyContent='center'>
          <FormComponent
            onSendStatus={handleSendStatusRequest}
            selectedOrder={selectedOrder}
            setSelectedOrder={setSelectedOrder}
          />

          {order && <OrderStatus order={order} />}
        </Flex>

        {storedOrders.length > 0 && (
          <OrdersHistory
            orderHistorySelect={handleSendStatusRequest}
            ordersHistory={storedOrders}
            ordersHistoryClear={clearHistory}
            setSelectedOrder={setSelectedOrder}
          />
        )}
      </Flex>

      <Footer />
    </Flex>
  );
};