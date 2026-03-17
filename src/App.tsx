import { motion } from "framer-motion";
import {
  ArrowRight,
  Beaker,
  Brain,
  ChevronLeft,
  ChevronRight,

  Cuboid,
  FlaskConical,
  Mail,
  Menu,
  Package,
  Pill,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Star,
  TestTube,
  Truck,
  Wine,
  X,
} from "lucide-react";
import { useState } from "react";

const pageData = {
  nav: ["Home", "Contact Us"],
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
    { title: "Cognitive Compounds", count: "27 Products", icon: Brain, active: true },
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
      open: true,
    },
    {
      question: "Do you ship internationally or only in the US?",
      answer:
        "We support the USA and EU through separate storefronts depending on fulfillment requirements.",
      open: false,
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We support multiple checkout options. Final availability may vary by region and order type.",
      open: false,
    },
    {
      question: 'Why are your products labeled "Not for Human Consumption"?',
      answer:
        "Products are intended strictly for laboratory and research use in qualified environments.",
      open: false,
    },
  ],
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
};

const sectionHeading = (before: string, highlight: string) => (
  <h3 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0e2433] md:text-[42px]">
    {before} <span className="text-[#1b6ea1]">{highlight}</span>
  </h3>
);

function CardButton({ label }: { label: string }) {
  return (
    <button className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-full border border-[#2f7eaa] text-[14px] font-medium text-[#2f7eaa] transition hover:bg-[#2f7eaa] hover:text-white">
      <ShoppingCart className="h-4 w-4" /> {label}
    </button>
  );
}

interface ProductCardProps {
  product: {
    name: string;
    price: string;
    action: string;
    image: string;
    outOfStock?: boolean;
  };
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4, boxShadow: "0 14px 28px rgba(18,45,63,0.08)" }}
      className="relative rounded-[12px] border border-[#eef2f5] bg-white p-3 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
    >
      {product.outOfStock && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-red-600 px-3 py-1 text-[10px] font-medium text-white">
          Out of Stock
        </span>
      )}

      <div className="overflow-hidden rounded-[10px] bg-[#f1f2f4]">
        <img
          src={product.image}
          alt={product.name}
          className="h-[220px] w-full object-cover"
        />
      </div>

      <p className="mt-4 min-h-[54px] text-center text-[16px] leading-[1.35] font-semibold text-[#1a6d9c]">
        {product.name}
      </p>

      <p className="mt-2 text-center text-[15px] font-semibold text-[#0f2533]">
        {product.price}
      </p>

      <CardButton label={product.action} />
    </motion.article>
  );
}

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [faqOpen, setFaqOpen] = useState(
    pageData.faqs.findIndex((item) => item.open) !== -1
      ? pageData.faqs.findIndex((item) => item.open)
      : 0
  );

  return (
    <div className="bg-white text-[#0f2533]">
      <header className="border-b border-[#e7edf3] bg-white">
        <div className="mx-auto flex h-[78px] w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center">
            <img
              width="264"
              height="57"
              src="/logo.svg"
              className="h-auto w-[180px] sm:w-[210px] md:w-[240px]"
              alt="Modern Aminos"
            />
          </a>

          <nav className="hidden items-center gap-8 text-[15px] font-medium text-[#122d3f] md:flex">
            {pageData.nav.map((item) => (
              <a key={item} href="#" className="transition-colors hover:text-[#1b6ea1]">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="grid h-9 w-9 place-items-center text-[#2e7ca8]">
             <a className="elementor-icon" href="/my-account">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 11.6C9.20002 11.6 6.90002 9.30002 6.90002 6.50002C6.90002 3.70002 9.20002 1.40002 12 1.40002C14.8 1.40002 17.1 3.70002 17.1 6.50002C17.1 9.30002 14.8 11.6 12 11.6ZM12 2.60002C9.80002 2.60002 8.10002 4.30002 8.10002 6.50002C8.10002 8.70002 9.80002 10.4 12 10.4C14.2 10.4 15.9 8.70002 15.9 6.50002C15.9 4.30002 14.2 2.60002 12 2.60002Z" fill="#116190"></path><path d="M19 22.6H5.00002C3.60002 22.6 2.40002 21.4 2.40002 20C2.40002 16.4 5.40002 13.4 9.00002 13.4H15C18.6 13.4 21.6 16.4 21.6 20C21.6 21.4 20.4 22.6 19 22.6ZM9.00002 14.6C6.00002 14.6 3.60002 17 3.60002 20C3.60002 20.8 4.20002 21.4 5.00002 21.4H19C19.8 21.4 20.4 20.8 20.4 20C20.4 17 18 14.6 15 14.6H9.00002Z" fill="#116190"></path></svg>			</a>
            </button>

            <button
              onClick={() => setMobileMenu(true)}
              className="grid h-9 w-9 place-items-center text-[#2e7ca8] md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {mobileMenu && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden">
          <div className="absolute left-0 top-0 h-full w-[80%] bg-white p-6 shadow-2xl">
            <div className="mb-10 flex items-center justify-between">
              <p className="text-base font-semibold text-[#0f2533]">Menu</p>
              <button onClick={() => setMobileMenu(false)}>
                <X className="h-6 w-6 text-[#0f2533]" />
              </button>
            </div>
            <div className="space-y-5">
              {pageData.nav.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-[15px] font-medium text-[#122d3f]"
                  onClick={() => setMobileMenu(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <main>
        <section className="bg-[#083553] py-12 text-white md:py-16">
          <motion.div
            {...fadeInUp}
            className="mx-auto grid w-full max-w-[1280px] gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"
          >
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[13px] font-medium text-white">
                <Star className="h-4 w-4 fill-[#d5a73f] text-[#d5a73f]" />
                {pageData.hero.badge}
              </p>

              <h1 className="max-w-[520px] text-[36px] leading-[1.1] font-semibold tracking-[-0.03em] md:text-[56px]">
                {pageData.hero.title}
              </h1>

              <h2 className="mt-3 max-w-[620px] text-[30px] leading-[1.12] font-semibold tracking-[-0.03em] text-[#d8a741] md:text-[44px]">
                {pageData.hero.subtitle}
              </h2>

              <p className="mt-6 max-w-[620px] text-[16px] leading-7 text-[#e5eef5] md:text-[18px]">
                {pageData.hero.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button className="flex h-12 items-center justify-center gap-2 rounded-[10px] bg-[#1f79b0] px-7 text-[15px] font-semibold transition hover:bg-[#186c9e]">
                  {pageData.hero.actions[0]}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="flex h-12 items-center justify-center rounded-[10px] border border-[#2e84b7] px-7 text-[15px] font-semibold transition hover:bg-white/5">
                  {pageData.hero.actions[1]}
                </button>
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 md:p-6">
                <p className="mb-4 flex gap-1 text-[#d3a43f]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </p>
                <p className="text-[16px] leading-7 italic md:text-[18px]">
                  “{pageData.hero.quote}”
                </p>
                <p className="mt-4 text-[16px] font-semibold">— {pageData.hero.quoteAuthor}</p>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {pageData.hero.stats.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -2 }}
                    className="rounded-xl border border-white/15 bg-white/10 p-4"
                  >
                    <item.icon className="mb-2 h-5 w-5 text-[#d6a740]" />
                    <p className="text-[20px] font-semibold text-[#d6a740]">{item.label}</p>
                    <p className="mt-1 text-[12px] leading-5 text-[#c0d1de]">{item.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="border-y border-[#e4ebf1] bg-[#f6f9fb] py-6">
          <div className="mx-auto grid w-full max-w-[1280px] gap-5 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-8">
            {pageData.trustStrip.map((item) => (
              <div key={item.title} className="flex items-center gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#dfebf5] text-[#2d7ca8]">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[18px] font-semibold leading-[1.15] text-[#0f2533]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[12px] leading-5 text-[#748392]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <motion.section
          {...fadeInUp}
          className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {sectionHeading("Shop by", "Category")}
            <button className="h-11 rounded-full bg-[#1b6ea1] px-7 text-[14px] font-semibold text-white md:px-9">
              See All Products
            </button>
          </div>

          <div className="relative">
            <button className="absolute left-[-18px] top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#d8e8f4] text-[#1b6ea1] lg:grid">
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {pageData.categories.map((category) => (
                <div
                  key={category.title}
                  className={`rounded-[14px] border px-4 py-5 text-center transition ${
                    category.active
                      ? "border-[#2876a7] bg-[#edf4fa]"
                      : "border-[#d7e0e9] bg-white hover:border-[#2876a7]/40"
                  }`}
                >
                  <div className="mx-auto mb-4 grid h-[86px] w-[86px] place-items-center rounded-[14px] bg-[#f4f6f8] text-[#2f7ea9]">
                    <category.icon className="h-8 w-8" />
                  </div>
                  <p className="text-[14px] font-medium text-[#1f6f9f]">{category.title}</p>
                  <p className="mt-1 text-[11px] text-[#8a98a6]">{category.count}</p>
                </div>
              ))}
            </div>

            <button className="absolute right-[-18px] top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#d8e8f4] text-[#1b6ea1] lg:grid">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.section>

        <motion.section
          {...fadeInUp}
          className="mx-auto w-full max-w-[1280px] px-4 pb-8 sm:px-6 lg:px-8"
        >
          <div className="grid gap-5 lg:grid-cols-3">
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
              <div key={card.title} className="rounded-[18px] border border-[#d6e3ef] bg-white p-6">
                <div className="mb-5 flex justify-end">
                  <span className="rounded-md bg-[#edf6fd] px-3 py-[6px] text-[12px] font-medium text-[#12608E]">
                    {card.badge}
                  </span>
                </div>
                <p className="text-[24px] font-semibold leading-[1.2] text-[#d1a13f]">{card.title}</p>
                <p className="mt-4 text-[14px] leading-7 text-[#7b8894]">{card.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...fadeInUp}
          className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8"
        >
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {sectionHeading("Our Best", "Selling Products")}
            <button className="h-11 rounded-full bg-[#1b6ea1] px-8 text-[14px] font-semibold text-white">
              View All
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {pageData.products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeInUp} className="py-16">
          <div className="mx-auto grid w-full max-w-[1280px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h3 className="max-w-[520px] text-[32px] leading-[1.15] font-semibold tracking-[-0.02em] md:text-[44px]">
                Scan <span className="text-[#d1a13f]">The QR Code</span> On Your Vial Label
              </h3>
              <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-[#7b8894] md:text-[16px]">
                {pageData.qrSection.description}
              </p>
              <button className="mt-7 flex h-11 items-center gap-2 rounded-full bg-[#1b6ea1] px-7 text-[14px] font-semibold text-white">
                {pageData.qrSection.action}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="rounded-[22px] bg-[#f6f6f6] p-5 md:p-6">
              <img
                src={pageData.qrSection.image}
                alt="QR code section"
                className="mx-auto w-full max-w-[470px]"
              />
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeInUp} className="bg-[#eff4f7] py-16">
          <div className="mx-auto w-full max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
            <div className="inline-flex rounded-full bg-[#f6eedc] px-5 py-2 text-sm font-medium text-[#d1a13f]">
              Premium Quality – 98%+ Purity Guaranteed
            </div>

            <h3 className="mt-8 text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] md:text-[50px]">
              <span className="text-[#1b6ea1]">Verified. Transparent.</span>{" "}
              <span className="text-[#d1a13f]">Trusted.</span>
            </h3>

            <p className="mx-auto mt-5 max-w-[720px] text-[16px] leading-7 text-[#0f2533]">
              Modern Aminos publishes full lab verification and batch traceability so you can research with confidence.
            </p>

            <div className="mx-auto mt-10 grid max-w-[760px] gap-4 rounded-[16px] bg-[#0d4e79] p-5 text-left sm:grid-cols-3">
              {[
                { icon: FlaskConical, title: "500+", text: "COAs Published" },
                { icon: Package, title: "50k+", text: "Orders Shipped" },
                { icon: Star, title: "4.9/5", text: "Trustpilot Rating" },
              ].map((stat) => (
                <div key={stat.title} className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-md bg-white/10">
                    <stat.icon className={`h-5 w-5 ${stat.title === "4.9/5" ? "text-[#d1a13f]" : "text-white"}`} />
                  </div>
                  <div>
                    <p className="text-[20px] font-bold text-white">{stat.title}</p>
                    <p className="text-[12px] text-white/75">{stat.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mx-auto mt-8 flex h-11 items-center gap-2 rounded-full bg-[#1b6ea1] px-7 text-[14px] font-semibold text-white">
              Browse All Products
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {pageData.testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[16px] border border-[#dbe4ec] bg-white p-5 text-left"
                >
                  <div className="mb-4 flex gap-1 text-[#d1a13f]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="min-h-[132px] text-[14px] leading-7 italic text-[#687681]">
                    “{item.quote}”
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-[#eef4f8] text-[16px] font-semibold text-[#1b6ea1]">
                      {item.initials}
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-[#1b6ea1]">{item.name}</p>
                      <p className="text-[12px] text-[#8a97a3]">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-[14px]">
              <Star className="h-5 w-5 fill-[#01BC78] text-[#01BC78]" />
              <span className="font-semibold text-[#01BC78]">Trustpilot</span>
              <span className="font-semibold text-[#08202C]">4.9 / 5</span>
              <span className="font-semibold text-[#08202C]">- 1000+ Verified Reviews</span>
            </div>
          </div>
        </motion.section>

        {[
          { title: "New", highlight: "Arrivals", items: pageData.newArrivals, bg: "bg-white" },
          { title: "Coming", highlight: "Soon", items: pageData.comingSoon, bg: "bg-[#f1f7fa]" },
        ].map((section) => (
          <motion.section
            key={section.highlight}
            {...fadeInUp}
            className={`${section.bg} py-12`}
          >
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {sectionHeading(section.title, section.highlight)}
                <button className="h-11 rounded-full bg-[#1b6ea1] px-8 text-[14px] font-semibold text-white">
                  View All
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {section.items.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            </div>
          </motion.section>
        ))}

        <motion.section
          {...fadeInUp}
          className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {sectionHeading("Frequently", "Asked Questions")}
            <button className="h-10 rounded-full bg-[#1b6ea1] px-7 text-[13px] font-semibold text-white">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {pageData.faqs.map((faq, index) => {
              const open = faqOpen === index;
              return (
                <div key={faq.question}>
                  <button
                    onClick={() => setFaqOpen(open ? -1 : index)}
                    className={`flex min-h-[64px] w-full items-center justify-between rounded-[999px] px-6 text-left text-[15px] font-semibold transition md:px-8 ${
                      open ? "bg-[#1b6ea1] text-white" : "bg-[#deebf5] text-[#23406d]"
                    }`}
                  >
                    {faq.question}
                    {open ? <span className="text-2xl">−</span> : <Plus className="h-4 w-4" />}
                  </button>

                  {open && (
                    <div className="mt-2 rounded-2xl border border-[#d9e0e7] bg-white px-6 py-5 text-[13px] leading-7 text-[#607080] md:px-7">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.section>
      </main>

<footer className="bg-[#123F5A] text-white">
  <div className="mx-auto w-full max-w-[1280px] px-4 pt-16 pb-14 sm:px-6 lg:px-8">
    <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr_1.2fr]">
      <div>
<a href="#" className="inline-flex items-center">
  <img
    src="/logo.svg"
    alt="Modern Aminos"
    className="w-[230px] brightness-0 invert md:w-[250px]"
  />
</a>
        <p className="mt-7 max-w-[320px] text-[15px] leading-8 text-[#d4e2ed]">
          Quality products and exceptional service are very important to us
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
        <div>
          <p className="text-[22px] font-semibold">Contact Us</p>
          <p className="mt-4 flex items-center gap-2 text-[15px] text-[#d7e6f1]">
            <Mail className="h-4 w-4" /> cs@modernaminos.com
          </p>
        </div>

        <div>
          <p className="text-[22px] font-semibold">Quick Links</p>
          {pageData.nav.map((item) => (
            <p key={item} className="mt-3 text-[15px] text-[#d7e6f1]">
              {item}
            </p>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[22px] font-semibold">Subscribe now to save 15%</p>
        <p className="mt-4 max-w-[410px] text-[15px] leading-8 text-[#d8e7f1]">
          Subscribe and get exclusive updates straight to your inbox for free
        </p>
        <div className="mt-6 flex h-14 max-w-[470px] overflow-hidden rounded-full border border-[#8bb0c9]">
          <input
            className="w-full bg-transparent px-6 text-[15px] placeholder:text-[#aac4d6] focus:outline-none"
            placeholder="Email"
          />
          <button className="flex items-center gap-2 bg-white px-6 text-[15px] font-semibold text-[#1a4360]">
            <ArrowRight className="h-4 w-4" /> Send
          </button>
        </div>
      </div>
    </div>

    <p className="mx-auto mt-14 max-w-[1180px] text-center text-[14px] leading-9 text-[#d7e6f1]">
      Please be advised: All compounds and research materials provided by Modern Aminos are strictly for laboratory and research use only. They are not approved for human consumption by the Food and Drug Administration (FDA). These products should not be used for any form of in vivo experimentation or for any other non-laboratory purpose. By purchasing these products, you acknowledge that they will be used exclusively within a controlled and qualified research environment.
    </p>

    <div className="mt-14 flex flex-col items-center justify-between gap-6 text-[13px] text-[#d7e6f1] md:text-[14px] lg:flex-row">
      <p>Copyright 2026, All Rights Reserved.</p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <a href="#">Privacy Policy</a>
        <a href="#">Refund Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-6 right-6 grid h-14 w-14 place-items-center rounded-full bg-[#0d669c] text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
      >
        <ShoppingCart className="h-6 w-6" />
        <span className="absolute -top-1 right-0 grid h-5 w-5 place-items-center rounded-full bg-black text-[10px]">
          0
        </span>
      </motion.button>
    </div>
  );
}