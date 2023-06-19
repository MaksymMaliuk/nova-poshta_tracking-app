import { Flex } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { OrderStatus } from './components/OrderStatus';
import { FormComponent } from './components/FormComponent';
import { Response } from './types/types';
import { sendPostRequest } from './api/requests';

export const App: FC = () => {
  const [order, setOrder] = useState<Response | null>(null);

  const handleSendStatusRequest = async (tnnNumber: string): Promise<void> => {
    const response = await sendPostRequest(tnnNumber);
    setOrder(response);
    console.log(response);
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
