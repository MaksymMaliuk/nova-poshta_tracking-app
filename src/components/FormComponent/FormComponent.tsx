import { Button } from '@chakra-ui/button';
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import React, { useState } from 'react';

type Props = {
  onSendStatus: (tnnNumber: string) => Promise<void>;
  selectedOrder: string | null;
  setSelectedOrder: React.Dispatch<React.SetStateAction<string | null>>;
};

export const FormComponent: React.FC<Props> = ({
  onSendStatus,
  selectedOrder,
  setSelectedOrder
}) => {
  const [tnnNumber, setTnnNumber] = useState('');
  const [error, setError] = useState('');

  const handleChangeTnn = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTnnNumber = event.target.value;
    
    if (selectedOrder !== newTnnNumber) {
      setTnnNumber(newTnnNumber);
      setSelectedOrder(null);
      setError('');
    }
  };

  const handleSubmit = async () => {
    if (tnnNumber.trim() === '') {
      setError('Поле має бути заповнене');
      return;
    }

    if (tnnNumber.length !== 14) {
      setError('Перевірте корректність номеру');
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
        value={selectedOrder || tnnNumber}
        onChange={handleChangeTnn}
        textAlign='center'
        placeholder='Введіть ТТН замовлення'
        type='text'
        maxLength={14}
        isInvalid={!!error}
      />

      <FormErrorMessage justifyContent='center'>
        {error}
      </FormErrorMessage>

      <Button type='submit' colorScheme='red' onClick={handleSubmit}>
        Відслідкувати замовлення
      </Button>
    </FormControl>
  );
};
