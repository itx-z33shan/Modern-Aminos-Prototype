import { motion } from "framer-motion";
import {
  ArrowRight,
  Beaker,
  Brain,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Cuboid,
  FlaskConical,
  Mail,
  Menu,
  Package,
  Pill,
  Plus,
  Search,
  ShieldCheck,
  ShoppingCart,
  Star,
  TestTube,
  Truck,
  Wine,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const pageData = {
  nav: [
    { label: "Home", active: true },
    { label: "Shop", hasArrow: true },
    { label: "COA’s" },
    { label: "FAQs" },
    { label: "Contact Us" },
    { label: "My Account" },
  ],
  hero: {
    badge: "Trusted by 10,000+ Researchers",
    title: "Premium Research Materials.",
    subtitle: "Verified Down To The Batch.",
    description:
      "Every product is third-party tested with full HPLC documentation. Confidence isn’t claimed — it’s documented.",
    actions: ["Shop Best Sellers", "Verify A Batch"],
    quote:
      "COA matched independent testing perfectly. Best purity I’ve used. Reordering monthly.",
    quoteAuthor: "Verified Buyer",
    stats: [
      { label: "98%+ Purity", sub: "Purity Verified", icon: ShieldCheck },
      { label: "50K+", sub: "Orders Delivered", icon: Package },
      { label: "4.9/5", sub: "Customer Rating", icon: Star },
    ],
  },
  trustStrip: [
    {
      title: "3rd Party Tested",
      text: "Every batch independently verified for purity and quality",
      icon: FlaskConical,
    },
    {
      title: "Fast Shipping",
      text: "Same-day shipping on orders before 12pm CST",
      icon: Truck,
    },
    {
      title: "Expert Support",
      text: "24/7 customer support from research specialists",
      icon: Mail,
    },
    {
      title: "Secure & Safe",
      text: "SSL encrypted checkout and discreet packaging",
      icon: ShieldCheck,
    },
  ],
  categories: [
    { title: "Aminos", count: "16 Products", icon: TestTube },
    {
      title: "Cognitive Compounds",
      count: "27 Products",
      icon: Brain,
      active: true,
    },
    { title: "Liquids", count: "20 Products", icon: Wine },
    { title: "Peptides", count: "60 Products", icon: Beaker },
    { title: "Powders", count: "52 Products", icon: Pill },
    { title: "Sarms", count: "14 Products", icon: Cuboid },
  ],
  products: [
    {
      name: "Glow (GHK-CU, TB-500, BPC-157)",
      price: "$98.00–$124.00",
      action: "Select options",
      image: "/product1.webp",
    },
    {
      name: "GLP/GIP/Glucagon (RT)",
      price: "$62.90–$411.40",
      action: "Select options",
      image: "/product2.webp",
    },
    {
      name: "IGF-1 LR3 1MG",
      price: "$68.00",
      action: "Add to cart",
      image: "/product1.webp",
    },
    {
      name: "L-Carnitine (20ML)",
      price: "$48.00",
      action: "Add to cart",
      image: "/product2.webp",
    },
  ],
  newArrivals: [
    {
      name: "Cartalax 20MG",
      price: "$64.00",
      action: "Add to cart",
      image: "/product1.webp",
    },
    {
      name: "CMS-121",
      price: "$58.00",
      action: "Add to cart",
      image: "/product2.webp",
    },
    {
      name: "J-147",
      price: "$134.00",
      action: "Add to cart",
      image: "/product1.webp",
    },
    {
      name: "L-THP",
      price: "$38.00",
      action: "Add to cart",
      image: "/product2.webp",
    },
  ],
  comingSoon: [
    {
      name: "BPAP",
      price: "$48.00",
      action: "Read more",
      image: "/product1.webp",
      outOfStock: true,
    },
    {
      name: "Orforgliperon",
      price: "$108.00",
      action: "Read more",
      image: "/product2.webp",
      outOfStock: true,
    },
    {
      name: "PRL-8-53",
      price: "$38.00",
      action: "Read more",
      image: "/product1.webp",
      outOfStock: true,
    },
    {
      name: "VILON 20MG",
      price: "$64.00",
      action: "Read more",
      image: "/product2.webp",
      outOfStock: true,
    },
  ],
  qrSection: {
    title: "Scan The QR Code On Your Vial Label",
    description:
      "It will take you directly to the specific Certificate of Analysis for that batch. If the QR code is not working you can match the COA to the label using the unique number above the code.",
    action: "View our quality assurance page",
    image: "/QR.svg",
  },
  testimonials: [
    {
      name: "Dr. Michael Chen",
      role: "Research Lab Director",
      initials: "DM",
      quote:
        "Switched from our previous vendor after purity issues. Modern Aminos COAs have matched our independent testing every single time. The consistency is unmatched.",
    },
    {
      name: "S. Kim",
      role: "Operations Manager",
      initials: "SK",
      quote:
        "Same-day shipping is a game changer for our clinic supply chain. We order Monday morning and have product by Wednesday. Lot traceability makes compliance easy.",
    },
    {
      name: "M. Torres",
      role: "Biochemistry Researcher",
      initials: "MT",
      quote:
        "The HPLC certificates give us full confidence in what we’re working with. Customer support actually understands the science. Rare in this space.",
    },
  ],
  faqs: [
    {
      question: "How long do orders take to ship?",
      answer:
        "We typically aim to ship orders within 1–2 business days. We do not ship on weekends. During high-volume periods, shipping may extend by an additional day or two.",
    },
    {
      question: "Do you ship internationally or only in the US?",
      answer:
        "We support the USA and EU through separate storefronts depending on fulfillment requirements.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We support multiple checkout options. Final availability may vary by region and order type.",
    },
    {
      question: 'Why are your products labeled "Not for Human Consumption"?',
      answer:
        "Products are intended strictly for laboratory and research use in qualified environments.",
    },
  ],
};

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
};

const sectionHeading = (before, highlight) => (
  <h3 className="text-[20px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#0e2433] sm:text-[24px] md:text-[36px]">
    {before} <span className="text-[#1b6ea1]">{highlight}</span>
  </h3>
);

function CardButton({ label }) {
  return (
    <button className="mt-2.5 flex h-9 w-full items-center justify-center gap-2 rounded-full border border-[#2f7eaa] text-[12px] font-medium text-[#2f7eaa] transition hover:bg-[#2f7eaa] hover:text-white sm:mt-3 sm:h-10 sm:text-[13px]">
      <ShoppingCart className="h-3.5 w-3.5" />
      {label}
    </button>
  );
}

function ProductCard({ product }) {
  return (
    <motion.article
      whileHover={{ y: -3, boxShadow: "0 12px 24px rgba(18,45,63,0.08)" }}
      className="relative rounded-[12px] border border-[#eef2f5] bg-white p-2 shadow-[0_2px_10px_rgba(0,0,0,0.05)] sm:p-2.5"
    >
      {product.outOfStock && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-red-600 px-2 py-1 text-[9px] font-medium text-white">
          Out of Stock
        </span>
      )}

      <div className="overflow-hidden rounded-[10px] bg-[#f1f2f4]">
        <img
          src={product.image}
          alt={product.name}
          className="h-[145px] w-full object-cover sm:h-[190px]"
        />
      </div>

      <p className="mt-2.5 min-h-[40px] text-center text-[12px] leading-[1.25] font-semibold text-[#1a6d9c] sm:min-h-[46px] sm:text-[14px]">
        {product.name}
      </p>

      <p className="mt-1.5 text-center text-[12px] font-semibold text-[#0f2533] sm:text-[14px]">
        {product.price}
      </p>

      <CardButton label={product.action} />
    </motion.article>
  );
}

function SharpStar({ className = "h-4 w-4", color = "#D4A843" }) {
  return (
    <svg
      viewBox="57.4405 0 17.119 16.2812"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M66 0L68.0206 6.21885H74.5595L69.2694 10.0623L71.2901 16.2812L66 12.4377L60.7099 16.2812L62.7306 10.0623L57.4405 6.21885H63.9794L66 0Z"
        fill={color}
      />
    </svg>
  );
}
export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);

  const trustStripRef = useRef(null);
  const categoriesRef = useRef(null);

  const trustVisibleRef = useRef(false);
  const categoriesVisibleRef = useRef(false);

  useEffect(() => {
    const trustEl = trustStripRef.current;
    const categoriesEl = categoriesRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === trustEl) {
            trustVisibleRef.current = entry.isIntersecting;
          }
          if (entry.target === categoriesEl) {
            categoriesVisibleRef.current = entry.isIntersecting;
          }
        });
      },
      { threshold: 0.45 },
    );

    if (trustEl) observer.observe(trustEl);
    if (categoriesEl) observer.observe(categoriesEl);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = trustStripRef.current;
    if (!container) return;

    let currentIndex = 0;

    const getCards = () => container.querySelectorAll("[data-trust-card]");

    const scrollToCard = (index) => {
      const cards = getCards();
      if (!cards.length) return;

      const target = cards[index];
      if (!target) return;

      container.scrollTo({
        left: target.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    };

    const autoScroll = setInterval(() => {
      if (window.innerWidth >= 1024) return;
      if (!trustVisibleRef.current) return;

      const cards = getCards();
      if (!cards.length) return;

      currentIndex = (currentIndex + 1) % cards.length;
      scrollToCard(currentIndex);
    }, 2600);

    return () => clearInterval(autoScroll);
  }, []);

  useEffect(() => {
    const container = categoriesRef.current;
    if (!container) return;

    let currentIndex = 0;

    const getCards = () => container.querySelectorAll("[data-category-card]");

    const scrollToCard = (index) => {
      const cards = getCards();
      if (!cards.length) return;

      const target = cards[index];
      if (!target) return;

      container.scrollTo({
        left: target.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    };

    const autoScroll = setInterval(() => {
      if (window.innerWidth >= 640) return;
      if (!categoriesVisibleRef.current) return;

      const cards = getCards();
      if (!cards.length) return;

      currentIndex = (currentIndex + 1) % cards.length;
      scrollToCard(currentIndex);
    }, 2700);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="bg-white text-[#0f2533]">
      {/* Top blue notice bar */}
      <div className="bg-[#18689a] py-1 text-center text-[18px] font-medium text-white sm:text-[12px] md:text-[18px]">
        For laboratory research use only. Not for human consumption.
      </div>

      {/* Navbar */}
      <header className="border-b border-[#e7edf3] bg-white">
        <div className="mx-auto flex h-[100px] w-full max-w-[1280px] items-center justify-between px-4 sm:h-[100px] sm:px-6 lg:px-8">
          <a href="#" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Modern Aminos"
              className="h-auto w-[138px] sm:w-[190px] md:w-[230px]"
            />
          </a>

          <nav className="hidden items-center gap-7 text-[14px] font-medium text-[#0f2533] lg:flex">
            {pageData.nav.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-1 transition-colors hover:text-[#1b6ea1] ${
                  item.active
                    ? "rounded-full bg-[#e8f1f8] px-4 py-2.5 text-[#1b6ea1]"
                    : ""
                }`}
              >
                {item.label}
                {item.hasArrow && <ChevronDown className="h-4 w-4" />}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3.5">
            <button className="relative text-[#1b6ea1]">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-red-600 text-[8px] text-white sm:h-5 sm:w-5 sm:text-[10px]">
                0
              </span>
            </button>

            <button className="flex items-center gap-1 text-[12px] font-medium text-[#1b6ea1] sm:text-[13px]">
              USA <ChevronDown className="h-4 w-4" />
            </button>

            <button className="text-[#1b6ea1]">
              <Search className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button className="text-[#1b6ea1]">
              <CircleUserRound className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button
              onClick={() => setMobileMenu(true)}
              className="text-[#1b6ea1] lg:hidden"
            >
              <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-[82%] bg-white p-6 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <img src="/logo.svg" alt="Modern Aminos" className="w-[160px]" />
              <button onClick={() => setMobileMenu(false)}>
                <X className="h-6 w-6 text-[#0f2533]" />
              </button>
            </div>

            <div className="space-y-5 text-[15px] font-medium">
              {pageData.nav.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="block text-[#122d3f]"
                  onClick={() => setMobileMenu(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <main>
        {/* Hero */}
        <section className="bg-[#083553] py-7 text-[#ffffff] sm:py-10 md:py-14">
          <motion.div
            {...fadeInUp}
            className="mx-auto grid w-full max-w-[1280px] gap-5 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"
          >
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-9 py-3 text-[10px] font-medium text-white sm:mb-4 sm:text-[14px]">
                <SharpStar className="h-3.5 w-3.5" color="#d5a73f" />
                {pageData.hero.badge}
              </p>

              <h1 className="max-w-[290px] text-[30px] leading-[1.02] font-bold tracking-[-0.04em] sm:max-w-[460px] sm:text-[34px] md:text-[48px]">
                {pageData.hero.title}
              </h1>

              <h2 className="mt-3 max-w-[310px] text-[22px] leading-[1.08] font-semibold tracking-[-0.03em] text-[#d8a741] sm:max-w-[520px] sm:text-[26px] md:text-[38px]">
                {pageData.hero.subtitle}
              </h2>

              <p className="mt-4 max-w-[330px] text-[14px] leading-[1.75] text-[#e5eef5] sm:max-w-[560px] sm:text-[15px] md:text-[16px]">
                {pageData.hero.description}
              </p>

              <div className="mt-6 flex gap-3">
                <button className="flex h-10 flex-1 items-center justify-center gap-2 rounded-[10px] bg-[#1f79b0] px-3 text-[13px] font-semibold transition hover:bg-[#186c9e] sm:h-11 sm:px-6 sm:text-[14px]">
                  {pageData.hero.actions[0]}
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button className="flex h-10 flex-1 items-center justify-center rounded-[10px] border border-[#2e84b7] px-3 text-[13px] font-semibold transition hover:bg-white/5 sm:h-11 sm:px-6 sm:text-[14px]">
                  {pageData.hero.actions[1]}
                </button>
              </div>
            </div>

            <div>
              <div className="rounded-[20px] border border-white/15 bg-white/10 p-4 sm:p-5">
                <p className="mb-3 flex gap-1 text-[#d3a43f]">
                  {[...Array(5)].map((_, i) => (
                    <SharpStar key={i} className="h-4 w-4 fill-current" />
                  ))}
                </p>

                <p className="text-[13px] leading-[1.8] italic sm:text-[15px] sm:leading-6">
                  “{pageData.hero.quote}”
                </p>

                <p className="mt-3 text-[13px] font-semibold sm:text-[14px]">
                  — {pageData.hero.quoteAuthor}
                </p>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {pageData.hero.stats.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -2 }}
                    className="rounded-xl border border-white/15 bg-white/10 p-2.5 sm:p-3"
                  >
                    <item.icon className="mb-1.5 h-4 w-4 text-[#d6a740] sm:h-5 sm:w-5" />
                    <p className="text-[13px] font-semibold text-[#d6a740] sm:text-[16px]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-[9px] leading-4 text-[#c0d1de] sm:text-[10px] sm:leading-4">
                      {item.sub}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Trust Strip */}
        <section className="border-y border-[#e4ebf1] bg-[#f6f9fb] py-4">
          <div
            ref={trustStripRef}
            className="trust-scroll mx-auto flex gap-4 overflow-x-auto px-4 [scrollbar-width:none] [-ms-overflow-style:none] snap-x snap-mandatory sm:px-6 lg:grid lg:max-w-[1280px] lg:grid-cols-4 lg:overflow-visible lg:px-8"
          >
            {pageData.trustStrip.map((item) => (
              <div
                key={item.title}
                data-trust-card
                className="flex min-w-[82%] snap-start items-center gap-3 rounded-[16px] border border-[#dbe6ef] bg-white px-3 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)] sm:min-w-[250px] lg:min-w-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#dfebf5] text-[#2d7ca8]">
                  <item.icon className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[14px] font-semibold text-[#0f2533] sm:text-[15px]">
                    {item.title}
                  </p>
                  <p className="text-[11px] leading-4 text-[#748392] sm:text-[12px] sm:leading-5">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shop by Category */}
        <motion.section
          {...fadeInUp}
          className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            {sectionHeading("Shop by", "Category")}
            <button className="h-9 rounded-full bg-[#1b6ea1] px-5 text-[12px] font-semibold text-white sm:h-10 sm:px-7 sm:text-[13px]">
              See All Products
            </button>
          </div>

          <div className="relative">
            <button className="absolute left-[-14px] top-1/2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-[#d8e8f4] text-[#1b6ea1] lg:grid">
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div
              ref={categoriesRef}
              className="category-scroll flex gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none] snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 lg:grid-cols-6"
            >
              {pageData.categories.map((category) => (
                <div
                  key={category.title}
                  data-category-card
                  className={`min-w-[132px] snap-start rounded-[12px] border px-3 py-3 text-center transition sm:min-w-0 sm:px-4 sm:py-4 ${
                    category.active
                      ? "border-[#2876a7] bg-[#edf4fa]"
                      : "border-[#d7e0e9] bg-white hover:border-[#2876a7]/40"
                  }`}
                >
                  <div className="mx-auto mb-2.5 grid h-[62px] w-[62px] place-items-center rounded-[10px] bg-[#f4f6f8] text-[#2f7ea9]">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <p className="text-[12px] font-medium text-[#1f6f9f] sm:text-[13px]">
                    {category.title}
                  </p>
                  <p className="mt-1 text-[10px] text-[#8a98a6] sm:text-[11px]">
                    {category.count}
                  </p>
                </div>
              ))}
            </div>

            <button className="absolute right-[-14px] top-1/2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-[#d8e8f4] text-[#1b6ea1] lg:grid">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.section>

        {/* Quality Cards */}
        <motion.section
          {...fadeInUp}
          className="mx-auto w-full max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-8"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                badge: "HPLC",
                title: "Purity & Identity",
                text: "Confirms compound identity and purity for each batch. Certificates available per SKU / lot.",
              },
              {
                badge: "QC",
                title: "Sterility & Endotoxin",
                text: "Quality assurance checks supporting consistent lab research handling and storage standards.",
              },
              {
                badge: "Batch",
                title: "Batch Traceability",
                text: "Each product is tied to a batch number for quick verification and repeatable re-orders.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[16px] border border-[#d6e3ef] bg-white p-4 sm:p-5"
              >
                <div className="mb-3 flex justify-end">
                  <span className="rounded-md bg-[#edf6fd] px-3 py-[5px] text-[10px] font-medium text-[#12608E]">
                    {card.badge}
                  </span>
                </div>
                <p className="text-[19px] font-semibold text-[#d1a13f] sm:text-[20px]">
                  {card.title}
                </p>
                <p className="mt-2.5 text-[12px] leading-6 text-[#7b8894] sm:text-[13px]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Best Selling Products */}
        <motion.section
          {...fadeInUp}
          className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            {sectionHeading("Our Best", "Selling Products")}
            <button className="h-9 rounded-full bg-[#1b6ea1] px-5 text-[12px] font-semibold text-white sm:h-10 sm:px-7 sm:text-[13px]">
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
            {pageData.products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </motion.section>

        {/* QR Section */}
        <motion.section {...fadeInUp} className="py-10 sm:py-14">
          <div className="mx-auto grid w-full max-w-[1280px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h3 className="max-w-[480px] text-[22px] leading-[1.2] font-semibold tracking-[-0.02em] sm:text-[28px] md:text-[38px]">
                Scan <span className="text-[#d1a13f]">The QR Code</span> On Your
                Vial Label
              </h3>
              <p className="mt-4 max-w-[560px] text-[13px] leading-7 text-[#7b8894] sm:text-[15px]">
                {pageData.qrSection.description}
              </p>
              <button className="mt-5 flex h-10 items-center gap-2 rounded-full bg-[#1b6ea1] px-5 text-[12px] font-semibold text-white sm:h-11 sm:px-7 sm:text-[13px]">
                {pageData.qrSection.action}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="rounded-[18px] bg-[#f6f6f6] p-4 sm:p-5">
              <img
                src={pageData.qrSection.image}
                alt="QR code section"
                className="mx-auto w-full max-w-[380px] sm:max-w-[430px]"
              />
            </div>
          </div>
        </motion.section>

        {/* Trust Section */}
        <motion.section {...fadeInUp} className="bg-[#eff4f7] py-12 sm:py-14">
          <div className="mx-auto w-full max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
            <div className="inline-flex rounded-full bg-[#f6eedc] px-4 py-2 text-[12px] font-medium text-[#d1a13f] sm:text-[13px]">
              Premium Quality – 98%+ Purity Guaranteed
            </div>

            <h3 className="mt-6 text-[24px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[30px] md:text-[42px]">
              <span className="text-[#1b6ea1]">Verified. Transparent.</span>{" "}
              <span className="text-[#d1a13f]">Trusted.</span>
            </h3>

            <p className="mx-auto mt-3 max-w-[680px] text-[13px] leading-7 text-[#0f2533] sm:text-[15px]">
              Modern Aminos publishes full lab verification and batch
              traceability so you can research with confidence.
            </p>

            <div className="mx-auto mt-7 grid max-w-[720px] gap-4 rounded-[16px] bg-[#0d4e79] p-4 text-left sm:mt-9 sm:grid-cols-3 sm:p-5">
              {[
                { icon: FlaskConical, title: "500+", text: "COAs Published" },
                { icon: Package, title: "50k+", text: "Orders Shipped" },
                { icon: Star, title: "4.9/5", text: "Trustpilot Rating" },
              ].map((stat) => (
                <div key={stat.title} className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-md bg-white/10 sm:h-10 sm:w-10">
                    <stat.icon
                      className={`h-4 w-4 ${
                        stat.title === "4.9/5" ? "text-[#d1a13f]" : "text-white"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-[17px] font-bold text-white sm:text-[19px]">
                      {stat.title}
                    </p>
                    <p className="text-[10px] text-white/75 sm:text-[11px]">
                      {stat.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mx-auto mt-6 flex h-10 items-center gap-2 rounded-full bg-[#1b6ea1] px-6 text-[12px] font-semibold text-white sm:h-11 sm:px-8 sm:text-[13px]">
              Browse All Products
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="mt-9 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
              {pageData.testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[16px] border border-[#dbe4ec] bg-white p-4 text-left"
                >
                  <div className="mb-3 flex gap-1 text-[#d1a13f]">
                    {[...Array(5)].map((_, i) => (
                      <SharpStar key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="min-h-[88px] text-[11px] leading-6 italic text-[#687681] sm:min-h-[110px] sm:text-[13px] sm:leading-6">
                    “{item.quote}”
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-[#eef4f8] text-[13px] font-semibold text-[#1b6ea1] sm:h-10 sm:w-10 sm:text-[14px]">
                      {item.initials}
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-[#1b6ea1] sm:text-[13px]">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-[#8a97a3] sm:text-[11px]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-center text-[11px] sm:mt-7 sm:text-[13px]">
              <SharpStar className="h-4 w-4 fill-[#01BC78] text-[#01BC78]" />
              <span className="font-semibold text-[#01BC78]">Trustpilot</span>
              <span className="font-semibold text-[#08202C]">4.9 / 5</span>
              <span className="font-semibold text-[#08202C]">
                - 1000+ Verified Reviews
              </span>
            </div>
          </div>
        </motion.section>

        {/* New Arrivals + Coming Soon */}
        {[
          {
            title: "New",
            highlight: "Arrivals",
            items: pageData.newArrivals,
            bg: "bg-white",
          },
          {
            title: "Coming",
            highlight: "Soon",
            items: pageData.comingSoon,
            bg: "bg-[#f1f7fa]",
          },
        ].map((section) => (
          <motion.section
            key={section.highlight}
            {...fadeInUp}
            className={`${section.bg} py-10 sm:py-12`}
          >
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                {sectionHeading(section.title, section.highlight)}
                <button className="h-9 rounded-full bg-[#1b6ea1] px-5 text-[12px] font-semibold text-white sm:h-10 sm:px-7 sm:text-[13px]">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
                {section.items.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            </div>
          </motion.section>
        ))}

        {/* FAQ */}
        <motion.section
          {...fadeInUp}
          className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            {sectionHeading("Frequently", "Asked Questions")}
            <button className="h-9 rounded-full bg-[#1b6ea1] px-5 text-[11px] font-semibold text-white sm:h-10 sm:px-7 sm:text-[12px]">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {pageData.faqs.map((faq, index) => {
              const open = faqOpen === index;
              return (
                <div key={faq.question}>
                  <button
                    onClick={() => setFaqOpen(open ? -1 : index)}
                    className={`flex min-h-[54px] w-full items-center justify-between rounded-[999px] px-4 text-left text-[13px] font-semibold transition sm:min-h-[60px] sm:px-6 sm:text-[14px] md:px-7 ${
                      open
                        ? "bg-[#1b6ea1] text-white"
                        : "bg-[#deebf5] text-[#23406d]"
                    }`}
                  >
                    {faq.question}
                    {open ? (
                      <span className="text-xl">−</span>
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </button>

                  {open && (
                    <div className="mt-2 rounded-2xl border border-[#d9e0e7] bg-white px-4 py-4 text-[12px] leading-6 text-[#607080] sm:px-6 sm:py-5 sm:text-[13px]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-[#123F5A] text-white">
        <div className="mx-auto w-full max-w-[1280px] px-4 pb-10 pt-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr_1.2fr]">
            <div>
              <a href="#" className="inline-flex items-center">
                <img
                  src="/logo.svg"
                  alt="Modern Aminos"
                  className="w-[190px] brightness-0 invert md:w-[220px]"
                />
              </a>
              <p className="mt-5 max-w-xs text-[13px] leading-6 text-white/95">
                Quality products and exceptional service are very important to
                us
              </p>
            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <p className="text-[18px] font-semibold">Contact Us</p>
                <p className="mt-3 flex items-center gap-2 text-[13px] text-white/95">
                  <Mail className="h-4 w-4" /> cs@modernaminos.com
                </p>
              </div>

              <div>
                <p className="text-[18px] font-semibold">Quick Links</p>
                {pageData.nav.map((item) => (
                  <p
                    key={item.label}
                    className="mt-2 text-[13px] text-white/95"
                  >
                    {item.label}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[18px] font-semibold">
                Subscribe now to save 15%
              </p>
              <p className="mt-3 max-w-[410px] text-[13px] leading-6 text-white/95">
                Subscribe and get exclusive updates straight to your inbox for
                free
              </p>
              <div className="mt-5 flex h-11 max-w-[470px] overflow-hidden rounded-full border border-[#8bb0c9]">
                <input
                  className="w-full bg-transparent px-4 text-[13px] placeholder:text-[#aac4d6] focus:outline-none"
                  placeholder="Email"
                />
                <button className="flex items-center gap-2 bg-white px-5 text-[13px] font-semibold text-[#1a4360]">
                  <ArrowRight className="h-4 w-4" /> Send
                </button>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-[1180px] text-center text-[12px] leading-7 text-white/90">
            Please be advised: All compounds and research materials provided by
            Modern Aminos are strictly for laboratory and research use only.
            They are not approved for human consumption by the Food and Drug
            Administration (FDA). These products should not be used for any form
            of in vivo experimentation or for any other non-laboratory purpose.
            By purchasing these products, you acknowledge that they will be used
            exclusively within a controlled and qualified research environment.
          </p>

          <div className="mt-8 flex flex-col items-center justify-between gap-5 text-[12px] text-white/90 lg:flex-row">
            <p>Copyright 2026, All Rights Reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <a href="#">Privacy Policy</a>
              <a href="#">Refund Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating cart */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-5 right-4 z-50 grid h-13 w-13 place-items-center rounded-full bg-[#0d669c] text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      >
        <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="absolute -top-1 right-0 grid h-5 w-5 place-items-center rounded-full bg-black text-[10px]">
          0
        </span>
      </motion.button>
    </div>
  );
}
