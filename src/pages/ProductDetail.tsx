import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Truck, Shield } from "lucide-react";
import { useParams } from "react-router-dom";
import productShoes from "@/assets/product-shoes.jpg";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden bg-secondary border border-border">
                <img
                  src={productShoes}
                  alt="Product"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden bg-secondary border border-border cursor-pointer hover:border-primary transition-colors"
                  >
                    <img
                      src={productShoes}
                      alt={`Thumbnail ${i}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Footwear</p>
              <h1 className="text-4xl font-bold mb-4">Pro Running Shoes</h1>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-primary">$129.99</span>
                <span className="text-xl text-muted-foreground line-through">$179.99</span>
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                  28% OFF
                </span>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Experience ultimate comfort and performance with our Pro Running Shoes. 
                Engineered with advanced cushioning technology and breathable materials, 
                these shoes are designed to help you achieve your best performance while 
                providing exceptional support and durability.
              </p>

              {/* Size Selection */}
              <div className="mb-6">
                <p className="font-bold mb-3">Select Size</p>
                <div className="flex flex-wrap gap-2">
                  {['7', '8', '9', '10', '11', '12'].map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      className="w-14 h-14"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-8">
                <Button size="lg" className="flex-1" variant="default">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-4 border-t border-border pt-6">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-primary" />
                  <span className="text-sm">Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm">1 year warranty included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
