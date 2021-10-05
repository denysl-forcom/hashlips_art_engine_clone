"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description = "100 super rare eyes watching the sell out";
const baseUri = "ipfs://NewUriToReplace";
const baseMetadataName = "SSS Rare Eyes";

const layerConfigurations = [
  {
    growEditionSizeTo: 2,
    layersOrder: [
      { name: "bg" },
      { name: "graphic" },
      { name: "hair" },
      { name: "weapon" },
      { name: "base" },
      { name: "skirt" },
      { name: "arms" },
      { name: "mask" },
      { name: "hat" },
      { name: "accessory" },
      { name: "clan" },
    ],
  },
];

// Array of pairs of {layer, name} objects. These pairs will not be generated together.
// [name] is the string before the rarity delimiter
const notPaired = [
  // [
  //   {
  //     layer: "Eye color",
  //     name: 'Red'
  //   },
  //   {
  //     layer: "Iris",
  //     name: 'Small'
  //   },
  // ],
  // [
  //   {
  //     layer: 'Background',
  //     name: 'Black'
  //   },
  //   {
  //     layer: 'Eye color',
  //     name: 'Yellow'
  //   }
  // ]
];
const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2769,
  height: 3000,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  baseMetadataName,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  notPaired,
};
