import { Heading, GridItem, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { CardLink, CardLinkProps } from '../../components/card-link';

export const Home: React.FC = () => {
  const links: CardLinkProps[] = [
    {
      title: 'SIA - Campus Virtual',
      labelLink: 'Acessar o SIA',
      link: 'https://sia.estacio.br/sianet/logon',
      listaItens: [
        'Calendário acadêmico',
        'Chat',
        'Horas AAC',
        'Informações financeiras',
        'Requerimentos'
      ]
    },
    {
      title: 'SAVA - Sala de Aula Virtual',
      labelLink: ' Acessar o SAVA',
      link: 'https://estudante.estacio.br/login',
      listaItens: [
        'Acesso às disciplinas online',
        'Biblioteca virtual',
        'Comunidade de alunos',
        'Trabalhos',
        'Tutoria'
      ]
    },
    {
      title: 'Ambiente de Exercícios e Simulados',
      labelLink: 'Acessar Ambiente de Exercícios',
      link: 'https://simulado.estacio.br/alunos/',
      listaItens: ['Avaliações', 'Exercícios', 'Simulados']
    }
  ];
  return (
    <>
      <Heading as="h4" size="xl" mb="5">
        Agregador Estacio
      </Heading>
      <SimpleGrid minChildWidth="200px" spacing="10px" mb="10">
        {links.map(card => (
          <GridItem>
            <CardLink
              title={card.title}
              listaItens={card.listaItens}
              labelLink={card.labelLink}
              link={card.link}
            />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};
