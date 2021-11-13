import React, { useEffect, useRef, useState } from 'react';
import { Container } from './styles';
import deleteIcon from '../../assets/ic-delete@2x.png';

type Props = {
  todoItem: string;
  handleDeleteTodo: (value: string) => void;
};

const TodoListItem = ({ todoItem, handleDeleteTodo }: Props): JSX.Element => {
  const [listItem, setlistItem] = useState<string>('');
  const itemRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;
    setlistItem(item);
  }, [itemRef]);

  return (
    <Container item={listItem} ref={itemRef}>
      {todoItem}
      <button onClick={() => handleDeleteTodo(todoItem)} type="button">
        <img alt="Deletar" src={deleteIcon} />
      </button>
    </Container>
  );
};

export default TodoListItem;
