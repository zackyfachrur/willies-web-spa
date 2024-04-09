class ShoesController {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

export const WiliesFullWhite = new ShoesController(
  "Wilies Full White",
  `$${65}`
);
export const WiliesHigh = new ShoesController("Wilies High", `$${78}`);
export const WiliesRedLine = new ShoesController("Wilies Red Line", `$${58}`);
export const WiliesClassic = new ShoesController("Wilies Classic", `$${52}`);
export const WiliesRedDot = new ShoesController("Wilies Red Dot", `$${24}`);
export const WiliesMixGreen = new ShoesController("Wilies Mix Green", `$${35}`);
export const WiliesSeaEdition = new ShoesController(
  "Wilies Sea Edition",
  `$${78}`
);
export const WiliesHalfYellow = new ShoesController(
  "Wilies Half Yellow",
  `$${54}`
);
