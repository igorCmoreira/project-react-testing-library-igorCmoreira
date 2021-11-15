import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../components/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('#Requisito 4 -> Teste do componente <NotFound.js />', () => {
  // Para este requisito estou reciclando o teste 5 do requisito 1 com pequenas modificações
  it('Verifica se página contém h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const pageInvalidTitle = screen.getByRole('heading',
      { name: 'Page requested not found Crying emoji' });

    expect(pageInvalidTitle).toBeDefined();
  });
  it('Verifica se página mostra a imagem', () => {
    renderWithRouter(<NotFound />);

    const { src } = screen.getByRole('img', {
      name: 'Pikachu crying because the page requested was not found' });

    expect(src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
