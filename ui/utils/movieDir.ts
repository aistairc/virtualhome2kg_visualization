import axios from "axios";
import { NamedNode } from "rdf-js";
import { fetchActivityTypes, PREFIXES } from "./sparql";

const MovieStoreURL = "https://kgrc4si.home.kg/Movie/movies5.0/";

export const makeMoviePath = async (
  activity: NamedNode<string>,
  label: string,
  scene: string
): Promise<string | null> => {
  const results = await fetchActivityTypes(activity);
  console.log(activity);
  const sceneFilename = `${scene.replace(PREFIXES.ex, "")}/movies/${label.replace(
    " ",
    "%20"
  )}_0.mp4`;
  console.log(sceneFilename);
  for (const result of results) {
    const url = `${MovieStoreURL}${result.subClassOf.value.replace(
      PREFIXES.ho,
      ""
    )}/${sceneFilename}`;
    try {
      await axios.head(url, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });
      return url;
    } catch (error) {
      console.log("get", error);
    }
  }
  return null;
};
