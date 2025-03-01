import { ChefHat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getAllRestaurants } from "@/data/get-all-restaurants";

const InitialPage = async () => {
  const restaurants = await getAllRestaurants();
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-red-600">
      <ChefHat color="white" width={150} height={150} />
      <h1 className="pb-6 text-5xl font-bold text-white">Food Service</h1>
      <div className="flex flex-col items-center gap-6">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="flex flex-col items-center gap-2">
            <div className="flex h-[110px] w-[110px] flex-col items-center justify-center rounded-xl bg-white">
              <Image
                alt={restaurant.name}
                src={restaurant.avatarImageUrl}
                width={100}
                height={100}
                className="border border-white"
              />
            </div>
            <div className="font-semibold text-white">{restaurant.name}</div>

            <Button
              variant="outline"
              className="w-48 rounded-full bg-red-600 font-semibold text-white -outline-offset-8"
            >
              <Link href={`/${restaurant.slug}`}>Ir para o Restaurante!</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InitialPage;
