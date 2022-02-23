import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  Link,
  ListItem,
  Spacer,
  UnorderedList
} from '@chakra-ui/react';
import React from 'react';

export type CardLinkProps = {
  title: string;
  listaItens: string[];
  link: string;
  labelLink: string;
};

export const CardLink: React.FC<CardLinkProps> = ({
  title,
  listaItens,
  labelLink,
  link
}: CardLinkProps) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="5">
      <Heading mb="5" as="h2" size="md">
        {title}
      </Heading>
      <UnorderedList mb="5">
        {listaItens.map(item => (
          <ListItem>{item}</ListItem>
        ))}
      </UnorderedList>
      <Flex>
        <Spacer />
        <Link href={link} isExternal>
          {labelLink} <ExternalLinkIcon mx="2px" />
        </Link>
      </Flex>
    </Box>
  );
};
