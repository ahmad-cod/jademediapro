import { StaticImageData } from "next/image";

interface Product {
  name: string;
  subtitle: string;
  price: string;
  isNewProduct: boolean;
  discount: string;
  productImage: string;
  cancelledPrice: string;
}

type Enumerate<
  length extends number,
  ACC extends unknown[] = []
> = ACC["length"] extends length ? ACC : Enumerate<length, [...ACC, 1]>;

type NumericRange<
  START_ARR extends number[],
  END extends number,
  ACC extends number = never
> = START_ARR["length"] extends END
  ? ACC | END
  : NumericRange<[...START_ARR, 1], END, ACC | START_ARR["length"]>;

type Range<X, Y> = NumericRange<Enumerate<X>, Y>;

/**
 * Do not rename to Event.
 */
interface SocialEvent {
  title: string;
  date: {
    month: NumericRange<Enumerate<1>, 12>;
    day: NumericRange<Enumerate<1>, 31>;
    year: number;
  };
  registrationRequired: boolean;
  address: string | undefined;
}

interface Job {
  id: string;
  category: string;
  location: string;
  work_type: string;
  industry: string;
}

interface ProvidedService {
  id: string;
  serviceTitle: string;
  categories: string[];
  icon: string;
  services: Array<{
    id: number;
    category: string;
    serviceContent: Array<{
      listTitle: string;
      listContent: string;
      image: StaticImageData | string;
    }>;
  }>;
}

interface FooterLink {
  title: string;
  children: Sublink[];
}

interface Sublink {
  subtitle: string;
  link: string;
}
type FooterHeadings =
  | "company"
  | "resources"
  | "hub"
  | "projects"
  | "jadeMedia";

interface FooterSocialLink {
  name: string;
  image: string;
}
