import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  image: string;
  itemCount: number;
}

export const CategoryCard = ({ name, image, itemCount }: CategoryCardProps) => {
  return (
    <Link to="/shop" className="group">
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-secondary border border-border hover:shadow-[var(--shadow-elevated)] transition-all duration-300">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end p-6">
          <div>
            <h3 className="text-2xl font-bold mb-1">{name}</h3>
            <p className="text-muted-foreground text-sm">{itemCount} Products</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
