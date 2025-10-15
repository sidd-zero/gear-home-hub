import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center font-bold text-primary-foreground">
                SG
              </div>
              <span className="text-xl font-bold">SportGear</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your ultimate destination for premium sports equipment and gear.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Shop
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Footwear
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Apparel
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Equipment
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Accessories
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SportGear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
