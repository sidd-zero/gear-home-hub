import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About SportGear</h1>
          <p className="text-xl opacity-90">
            Your trusted partner in athletic excellence since 2010
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At SportGear, we're committed to providing athletes and fitness enthusiasts with 
              the highest quality sports equipment and gear. We believe that everyone deserves 
              access to premium products that help them achieve their fitness goals and push 
              their limits.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                We source only the finest materials and partner with trusted brands
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Customer Focus</h3>
              <p className="text-muted-foreground">
                Your satisfaction and success are our top priorities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly evolving to meet the needs of modern athletes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2010 by a group of passionate athletes, SportGear began with a simple 
                vision: to make premium sports equipment accessible to everyone, from beginners 
                to professional athletes.
              </p>
              <p>
                Over the years, we've grown from a small local shop to a trusted online destination 
                for sports enthusiasts worldwide. Our commitment to quality, customer service, and 
                innovation has remained unwavering throughout our journey.
              </p>
              <p>
                Today, we're proud to serve thousands of customers, helping them achieve their 
                fitness goals with our carefully curated selection of sports gear and equipment. 
                We continue to expand our product range while maintaining the personal touch and 
                expertise that our customers have come to trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
