import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import productShoes from "@/assets/product-shoes.jpg";
import productAccessories from "@/assets/product-accessories.jpg";
import productBag from "@/assets/product-bag.jpg";
import productApparel from "@/assets/product-apparel.jpg";

const Shop = () => {
  const products = [
    { id: 1, name: "Pro Running Shoes", price: 129.99, image: productShoes, category: "Footwear" },
    { id: 2, name: "Yoga Mat & Bottle Set", price: 49.99, image: productAccessories, category: "Accessories" },
    { id: 3, name: "Athletic Gym Bag", price: 79.99, image: productBag, category: "Equipment" },
    { id: 4, name: "Performance Sports Wear", price: 89.99, image: productApparel, category: "Apparel" },
    { id: 5, name: "Training Sneakers", price: 109.99, image: productShoes, category: "Footwear" },
    { id: 6, name: "Resistance Bands Set", price: 34.99, image: productAccessories, category: "Accessories" },
    { id: 7, name: "Duffle Bag Pro", price: 69.99, image: productBag, category: "Equipment" },
    { id: 8, name: "Compression Wear", price: 79.99, image: productApparel, category: "Apparel" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Shop All Products</h1>
          <p className="text-xl opacity-90">
            Discover our complete collection of premium sports gear
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-secondary">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Button variant="default" size="sm">All</Button>
              <Button variant="outline" size="sm">Footwear</Button>
              <Button variant="outline" size="sm">Apparel</Button>
              <Button variant="outline" size="sm">Equipment</Button>
              <Button variant="outline" size="sm">Accessories</Button>
            </div>
            <Select defaultValue="featured">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground mb-6">{products.length} Products</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
