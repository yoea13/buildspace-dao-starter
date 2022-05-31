import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xc39A4c7d6A4a671bFcFb4b992Ef905F896c7FA94");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Biker City",
        description: "This NFT will give you access to BikerDAO!",
        image: readFileSync("scripts/assets/bikernft.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();