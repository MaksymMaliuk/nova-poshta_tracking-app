import { Button } from '@chakra-ui/button';
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import React, { FC, useState } from 'react';
import { Response } from '../../types/types';
import { Center } from '@chakra-ui/react';

type Props = {
  onSendStatus: (tnnNumber: string) => Promise<void>;
};

export const FormComponent: FC<Props> = ({ onSendStatus }) => {
  const [tnnNumber, setTnnNumber] = useState('');
  const [error, setError] = useState('');

  const handleChangeTnn = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTnnNumber(event.target.value);
    setError('');
  };

  const handleSubmit = async () => {
    if (tnnNumber.trim() === '') {
      setError('Поле має бути заповнене');
      return;
    }

    try {
      await onSendStatus(tnnNumber);
    } catch (error) {
      setError('Помилка при відправленні статусу');
    }
  };

  return (
    <FormControl 
      maxW='300px' 
      display='flex' 
      flexDir='column' 
      gap={4} 
      mb={8} 
      isInvalid={!!error}
    >
      <Input
        value={tnnNumber}
        onChange={handleChangeTnn}
        placeholder='Введіть ТНН замовлення'
        type='number'
        isInvalid={!!error}
      />
      <FormErrorMessage justifyContent='center'>
        {error}
      </FormErrorMessage>

      <Button type='submit' onClick={handleSubmit}>
        Відслідкувати замовлення
      </Button>
    </FormControl>
  );
};
