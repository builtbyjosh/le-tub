import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,

  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { Blob } from '@/styles/icons';
import frontEntrance from '../public/front-entrance.jpg';

export default function Home() {

  return (
    <Box >
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Text
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: 'xl', sm: '2xl', lg: '4xl' }}
          >
            Welcome to Le Tub Saloon
          </Text>
          <Text color={'gray.500'}>
            Established November 2nd 1959 as a Sunoco gas station.... Closed by
            the energy crunch of the early seventies, your Host purchased the
            barren property in 1974 and dedicated a concentrated year personally
            hand building LeTub totally of Flotsam, Jetsam and ocean borne
            treasures all gathered daily over 4 years of day break jogging on
            Hollywood Beach. All landscaping, planting and decor by your host.
            We are a Multi-level , Outdoor seating Saloon, located on The
            Intra-Coastal Waterway.
          </Text>
          <Box>
            <Text>HOURS:</Text>
            <UnorderedList>
              <ListItem>11:00am to 1:00am weekdays </ListItem>
              <ListItem>12:00pm to 2:00am weekends </ListItem>
              <ListItem>OPEN DAILY:365 days a year </ListItem>
            </UnorderedList>
          </Box>
          <Text>Credit Cards now accepted</Text>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={'red.50'}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={frontEntrance.src}
            />
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
}
