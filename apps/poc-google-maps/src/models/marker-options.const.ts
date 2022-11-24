export const MarkerOptionsConst: google.maps.MarkerOptions = {
  draggable: true, // Se for `true`, o marcador recebe eventos de mouse e toque.

  /**
    * Qual animação reproduzir quando o marcador é adicionado a um mapa.
    * BOUNCEO (1): marcador salta até que a animação seja interrompida.
    * DROP (2): O marcador cai do topo do mapa terminando com um pequeno salto.
   */
  animation: 2, // Qual animação reproduzir quando o marcador é adicionado a um mapa.
  clickable: true, // Se for `true`, o marcador recebe eventos de mouse e toque.
  crossOnDrag: true, // Se for `false`, desativa a cruz que aparece abaixo do marcador ao arrastar.
  cursor: 'pointer', // Cursor do mouse para mostrar ao passar o mouse.
  // draggable: true, // Ícone para o primeiro plano. Se uma `string` for fornecida, ela será tratada como embora fosse um {@link Icon} com a `string` como {@link Icon#url url}.
};
