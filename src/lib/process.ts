export const homeJourney = [
  {
    step: "01",
    title: "Tell us what you need",
    body: "Send your product requirements, specifications, quantity and any reference images or links.",
  },
  {
    step: "02",
    title: "We research",
    body: "We search for suppliers that fit your requirements.",
  },
  {
    step: "03",
    title: "We compare & negotiate",
    body: "We assess options and communicate with suppliers.",
  },
  {
    step: "04",
    title: "You review & approve",
    body: "You receive the relevant information needed to make your decision.",
  },
  {
    step: "05",
    title: "We procure",
    body: "Once approved, we coordinate the purchasing process.",
  },
  {
    step: "06",
    title: "Inspection & consolidation",
    body: "Where required, products can be inspected and consolidated.",
  },
  {
    step: "07",
    title: "Logistics handoff",
    body: "Goods are handed over to the independent logistics provider for transportation.",
    note: "Vesta does not handle transportation. Logistics is a separate partner stage.",
  },
] as const;

export const detailedProcess = [
  {
    step: "01",
    title: "Initial enquiry",
    whatHappens:
      "You tell us what you want to source. A WhatsApp message, a form, or a short brief is enough to start.",
    vestaDoes: "We review the enquiry and confirm whether we can help.",
    clientDoes: "Share the product, quantity and any links or images you already have.",
    output: "Acknowledgement and a request for any missing details.",
  },
  {
    step: "02",
    title: "Requirement clarification",
    whatHappens:
      "We turn a product idea into a usable sourcing brief: specifications, quantity, quality expectations, budget range and timeline.",
    vestaDoes: "Ask focused questions so we are not sourcing the wrong product.",
    clientDoes: "Confirm what matters most: quality, price, speed, branding or a mix.",
    output: "A clear requirement brief.",
  },
  {
    step: "03",
    title: "Supplier research",
    whatHappens:
      "We search for suppliers that fit the brief — not every supplier who can send a quotation.",
    vestaDoes: "Identify options based on product, quantity, target budget and supplier type.",
    clientDoes: "Stay available for product decisions if we find variants that need your call.",
    output: "A working supplier longlist.",
  },
  {
    step: "04",
    title: "Supplier comparison",
    whatHappens:
      "We compare more than unit price: specification, MOQ, lead time, communication quality and obvious credibility signals.",
    vestaDoes: "Assess options against your requirements and flag trade-offs.",
    clientDoes: "Review the comparison and tell us which direction you prefer.",
    output: "A comparison of shortlisted options.",
  },
  {
    step: "05",
    title: "Quotation",
    whatHappens:
      "We obtain quotations and make the commercial picture easier to read.",
    vestaDoes: "Communicate with suppliers and organise quotation details for your review.",
    clientDoes: "Review quotations and ask for any adjustments you need.",
    output: "Quotation summary for decision-making.",
  },
  {
    step: "06",
    title: "Client approval",
    whatHappens:
      "Nothing moves to purchasing until you approve the supplier, product and commercial terms.",
    vestaDoes: "Present the information needed to decide, without rushing you.",
    clientDoes: "Approve, request changes, or ask us to keep looking.",
    output: "Written approval to proceed.",
  },
  {
    step: "07",
    title: "Procurement",
    whatHappens:
      "Once approved, we coordinate purchasing on your behalf.",
    vestaDoes: "Manage supplier communication and purchasing coordination.",
    clientDoes: "Complete agreed payments according to the approved terms.",
    output: "Order confirmation and production updates.",
  },
  {
    step: "08",
    title: "Inspection where required",
    whatHappens:
      "If inspection is part of the brief, products can be checked against agreed specifications before they leave.",
    vestaDoes: "Inspect against the agreed specification and share findings.",
    clientDoes: "Decide how to handle any issues raised in the inspection.",
    output: "Inspection notes and photographs where applicable.",
  },
  {
    step: "09",
    title: "Consolidation where applicable",
    whatHappens:
      "If goods need to be brought together before shipping, we coordinate that step.",
    vestaDoes: "Coordinate consolidation and prepare goods for handoff.",
    clientDoes: "Confirm logistics provider details for the next stage.",
    output: "Packing/handoff notes.",
  },
  {
    step: "10",
    title: "Logistics handoff",
    whatHappens:
      "Goods are handed to an independent logistics provider for transportation. This is a separate partner stage.",
    vestaDoes: "Hand over goods and relevant packing information to the logistics partner.",
    clientDoes: "Work with your logistics provider on shipping, duties and delivery.",
    output: "Handoff confirmation. Transportation is not handled by Vesta.",
  },
  {
    step: "11",
    title: "Delivery",
    whatHappens:
      "Your logistics partner handles transit and last-mile delivery according to the shipping arrangement you have with them.",
    vestaDoes:
      "Remain available for procurement questions that arise after handoff.",
    clientDoes: "Receive the goods through your logistics provider and inspect on arrival.",
    output: "Delivery is completed by the independent logistics partner.",
  },
] as const;
