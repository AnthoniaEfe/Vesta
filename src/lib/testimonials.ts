export type Testimonial = {
  id: string;
  name: string;
  products: string;
  help: string;
  likedMost: string;
  rating: 5;
  recommend: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "aisha",
    name: "Aisha",
    products: "Party decor items",
    help: "Vesta helped me a lot, they have kind patience, and very nice at the same time, despite the back and forth.",
    likedMost: "What I liked most was the attentiveness, which I really appreciate.",
    rating: 5,
    recommend: "I would surely recommend Vesta.",
  },
  {
    id: "funke",
    name: "Funke",
    products: "A coat and Puma shoes",
    help: "Finding the coat and those Puma shoes on my own was a little difficult. You guys stepped in, tracked them down effortlessly, and got them sorted for me.",
    likedMost: "I loved how stress-free you made the whole process.",
    rating: 5,
    recommend: "100% yes. I'd highly recommend Vesta to anyone looking to save time and for a stress-free process.",
  },
];
