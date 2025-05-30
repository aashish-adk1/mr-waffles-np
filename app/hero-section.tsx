"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
    Award,

  X,
  
} from "lucide-react";

const MrWafflesNepal = () => {
  const [, setActiveSection] = useState("home");
  const [, setMobileMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedItem, setSelectedItem] = useState<NewItem | null>(null);

  const treePopsicles = [
    {
      name: "Oreo Bites",
      price: 119,
      originalPrice: 199,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
      icon: "★",
      description: "Crunchy Oreo pieces with creamy vanilla",
    },
    {
      name: "Strawberry Kiss",
      price: 149,
      originalPrice: 249,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
      icon: "★",
      description: "Fresh strawberry with sweet cream",
    },
    {
      name: "Royal Pistachio",
      price: 199,
      originalPrice: 349,
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=200&fit=crop",
      icon: "★",
      description: "Premium pistachio with rich texture",
    },
    {
      name: "Milky Bar",
      price: 109,
      originalPrice: 169,
      image:
        "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=300&h=200&fit=crop",
      icon: "●",
      description: "Classic white chocolate delight",
    },
    {
      name: "Kitkat Munch",
      price: 179,
      originalPrice: 199,
      image:
        "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=300&h=200&fit=crop",
      description: "Crunchy KitKat with chocolate layers",
    },
    {
      name: "Oregon Blueberry",
      price: 179,
      originalPrice: 299,
      image:
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=300&h=200&fit=crop",
      icon: "★",
      description: "Fresh Oregon blueberries with cream",
    },
    {
      name: "Dark Fantasy",
      price: 99,
      originalPrice: 149,
      image:
        "https://images.unsplash.com/photo-1511381939415-e44015466834?w=300&h=200&fit=crop",
      description: "Rich dark chocolate indulgence",
    },
    {
      name: "High on Chocolate",
      price: 119,
      originalPrice: 169,
      image:
        "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=300&h=200&fit=crop",
      description: "Double chocolate for true choco lovers",
    },
    {
      name: "Coco Panda",
      price: 99,
      originalPrice: 169,
      image:
        "https://images.unsplash.com/photo-1587049016823-69c735b5d83d?w=300&h=200&fit=crop",
      description: "Coconut cream with chocolate chips",
    },
    {
      name: "Mango Madness",
      price: 149,
      originalPrice: 249,
      image:
        "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300&h=200&fit=crop",
      icon: "★",
      description: "Tropical mango with creamy texture",
    },
  ];


  const miniPancakes = [
    {
      name: "Oreo and Juliet",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=300&h=200&fit=crop",
      description: "Mini pancakes with crushed Oreo topping",
    },
    {
      name: "Blueberry Baby",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop",
      description: "Tiny pancakes loaded with fresh blueberries",
    },
    {
      name: "Tiny Pistachio",
      price: 349,
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=200&fit=crop",
      description: "Mini pancakes with premium pistachio",
    },
    {
      name: "Dark Knight",
      price: 159,
      image:
        "https://images.unsplash.com/photo-1511381939415-e44015466834?w=300&h=200&fit=crop",
      description: "Dark chocolate mini pancakes",
    },
    {
      name: "Choco Moco",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
      description: "Chocolate loaded mini pancakes",
    },
    {
      name: "Mini Minions",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300&h=200&fit=crop",
      description: "Banana flavored mini pancakes",
    },
  ];

  const extraToppings = [
    {
      name: "Oreo",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
      description: "Crushed Oreo cookies",
    },
    {
      name: "Kitkat",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=300&h=200&fit=crop",
      description: "Crunchy KitKat pieces",
    },
    {
      name: "Rainbow",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=200&fit=crop",
      description: "Colorful rainbow sprinkles",
    },
    {
      name: "Chocochips",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1511381939415-e44015466834?w=300&h=200&fit=crop",
      description: "Premium chocolate chips",
    },
  ];

  type MenuCardItem = {
    name: string;
    price: number;
    originalPrice?: number | null;
    image: string;
    description: string;
  };

  const MenuCard = ({
    item,
    showOriginalPrice = false,
  }: {
    item: MenuCardItem;
    showOriginalPrice?: boolean;
  }) => (
    <div className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 overflow-hidden">
      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="flex items-center space-x-4 mb-3 relative z-10">
        <div className="relative">
          <Image
            src={item.image}
            alt={item.name}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full object-cover border-3 border-orange-200 group-hover:border-orange-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white/20 group-hover:to-white/40 transition-all duration-300"></div>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-300">
            <span
              dangerouslySetInnerHTML={{
                __html: item.name.replace(
                  /\*\*(.*?)\*\*/g,
                  "<strong>$1</strong>"
                ),
              }}
            />
          </h4>
          <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {item.description}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center relative z-10">
        <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
          ₹{item.price}
        </span>
        {showOriginalPrice && item.originalPrice && (
          <span className="text-gray-500 line-through text-lg">
            ₹{item.originalPrice}
          </span>
        )}
      </div>
    </div>
  );

  const CategoryHeader = ({ title }: { title: string }) => (
    <div className="flex items-center justify-center mb-12">
      <div className="flex items-center space-x-6">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
          {title}
        </h3>
      </div>
    </div>
  );
  const newItems = [
    {
      id: 1,
      title: "Himalayan Honey Waffles",
      description:
        "New range featuring pure mountain honey from different regions of Nepal. Sourced directly from high-altitude beekeepers, this collection offers unique floral notes and medicinal properties that can only be found in the pristine Himalayan environment.",
      image: "https://images.unsplash.com/photo-1576615278693-f8e095e37e01",
      shortDesc:
        "New range featuring pure mountain honey from different regions of Nepal",
    },
    {
      id: 2,
      title: "Royal Pistachio",
      description:
        "Limited edition savory waffle with locally sourced bamboo shoots. This innovative creation combines traditional Nepali ingredients with modern waffle-making techniques, creating a unique fusion that celebrates local flavors in an unexpected way.",
      image: "https://images.unsplash.com/photo-1666052137730-e2c5c87f5671",
      shortDesc:
        "Limited edition savory waffle with locally sourced bamboo shoots",
    },
    {
      id: 3,
      title: "Ice Cream Waffles",
      description:
        "Fresh waffles paired with premium local ice cream flavors. Made with organic dairy from Himalayan highlands, our ice cream selection includes unique flavors like yak milk vanilla, rhododendron berry, and traditional cardamom kulfi.",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop",
      shortDesc: "Fresh waffles paired with premium local ice cream flavors",
    },
  ];

  type NewItem = {
    id: number;
    title: string;
    description: string;
    image: string;
    shortDesc: string;
  };

  const openLightbox = (item: NewItem) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const awards = [
    "Best Waffle Brand Nepal 2023",
    "Most Popular Himalayan Fusion Waffle",
    "Excellence in Food Service 2024",
    "Top Franchise Opportunity Nepal",
    "Customer Choice Award 2023",
    "Innovation in Local Cuisine",
    "Best Dessert Restaurant Kathmandu",
    "Startup of the Year 2022",
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const initialPhotos = [
    {
      src: "https://images.unsplash.com/photo-1568051243851-f9b136146e97",
      alt: "Golden Belgian waffle with syrup",
      placeholder: "Waffle+1",
    },
    {
      src: "https://images.unsplash.com/photo-1562376552-0d160a2f238d",
      alt: "Waffle topped with fresh berries",
      placeholder: "Waffle+2",
    },
    {
      src: "https://images.unsplash.com/photo-1641924673100-7c9f0682ece6",
      alt: "Stack of homemade waffles",
      placeholder: "Waffle+3",
    },
    {
      src: "https://images.unsplash.com/photo-1619674072044-da7ecf3b17cd",
      alt: "Waffle with vanilla ice cream",
      placeholder: "Waffle+4",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1673011779086-252d428e7931",
      alt: "Fresh waffle in waffle maker",
      placeholder: "Waffle+5",
    },
    {
      src: "https://images.unsplash.com/photo-1643712766258-1cda3e99e194",
      alt: "Breakfast plate with waffles",
      placeholder: "Waffle+6",
    },
    {
      src: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&h=500&fit=crop&auto=format",
      alt: "Waffle with fresh strawberries and cream",
      placeholder: "Waffle+7",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop&auto=format",
      alt: "Chocolate waffle with toppings",
      placeholder: "Waffle+8",
    },
  ];

  // Additional photos (shown when "View More" is clicked)
  const additionalPhotos = [
    {
      src: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd",
      alt: "Belgian waffle with powdered sugar",
      placeholder: "Waffle+9",
    },
    {
      src: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
      alt: "Heart-shaped waffle with berries",
      placeholder: "Waffle+10",
    },
    {
      src: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32",
      alt: "Waffle with honey drizzle",
      placeholder: "Waffle+11",
    },
    {
      src: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841",
      alt: "Mini waffles with fruit",
      placeholder: "Waffle+12",
    },
    {
      src: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51",
      alt: "Waffle sandwich creation",
      placeholder: "Waffle+13",
    },
    {
      src: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa",
      alt: "Gourmet waffle platter",
      placeholder: "Waffle+14",
    },
    {
      src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      alt: "Waffle with whipped cream",
      placeholder: "Waffle+15",
    },
    {
      src: "https://images.unsplash.com/photo-1571197857029-2ca7143fb862",
      alt: "Artisan waffle creation",
      placeholder: "Waffle+16",
    },
  ];

  const allPhotos = showMore
    ? [...initialPhotos, ...additionalPhotos]
    : initialPhotos;

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    placeholder: string
  ) => {
    (
      e.target as HTMLImageElement
    ).src = `https://via.placeholder.com/500x500/F59E0B/FFFFFF?text=${placeholder}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section id="home" className="pt-16 overflow-hidden">
        <div className="relative pt-24 md:pt-36">
          {/* Background decorative elements */}
          <div className="absolute inset-0 isolate hidden opacity-65 lg:block">
            <div className="w-140 h-320 absolute left-0 top-0 -rotate-45 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10" />
            <div className="h-320 absolute right-0 top-0 w-60 -rotate-45 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              {/* Announcement Banner */}
              <div className="mx-auto flex w-fit items-center gap-4 rounded-full border border-amber-300/30 bg-amber-50/50 p-1 pl-4 shadow-md">
                <span className="text-sm">
                  🧇 New Himalayan Honey Waffles Available Now!
                </span>
                <div className="bg-white size-6 rounded-full flex items-center justify-center">
                  <ArrowRight className="size-3" />
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="mt-8 text-6xl md:text-7xl xl:text-8xl bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent font-bold">
                Mr. Waffles Nepal
              </h1>

              {/* Subheading */}
              <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600">
                Experience authentic Belgian waffles with a Himalayan twist.
                Fresh, crispy, and made with love in the heart of Nepal. From
                classic to fusion flavors that celebrate our culture.
              </p>

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
                <button
                  onClick={() => scrollToSection("products")}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-xl text-lg shadow-lg transform transition hover:scale-105"
                >
                  Order Now
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-amber-300 hover:bg-amber-50 transition"
                >
                  <MapPin className="size-4" />
                  Find Locations
                </button>
              </div>
            </div>

            {/* Product Showcase */}
            <div className="relative mt-20 overflow-hidden px-2">
              <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-amber-200/30 bg-white/50 p-8 shadow-xl">
                <div
                  className="aspect-video relative rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqke7BBCbQ8cdPYoRdgytPNiDxwY267AsXRxFcndoiTZPgHbqdwBFiZUH2vJrWV8Ag-LbIhE2tR-YitCDy5BuczdyT--sUV68zNKNWBjR2bugp92cGAu7NdX4HAMTk-O0U3hPe9=s1360-w1360-h1020-rw')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

                  {/* Content */}
                  <div className="text-center relative z-10">
                    <div className="text-8xl mb-4 drop-shadow-lg">🧇</div>
                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      Delicious Waffles Await
                    </h3>
                    <p className="text-xl text-white/90 drop-shadow-md">
                      Fresh • Crispy • Authentic
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proudly Serving Nepal
            </h2>
            <p className="text-gray-600">
              Join thousands of happy customers across major cities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                5000+
              </div>
              <p className="text-gray-600 font-medium">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                12
              </div>
              <p className="text-gray-600 font-medium">Locations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                50+
              </div>
              <p className="text-gray-600 font-medium">Waffle Varieties</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                3
              </div>
              <p className="text-gray-600 font-medium">Cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Items Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
              What&apos;s New
            </h2>
            <p className="text-xl text-gray-600">
              Discover our latest creations and seasonal specials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onClick={() => openLightbox(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.shortDesc}
                  </p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
              Our Delicious Menu
            </h2>
            <p className="text-xl text-gray-600">
              From classic Belgian waffles to innovative Himalayan fusion
            </p>
          </div>

          {/* Tree Popsicles */}
          <CategoryHeader title="Tree Popsicles" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {treePopsicles.map((item, index) => (
              <MenuCard key={index} item={item} showOriginalPrice={true} />
            ))}
          </div>

          {/* Mini Pancakes */}
          <CategoryHeader title="Mini Pancakes" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {miniPancakes.map((item, index) => (
              <MenuCard key={index} item={item} />
            ))}
          </div>

          {/* Extra Toppings */}
          <CategoryHeader title="Extra Toppings" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {extraToppings.map((item, index) => (
              <MenuCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
              Gallery
            </h2>
            <p className="text-xl text-gray-600">
              A visual feast of our delicious creations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allPhotos.map((photo, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => handleImageError(e, photo.placeholder)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transform transition hover:scale-105"
            >
              {showMore ? "Show Less" : "View More Photos"}
            </button>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Proudly recognized for excellence in taste and service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-orange-200/30"
              >
                <div className="mb-4">
                  <Award className="w-12 h-12 mx-auto text-orange-500 group-hover:text-orange-600 transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                  {award}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      

     

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg z-10 transition-all duration-200 hover:scale-110"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="relative h-80 md:h-96">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl"></div>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedItem.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedItem.description}
                </p>
                
               
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MrWafflesNepal;