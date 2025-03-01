import { db } from "@/lib/prisma";

export const getAllRestaurants = async () => {
  try {
    const restaurants = await db.restaurant.findMany();
    return restaurants;
  } catch (error) {
    console.error("Erro ao buscar restaurantes:", error);
    throw new Error("Erro ao buscar restaurantes.");
  }
};
