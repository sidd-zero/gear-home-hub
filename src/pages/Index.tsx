import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sports.jpg";
import productShoes from "@/assets/product-shoes.jpg";
import productAccessories from "@/assets/product-accessories.jpg";
import productBag from "@/assets/product-bag.jpg";
import productApparel from "@/assets/product-apparel.jpg";

const Index = () => {
  const featuredProducts = [
    { id: 1, name: "Pro Running Shoes", price: 129.99, image: productShoes, category: "Footwear" },
    { id: 2, name: "Yoga Mat & Bottle Set", price: 49.99, image: productAccessories, category: "Accessories" },
    { id: 3, name: "Athletic Gym Bag", price: 79.99, image: productBag, category: "Equipment" },
    { id: 4, name: "Performance Sports Wear", price: 89.99, image: productApparel, category: "Apparel" },
  ];

  const categories = [
    { name: "Footwear", image: productShoes, itemCount: 45 },
    { name: "Apparel", image: productApparel, itemCount: 67 },
    { name: "Equipment", image: productBag, itemCount: 38 },
    { name: "Accessories", image: productAccessories, itemCount: 52 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Gear Up for
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Peak Performance
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover premium sports equipment designed to elevate your game and push your limits.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button size="xl" variant="hero">
                  Shop Now <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="xl" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Free Shipping</h3>
                <p className="text-muted-foreground text-sm">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Secure Payment</h3>
                <p className="text-muted-foreground text-sm">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
                <p className="text-muted-foreground text-sm">Guaranteed authentic products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">
              Check out our most popular items
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button size="lg" variant="default">
                View All Products <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">
              Find exactly what you need
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
