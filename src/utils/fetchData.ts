import { z } from "zod";
import { parseData } from "./parseData";

const fetchData = async <T extends z.ZodTypeAny>(url: string, schema: T) => {
  const response = await fetch(url);
  const data = await response.json();

  return parseData(data, schema);
};

export default fetchData;
