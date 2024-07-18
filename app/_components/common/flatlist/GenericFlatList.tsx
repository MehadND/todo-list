import React from 'react';

interface GenericFlatListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

const GenericFlatList = <T,>({
  items,
  renderItem,
}: GenericFlatListProps<T>) => {
  return <>{items.map((item, index) => renderItem(item, index))}</>;
};

export default GenericFlatList;
