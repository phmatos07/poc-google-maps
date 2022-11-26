import { CursorEnum } from "./cursor.enum";

export const MarkerOptionsConst: google.maps.MarkerOptions = {

  /**
    * Qual animação reproduzir quando o marcador é adicionado a um mapa.
    * BOUNCEO (1): marcador salta até que a animação seja interrompida.
    * DROP (2): O marcador cai do topo do mapa terminando com um pequeno salto.
   */
  animation: 2, // Qual animação reproduzir quando o marcador é adicionado a um mapa.

  clickable: true, // Se for `true`, o marcador recebe eventos de mouse e toque.
  crossOnDrag: true, // Se for `false`, desativa a cruz que aparece abaixo do marcador ao arrastar.
  cursor: CursorEnum.POINTER, // Cursor do mouse para mostrar ao passar o mouse.
  draggable: true, // Se for `true`, o marcador recebe eventos de mouse e toque.

  // Ícone para o primeiro plano. Se uma `string` for fornecida, ela será tratada como embora fosse um {@link Icon} com a `string` como {@link Icon#url url}.
  icon: './../../assets/store.svg',
  // label: MarkerLabel, // Adiciona um rótulo ao marcador. O rótulo pode ser uma `string` ou um MarkerLabel
  opacity: 1.0, // A opacidade do marcador entre 0,0 e 1,0.

  /**
    * A otimização renderiza muitos marcadores como um único elemento estático. Otimizado
    * a renderização é habilitada por padrão. Desative a renderização otimizada para animação
    * GIFs ou PNGs, ou quando cada marcador deve ser renderizado como um DOM separado
    * elemento (somente uso avançado).
  */
  optimized: true,
  // title: 'Filial/CB: 1000', // Texto de rolagem
  visible: true, // Se for `true`, o marcador é visível.
};
