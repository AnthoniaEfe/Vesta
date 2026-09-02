export type Service = {
  slug: string;
  name: string;
  short: string;
  whatWeDo: string[];
  whyItMatters: string;
  deliverables: string[];
  cta: string;
  relatedInsights: string[];
};

export const services: Service[] = [
  {
    slug: "supplier-sourcing",
    name: "Supplier Sourcing",
    short:
      "Identify suitable suppliers based on your product requirements, specifications, quantity and target budget.",
    whatWeDo: [
      "Clarify product requirements, specifications, quantity and budget.",
      "Search for supplier options that fit those requirements.",
      "Shortlist suppliers worth a closer look.",
    ],
    whyItMatters:
      "Finding a supplier is easy. Finding one that actually fits your product, quantity and commercial reality is the work that protects your order.",
    deliverables: [
      "Supplier shortlist aligned to your brief",
      "Key product and commercial notes",
      "Next-step recommendation",
    ],
    cta: "Request Supplier Sourcing",
    relatedInsights: [
      "factory-vs-trading-company",
      "how-to-identify-a-reliable-chinese-supplier",
    ],
  },
  {
    slug: "supplier-verification",
    name: "Supplier Verification",
    short: "Help assess supplier information before committing to an order.",
    whatWeDo: [
      "Review supplier-provided information against your procurement needs.",
      "Help you ask better questions before money moves.",
      "Flag inconsistencies that need clarification.",
    ],
    whyItMatters:
      "Unclear supplier credibility is one of the fastest ways to lose money. Assessment before commitment is cheaper than damage control after.",
    deliverables: [
      "Supplier information review",
      "Questions to resolve before ordering",
      "Clear recommendation on whether to proceed, pause or look further",
    ],
    cta: "Request Supplier Verification",
    relatedInsights: [
      "7-questions-to-ask-a-chinese-supplier",
      "how-to-identify-a-reliable-chinese-supplier",
    ],
  },
  {
    slug: "product-factory-verification",
    name: "Product & Factory Verification",
    short:
      "Verify relevant product and factory information according to procurement requirements.",
    whatWeDo: [
      "Check product details against the specifications you care about.",
      "Verify relevant factory information where the order requires it.",
      "Report what can be confirmed, and what still needs evidence.",
    ],
    whyItMatters:
      "A strong quotation means little if the product or production setup cannot support what you actually need.",
    deliverables: [
      "Product/factory findings summary",
      "Gaps or risks that need attention",
      "Suggested next action",
    ],
    cta: "Request Product & Factory Verification",
    relatedInsights: ["what-moq-really-means", "factory-vs-trading-company"],
  },
  {
    slug: "quality-quantity-inspection",
    name: "Quality & Quantity Inspection",
    short: "Where required, inspect products against agreed specifications.",
    whatWeDo: [
      "Inspect products against the specifications agreed with the supplier.",
      "Check quantity and obvious quality issues where inspection is requested.",
      "Share findings before goods are handed to logistics.",
    ],
    whyItMatters:
      "Your order should match the specifications and expectations you agreed on. Inspection is how you check that before the goods leave.",
    deliverables: [
      "Inspection notes and photographs where applicable",
      "Quantity check where requested",
      "Issues to resolve before logistics handoff",
    ],
    cta: "Request Inspection",
    relatedInsights: [
      "7-questions-to-ask-a-chinese-supplier",
      "common-mistakes-nigerian-businesses-make-sourcing-from-china",
    ],
  },
  {
    slug: "price-terms-negotiation",
    name: "Price & Terms Negotiation",
    short: "Communicate with suppliers and work toward commercially suitable terms.",
    whatWeDo: [
      "Communicate your requirements clearly to suppliers.",
      "Compare quotations beyond the headline unit price.",
      "Work toward terms that fit your quantity, timeline and quality needs.",
    ],
    whyItMatters:
      "The cheapest quotation isn't always the best deal. Payment terms, MOQ, lead time and specification all change the real cost.",
    deliverables: [
      "Compared quotation notes",
      "Negotiated points of commercial importance",
      "A clearer basis for your decision",
    ],
    cta: "Request Negotiation Support",
    relatedInsights: ["factory-price-vs-landed-cost", "what-moq-really-means"],
  },
  {
    slug: "procurement-purchasing",
    name: "Procurement & Purchasing",
    short: "Coordinate the purchasing process on your behalf.",
    whatWeDo: [
      "Coordinate purchasing once you have approved a supplier and terms.",
      "Keep communication with the supplier moving.",
      "Help you track what has been agreed, paid and produced.",
    ],
    whyItMatters:
      "Procurement complexity is where good sourcing falls apart. Coordination keeps the order from stalling between approval and production.",
    deliverables: [
      "Purchasing coordination",
      "Supplier communication on your behalf",
      "Order status updates",
    ],
    cta: "Start Procurement",
    relatedInsights: [
      "factory-price-vs-landed-cost",
      "common-mistakes-nigerian-businesses-make-sourcing-from-china",
    ],
  },
  {
    slug: "consolidation",
    name: "Consolidation",
    short:
      "Where applicable, coordinate consolidation before goods are handed to the logistics provider.",
    whatWeDo: [
      "Coordinate consolidation when goods come from more than one source or shipment lot.",
      "Prepare goods for handoff to an independent logistics provider.",
      "Share packing information relevant to the next stage.",
    ],
    whyItMatters:
      "Vesta handles sourcing and procurement. Transportation is a separate partner stage. Consolidation is the bridge between those two.",
    deliverables: [
      "Consolidation coordination where applicable",
      "Packing notes for logistics handoff",
      "Clear transfer to the independent logistics provider",
    ],
    cta: "Ask About Consolidation",
    relatedInsights: ["factory-price-vs-landed-cost"],
  },
  {
    slug: "procurement-advisory",
    name: "Procurement Advisory",
    short: "Help businesses understand and navigate the Chinese sourcing market.",
    whatWeDo: [
      "Explain how sourcing in China actually works for your product type.",
      "Help you think through MOQ, specifications, supplier type and budget.",
      "Give practical guidance before you commit to an order.",
    ],
    whyItMatters:
      "You don't have to navigate the Chinese sourcing market alone — especially if this is your first order, or your first serious one.",
    deliverables: [
      "Practical sourcing guidance",
      "Requirement clarification",
      "A recommended path to start procurement",
    ],
    cta: "Speak With Vesta",
    relatedInsights: [
      "what-moq-really-means",
      "factory-vs-trading-company",
      "common-mistakes-nigerian-businesses-make-sourcing-from-china",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
