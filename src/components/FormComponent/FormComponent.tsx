import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import React, { FC } from 'react';

export const FormComponent: FC = () => {
  return (
    <FormControl 
      maxW='300px' 
      display='flex' 
      flexDir='column' 
      gap={4} 
      mb={8}
    >
      <Input 
        placeholder='Введіть номер телефону' 
        type='tel' 
      />
      <Input 
        placeholder='Введіть ТНН замовлення' 
        type='number' 
      />
      <Button type='submit'>
        Відслідкувати замовлення
      </Button>
    </FormControl>
  );
};