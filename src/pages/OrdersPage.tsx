import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { OrderStatus } from '../components/OrderStatus';
import { FormComponent } from '../components/FormComponent';
import { Response } from '../types/Response';
import { orderDataRequest } from '../api/requests';
import { useLocalStorage } from '../custom-hooks/useLocalStorage';
import { OrdersHistory } from '../components/OrdersHistory';
import { OrderData } from '../types/Order';

export const OrdersPage: React.FC = () => {
  const [order, setOrder] = useState<Response<OrderData[]> | null>(null);
  const [storedOrders, setStoredOrders] = useLocalStorage<OrderData[]>('orders', []);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [statusCode, setStatusCode] = useState('');

  const currentOrderNumber = order?.data[0]['Number'];
  
  const addOrder = (orderItem: Response<OrderData[]> | null) => {
    const orderExist = storedOrders.some(({ data }: Response<OrderData[]>) =>
      data.some(({ Number }) => Number === currentOrderNumber)
    );

    if (!orderExist) {
      const updatedOrders = [...storedOrders, orderItem];
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

  const handleSendStatusRequest = async (ttnNumber: string): Promise<void> => {
    const response = await orderDataRequest(ttnNumber);
    const statusCode = response.data[0]['StatusCode'];
    setStatusCode(statusCode);   
    
    setOrder(response);
  };

  return (
    
    <Flex 
      flex='1' 
      alignItems='center' 
      background='#fafafa' 
      justifyContent='center' 
      gap={10}
    >
      <Flex 
        flexDir='column' 
        alignItems='center' 
        justifyContent='center'
      >
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
  );
};