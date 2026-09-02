export type InsightCategory =
  | "Sourcing"
  | "Procurement"
  | "China Market"
  | "Quality"
  | "Business"
  | "Import Education";

export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "cta"; text: string; href: string; label: string };

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  date: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  related: string[];
  relatedServices: string[];
  instagramHook: string;
  seoTitle: string;
  seoDescription: string;
  blocks: InsightBlock[];
};

export const insights: Insight[] = [
  {
    slug: "factory-vs-trading-company",
    title: "Factory vs Trading Company: Which Is Right for Your Business?",
    excerpt:
      "Same products, different suppliers. The choice is less about labels and more about what your order actually needs.",
    category: "Sourcing",
    date: "2026-08-18",
    readingTime: "7 min",
    image: "/images/factory-floor.jpg",
    imageAlt: "Manufacturing floor in China with production equipment",
    related: [
      "how-to-identify-a-reliable-chinese-supplier",
      "what-moq-really-means",
    ],
    relatedServices: ["supplier-sourcing", "product-factory-verification"],
    instagramHook: "Factory or Trading Company?",
    seoTitle: "Factory vs Trading Company in China | Vesta Sourcing Nigeria",
    seoDescription:
      "A clear guide for Nigerian businesses choosing between a Chinese factory and a trading company — and why the right supplier depends on your order.",
    blocks: [
      {
        type: "p",
        text: "If you have spent any time looking for Chinese suppliers, you have already met both: factories that manufacture, and trading companies that source, coordinate and sell.",
      },
      {
        type: "p",
        text: "People treat this as a simple rule. Factory is cheaper. Trading company is a middleman. Avoid the middleman.",
      },
      {
        type: "quote",
        text: "The label is not the decision. Fit is the decision.",
      },
      {
        type: "h2",
        text: "What a factory actually is",
      },
      {
        type: "p",
        text: "A factory produces. That can be an advantage if you need consistent production, customisation, or a closer view of how the product is made. It can also mean higher MOQs, slower communication, and less flexibility if your order is mixed or still taking shape.",
      },
      {
        type: "h2",
        text: "What a trading company actually is",
      },
      {
        type: "p",
        text: "A trading company does not usually manufacture the goods themselves. They work across factories, handle communication, and can be useful when you need a range of products, smaller quantities, or someone who can coordinate more than one production line.",
      },
      {
        type: "p",
        text: "That does not automatically make them worse. It also does not automatically make them safer. Some trading companies are careful partners. Some are simply repeating a quotation they received an hour ago.",
      },
      {
        type: "h2",
        text: "Which is right for you?",
      },
      {
        type: "ul",
        items: [
          "You need customisation or tighter production control — a suitable factory is often the better path.",
          "You need mixed products, smaller quantities, or faster sampling — a capable trading company can be the more practical option.",
          "You are still defining the product — you may not be ready to lock into either until the specification is clearer.",
        ],
      },
      {
        type: "p",
        text: "For Nigerian businesses, the more useful question is not “factory or trader?” It is: can this supplier produce or source what I need, at the quality I need, in the quantity I can actually buy?",
      },
      {
        type: "cta",
        text: "If you are choosing between supplier types and do not want to guess, start with a sourcing brief.",
        href: "/contact",
        label: "Start Your Procurement",
      },
      {
        type: "p",
        text: "Vesta helps identify suppliers based on your requirements — then assess the options before you commit. That includes understanding whether a factory or a trading company is the better fit for the order in front of you.",
      },
    ],
  },
  {
    slug: "7-questions-to-ask-a-chinese-supplier",
    title: "7 Questions to Ask a Chinese Supplier Before Ordering",
    excerpt:
      "Ask the right questions before money moves. These seven will tell you more than a polished quotation.",
    category: "Quality",
    date: "2026-08-12",
    readingTime: "8 min",
    image: "/images/documents.jpg",
    imageAlt: "Procurement documents and product specifications being reviewed",
    related: [
      "how-to-identify-a-reliable-chinese-supplier",
      "what-moq-really-means",
    ],
    relatedServices: ["supplier-verification", "quality-quantity-inspection"],
    instagramHook: "7 Supplier Questions",
    seoTitle: "7 Questions to Ask a Chinese Supplier Before Ordering | Vesta",
    seoDescription:
      "Seven practical questions Nigerian businesses should ask a Chinese supplier before placing an order — covering MOQ, materials, samples, lead time and quality.",
    blocks: [
      {
        type: "p",
        text: "A quotation is not a relationship. It is a starting point. The questions you ask next decide whether that quotation is usable.",
      },
      {
        type: "h2",
        text: "1. What is your MOQ?",
      },
      {
        type: "p",
        text: "Minimum order quantity is not a formality. It tells you whether this supplier is built for your volume — and whether the unit price you were shown even applies to the quantity you can buy.",
      },
      {
        type: "h2",
        text: "2. What materials do you use?",
      },
      {
        type: "p",
        text: "If the product can be made with more than one material, you need the one you are actually paying for named. Vague answers here become quality disputes later.",
      },
      {
        type: "h2",
        text: "3. Can you provide samples?",
      },
      {
        type: "p",
        text: "Samples are not always free, and they are not always identical to bulk production. Still, a supplier who cannot discuss sampling clearly is asking you to buy unseen.",
      },
      {
        type: "h2",
        text: "4. What is your production lead time?",
      },
      {
        type: "p",
        text: "Lead time should include production, not just the day they send a message. Ask what the clock starts from — deposit, confirmed specification, or sample approval.",
      },
      {
        type: "h2",
        text: "5. What customisation is available?",
      },
      {
        type: "p",
        text: "Logo, colour, packaging, sizing, labelling. Get the limits in writing. Customisation is often where MOQ, cost and timeline all move at once.",
      },
      {
        type: "h2",
        text: "6. What are your payment terms?",
      },
      {
        type: "p",
        text: "Understand what is due, when, and against what. Unusual payment pressure before specification is confirmed is a signal, not a detail.",
      },
      {
        type: "h2",
        text: "7. What is your quality control process?",
      },
      {
        type: "p",
        text: "You are listening for a process, not a promise. Who checks, at which stage, and what happens if the goods do not match the agreed specification.",
      },
      {
        type: "quote",
        text: "Ask the right questions. Source with confidence.",
      },
      {
        type: "cta",
        text: "Need help assessing a supplier before you order? That is supplier verification work.",
        href: "/services/supplier-verification",
        label: "Learn about verification",
      },
    ],
  },
  {
    slug: "factory-price-vs-landed-cost",
    title: "Factory Price vs Landed Cost: What Nigerian Importers Need to Know",
    excerpt:
      "Factory price is one line. Landed cost is the number your business actually lives with.",
    category: "Import Education",
    date: "2026-08-04",
    readingTime: "8 min",
    image: "/images/packaging.jpg",
    imageAlt: "Packed cartons prepared for procurement and logistics handoff",
    related: [
      "common-mistakes-nigerian-businesses-make-sourcing-from-china",
      "what-moq-really-means",
    ],
    relatedServices: ["procurement-purchasing", "consolidation"],
    instagramHook: "Factory Price Myth",
    seoTitle: "Factory Price vs Landed Cost for Nigerian Importers | Vesta",
    seoDescription:
      "Why factory price is not the full cost of sourcing from China, and how Nigerian businesses should think about landed cost before ordering.",
    blocks: [
      {
        type: "p",
        text: "“Factory price” sounds like the lowest possible number, taken straight from the source. It is not. It is the product cost at a particular quantity, specification and Incoterm — before the rest of the journey exists.",
      },
      {
        type: "quote",
        text: "Factory price is the beginning, not the final cost.",
      },
      {
        type: "h2",
        text: "What factory price usually includes — and what it does not",
      },
      {
        type: "p",
        text: "A unit price from a supplier typically covers the product as quoted. It may or may not include packaging, labelling, domestic handling in China, or anything after the factory gate. If you do not ask, you do not know.",
      },
      {
        type: "h2",
        text: "Costs that sit around the product",
      },
      {
        type: "ul",
        items: [
          "Product cost",
          "Packaging and labelling",
          "Domestic transportation in China",
          "Inspection and quality checks where required",
          "Consolidation and handling where applicable",
        ],
      },
      {
        type: "h2",
        text: "Costs that sit in the journey",
      },
      {
        type: "ul",
        items: [
          "International shipping arranged with a logistics provider",
          "Insurance",
          "Customs clearance and duties",
          "Local charges on arrival",
        ],
      },
      {
        type: "p",
        text: "Vesta coordinates sourcing, procurement, inspection where required, and consolidation where applicable. Transportation is handled by independent logistics partners. That distinction matters when you are adding up the real number.",
      },
      {
        type: "h2",
        text: "The number that should guide the decision",
      },
      {
        type: "p",
        text: "Smart importers look at total landed cost — or at least a realistic estimate of it — before they fall in love with a unit price. The cheapest supplier can become your most expensive supplier once quality, delays, rework or incomplete quotations enter the picture.",
      },
      {
        type: "cta",
        text: "If you want help building a procurement picture that goes beyond the first quotation, start here.",
        href: "/contact",
        label: "Start Your Procurement",
      },
    ],
  },
  {
    slug: "how-to-identify-a-reliable-chinese-supplier",
    title: "How to Identify a Reliable Chinese Supplier",
    excerpt:
      "Reliability is not a vibe. It is a pattern you can look for before you send money.",
    category: "Sourcing",
    date: "2026-07-28",
    readingTime: "7 min",
    image: "/images/workshop.jpg",
    imageAlt: "Production workshop environment used in supplier assessment",
    related: [
      "7-questions-to-ask-a-chinese-supplier",
      "factory-vs-trading-company",
    ],
    relatedServices: ["supplier-sourcing", "supplier-verification"],
    instagramHook: "Supplier Red Flags",
    seoTitle: "How to Identify a Reliable Chinese Supplier | Vesta Sourcing",
    seoDescription:
      "Practical ways Nigerian businesses can assess Chinese supplier reliability — without relying on polished listings or lowest-price quotations.",
    blocks: [
      {
        type: "p",
        text: "Anyone can look like a supplier online. The work is deciding whether they can actually support your product, your quantity and your quality expectations.",
      },
      {
        type: "h2",
        text: "Start with fit, not charm",
      },
      {
        type: "p",
        text: "A reliable supplier for someone else’s order can still be the wrong supplier for yours. Begin with product match, capacity and commercial terms. Personality is not evidence.",
      },
      {
        type: "h2",
        text: "Look for consistency",
      },
      {
        type: "ul",
        items: [
          "The specification in the quotation matches what was discussed.",
          "Lead times and MOQs do not swing wildly without explanation.",
          "Photos, documents and answers refer to the same product.",
          "They can explain how quality is checked, not just that it is “guaranteed”.",
        ],
      },
      {
        type: "h2",
        text: "Treat pressure as information",
      },
      {
        type: "p",
        text: "Urgent deposits, reluctance to discuss samples, or refusal to clarify materials are not negotiating tactics you have to accept. They are data.",
      },
      {
        type: "h2",
        text: "Verify what can be verified",
      },
      {
        type: "p",
        text: "Supplier information should be assessed before you commit. That may include business details, product claims, and — where the order requires it — factory or product verification. No serious procurement process treats a chat history as due diligence.",
      },
      {
        type: "quote",
        text: "Finding a supplier is easy. Finding the right supplier is the real work.",
      },
      {
        type: "cta",
        text: "Vesta helps identify and assess supplier options based on your specific requirements.",
        href: "/services/supplier-verification",
        label: "See supplier verification",
      },
    ],
  },
  {
    slug: "what-moq-really-means",
    title: "What MOQ Really Means",
    excerpt:
      "MOQ is not a random number. It is a signal about how the supplier works — and whether your order belongs there.",
    category: "Procurement",
    date: "2026-07-21",
    readingTime: "6 min",
    image: "/images/warehouse.jpg",
    imageAlt: "Warehouse inventory illustrating order quantity and bulk procurement",
    related: [
      "factory-price-vs-landed-cost",
      "factory-vs-trading-company",
    ],
    relatedServices: ["price-terms-negotiation", "procurement-advisory"],
    instagramHook: "What MOQ Really Means",
    seoTitle: "What MOQ Really Means When Sourcing From China | Vesta",
    seoDescription:
      "A plain-English explanation of minimum order quantity for Nigerian businesses sourcing from China — and how MOQ should shape supplier choice.",
    blocks: [
      {
        type: "p",
        text: "MOQ means minimum order quantity. It is the smallest order a supplier is willing to accept for a product, a colour, a size, or a customisation.",
      },
      {
        type: "p",
        text: "That number is not personal. It is usually tied to production setup, material purchasing, labour and whether your order is worth interrupting a larger run.",
      },
      {
        type: "h2",
        text: "Why the first MOQ you see may not be the real one",
      },
      {
        type: "p",
        text: "A listing MOQ is a starting claim. The usable MOQ appears after you specify colour, branding, packaging and quality. Customisation almost always moves it.",
      },
      {
        type: "h2",
        text: "MOQ and price are connected",
      },
      {
        type: "p",
        text: "A low unit price with an impossible MOQ is not a deal. A slightly higher unit price at a quantity you can actually sell through may be the better commercial decision.",
      },
      {
        type: "h2",
        text: "What to do when MOQ is too high",
      },
      {
        type: "ul",
        items: [
          "See whether a standard, non-custom version has a lower threshold.",
          "Consider whether a different supplier type fits smaller quantity better.",
          "Do not force a factory built for volume into a sample-sized order and expect bulk pricing.",
        ],
      },
      {
        type: "p",
        text: "If you are starting a business, MOQ is often the first serious constraint. If you are growing one, it is a tool for choosing between suppliers — not just a hurdle.",
      },
      {
        type: "cta",
        text: "Share the product and quantity you have in mind. We will help you see what is realistic.",
        href: "/contact",
        label: "Start Your Procurement",
      },
    ],
  },
  {
    slug: "common-mistakes-nigerian-businesses-make-sourcing-from-china",
    title: "Common Mistakes Nigerian Businesses Make When Sourcing From China",
    excerpt:
      "Most expensive mistakes happen before production starts: unclear specs, lowest-price thinking, and no plan for verification.",
    category: "Business",
    date: "2026-07-14",
    readingTime: "8 min",
    image: "/images/china-street.jpg",
    imageAlt: "Busy commercial street in China representing sourcing complexity",
    related: [
      "factory-price-vs-landed-cost",
      "7-questions-to-ask-a-chinese-supplier",
    ],
    relatedServices: ["procurement-advisory", "quality-quantity-inspection"],
    instagramHook: "Would You Import This?",
    seoTitle:
      "Common China Sourcing Mistakes Nigerian Businesses Make | Vesta",
    seoDescription:
      "The most common sourcing mistakes Nigerian businesses make when buying from China — and how to avoid paying twice for the same lesson.",
    blocks: [
      {
        type: "p",
        text: "Sourcing from China can be an enormous advantage. The mistakes that hurt Nigerian businesses are rarely mysterious. They are ordinary, avoidable, and expensive.",
      },
      {
        type: "h2",
        text: "Ordering from a picture",
      },
      {
        type: "p",
        text: "A product photo is not a specification. Colour, material, weight, function, packaging and branding all need to be stated. If it is not written, it is not agreed.",
      },
      {
        type: "h2",
        text: "Choosing the cheapest quotation",
      },
      {
        type: "p",
        text: "The cheapest supplier can become your most expensive supplier. Low prices sometimes mean a different product, a different material, or a supplier who cannot support the order once production starts.",
      },
      {
        type: "h2",
        text: "Skipping supplier assessment",
      },
      {
        type: "p",
        text: "Paying before you understand who you are paying is not speed. It is a gamble. Assess supplier information first.",
      },
      {
        type: "h2",
        text: "Ignoring MOQ until the end",
      },
      {
        type: "p",
        text: "If the quantity you can buy and the quantity the supplier will sell never meet, you did not have a supplier. You had a conversation.",
      },
      {
        type: "h2",
        text: "Forgetting that logistics is a separate stage",
      },
      {
        type: "p",
        text: "Sourcing and transportation are related, but they are not the same job. Plan procurement clearly, then work with a logistics partner for shipping. Mixing the two without a handoff creates confusion about who is responsible for what.",
      },
      {
        type: "h2",
        text: "Trying to navigate it alone when you do not have to",
      },
      {
        type: "p",
        text: "China is more than a marketplace. It is a manufacturing ecosystem. Access alone is not enough. Knowing where to look, who to work with and what to verify matters.",
      },
      {
        type: "quote",
        text: "You don't have to navigate the Chinese sourcing market alone.",
      },
      {
        type: "cta",
        text: "If you want a clearer process from brief to supplier, start a procurement conversation.",
        href: "/contact",
        label: "Start Your Procurement",
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((article) => article.slug === slug);
}

export function getRelatedInsights(slug: string) {
  const article = getInsight(slug);
  if (!article) return [];
  return article.related
    .map((relatedSlug) => getInsight(relatedSlug))
    .filter((item): item is Insight => Boolean(item));
}

export const insightCategories: InsightCategory[] = [
  "Sourcing",
  "Procurement",
  "China Market",
  "Quality",
  "Business",
  "Import Education",
];
