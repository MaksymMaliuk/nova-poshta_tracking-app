import { Flex, Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { OrderStatus } from './components/OrderStatus';
import { FormComponent } from './components/FormComponent';
import { Response, DataItem } from './types/types';
import { sendPostRequest } from './api/requests';
import { useLocalStorage } from './custom-hooks/useLocalStorage';
import { OrdersHistory } from './components/OrdersHistory';

export const App: React.FC = () => {
  const [order, setOrder] = useState<Response | null>(null);

  const orderInfo = order?.data.find((item: DataItem) => item.Number);
  
  const [storedOrders, setStoredOrders] = useLocalStorage<Response[]>('orders', []);
  
  const addOrder = (item: Response | null) => {
    const orderExist = storedOrders.some((orders: Response) => (
      orders.data.some(orderData => orderData.Number === orderInfo?.Number)
    ));
    console.log(orderExist);

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
        flex='1' 
        alignItems='center'
        background="#fafafa"
        justifyContent='center'
        gap={10}
      >
        <Flex
          flexDir='column'
          alignItems="center"
          justifyContent="center"
        >
          <FormComponent onSendStatus={handleSendStatusRequest} />

          {order && 
            <OrderStatus order={order} />
          }
        </Flex>

        {storedOrders.length > 0 &&
         <OrdersHistory ordersHistory={storedOrders} />
        }  
      </Flex>

      <Footer />
    </Flex>
  );
};
