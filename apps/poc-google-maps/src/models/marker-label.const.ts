export const MarkerLabel: Partial<google.maps.MarkerLabel> = {

  /**
   * A propriedade className do elemento do rótulo (equivalente ao atributo class do elemento).
    * Várias classes CSS separadas por espaço podem ser adicionadas. O padrão é nenhuma classe CSS (uma string vazia).
    * A cor, o tamanho, o peso e a família da fonte só podem ser definidos por meio das outras propriedades de MarkerLabel.
    * As classes CSS não devem ser usadas para alterar a posição nem
    * orientação do rótulo (por exemplo, usando translações e rotações) se também estiver usando
   */
  className: 'marker-label',
  color: '#3f51b5', // A cor do texto do rótulo.
  // fontFamily: 'string', // A família de fontes do texto do rótulo.
  // fontSize: '16px', // Tamanho da fonte de texto
  // fontWeight: 'bold', //O peso da fonte do texto do rótulo.
  // text: 'Filial/CB: 1000' //O texto a ser exibido no rótulo.
};
