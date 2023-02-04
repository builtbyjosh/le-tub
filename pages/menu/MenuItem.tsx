import { Box, Text, Heading } from '@chakra-ui/react';
type itemDataProps = {
  itemData: {
    name: string;
    description: string | null;
    price: [
      {
        size: string | null;
        cost: string;
      }
    ];
  };
};

const MenuItem = ({ itemData }: itemDataProps) => {
  console.log(itemData);
  const { name, description, price } = itemData;
  return (
    <Box mb={2}>
      <Text fontWeight={'bold'} fontSize={'xl'}>
        {name}
      </Text>
      <Box pl={2}>
        {description && (
          <Text lineHeight={1.2} fontSize={'sm'} mb={1}>
            {description}
          </Text>
        )}
        {price.map((item: any) => {
          return item.size ? (
            <Text fontSize={'xs'}>
              {item.size} {item.cost}
            </Text>
          ) : (
            <Text fontSize={'xs'}>{item.cost}</Text>
          );
        })}
      </Box>
    </Box>
  );
};

export default MenuItem;
