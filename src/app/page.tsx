import { ChefHat } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

const InitialPage = async () => {
  const restaurants = await getRestaurantBySlug("fsw-donalds");
  if (!restaurants) {
    return notFound();
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-red-600">
      <ChefHat color="white" width={150} height={150} />
      <h1 className="pb-6 text-5xl font-bold text-white">Food Service</h1>
      <Button
        variant="outline"
        className="rounded-full bg-red-600 font-semibold text-white"
      >
        <Link href={`/fsw-donalds`}>Ir para o Restaurante</Link>
      </Button>
    </div>
  );
};

export default InitialPage;
