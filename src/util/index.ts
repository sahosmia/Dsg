import { industries, solutions } from "../data/dummy";



export const getIndustryitem = (id: string | undefined) => {
  if (typeof id != "undefined") {
    try {
      const data = industries.find((item) => item.id === parseInt(id));
      if (data) {
        return data;
      }
      throw new Response("error", { status: 404 });
    } catch (error) {
      throw new Response("data not found", { status: 404 });
    }
  }
  throw new Response("Somthing is error", { status: 404 });
};




export const getCapacityitem = (id: string | undefined) => {
  if (typeof id != "undefined") {
    try {
      const data = solutions.find((item) => item.id === parseInt(id));
      if (data) {
        return data;
      }
      throw new Response("error", { status: 404 });
    } catch (error) {
      throw new Response("data not found", { status: 404 });
    }
  }
  throw new Response("Somthing is error", { status: 404 });
};
