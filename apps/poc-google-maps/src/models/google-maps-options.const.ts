import { GoogleMapsOptions } from "./google-maps-options";
import { MapTypeId } from "./map-typeId.enum";

export const GoogleMapsOptionsConst: Required<GoogleMapsOptions> = {
  width: "100%",
  height: "480px",
  center: { lat: -23.55548454802656, lng: -46.640139324889695 },
  zoom: 13,
  mapTypeId: MapTypeId.ROADMAP,
};
