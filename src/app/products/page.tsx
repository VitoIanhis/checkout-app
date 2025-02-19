import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="p-5" border-red-500>
      <h1 className="text-red-500">Product page</h1>
      <Button>Buy</Button>
      <Input placeholder="Name" />
    </div>
  );
};

export default ProductPage;
