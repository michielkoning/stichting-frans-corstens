import { z } from "zod";
import { parseData } from "./parseData";

const fetchData = async <T extends z.ZodTypeAny>(url: string, schema: T) => {
  const credentials = `${process.env.USER}:${process.env.PASSWORD}`;
  const key = Buffer.from(credentials, "utf8").toString("base64");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Basic ${key}`,
    },
  });
  const data = await response.json();

  return parseData(data, schema);
};

export default fetchData;
