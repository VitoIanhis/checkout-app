import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="border border-red-500 p-5">
      <h1 className="text-red-500" p-5>
        Product page
      </h1>
      <Button>Buy</Button>
      <Input placeholder="Name" />
    </div>
  );
};

export default ProductPage;
