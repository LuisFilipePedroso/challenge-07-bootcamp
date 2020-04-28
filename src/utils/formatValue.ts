const formatValue = (value: number): string =>
  new Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' }).format(
    value,
  ); // TODO

export default formatValue;
