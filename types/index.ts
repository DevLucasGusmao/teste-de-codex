export type Service = {
  id: string;
  name: string;
  shortDescription: string;
  priceFrom: string;
  eta: string;
  featured?: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
};

export type Beat = {
  id: string;
  slug: string;
  title: string;
  genre: string;
  mood: string;
  bpm: number;
  key: string;
  duration: string;
  tags: string[];
  price: number;
  image: string;
  audioPreview: string;
  featured?: boolean;
  popular?: boolean;
  releaseDate: string;
  description: string;
};

export type LicensePlan = {
  name: string;
  price: string;
  rights: string[];
  limits: string[];
  files: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type TimeSlot = {
  time: string;
  available: boolean;
};
