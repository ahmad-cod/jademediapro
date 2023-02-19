/**
 * @typedef {import("next/image").StaticImageData} _StaticImageData
 */

/**
 * @typedef Product
 * @property {string} name
 * @property {string} subtitle
 * @property {string} price
 * @property {boolean} isNewProduct
 * @property {string} discount
 * @property {string | _StaticImageData} productImage
 * @property {string} cancelledPrice
 */

/**
 * @typedef {import("csstype").Property.BackgroundColor} BackgroundColor
 * @typedef {import("csstype").Property.Color} Color
 * @typedef {import("csstype").Property.Height} Height
 * @typedef {import("csstype").Property.Width} Width
 */

/**
 * Do not rename to Event.
 */
/**
 * @typedef {{
 * title: string;
 * date: {
 *  month: 1|2|3|4|5|6|7|8|9|10|11|12;
 *  day: number;
 *  year: number;
 * };
 * registrationRequired: boolean;
 * address: string | undefined;
 * }} SocialEvent
 */

/**
 * @typedef {{
 * id: string;
 * category: string;
 * location: string;
 * work_type: string;
 * industry: string;
 * }} Job
 */

/**
 * @typedef {{
 * id: string;
 * serviceTitle: string;
 * blurb: string;
 * categories: string[];
 * icon: string;
 * services: Array<{
 *  id: number;
 *  category: string;
 *  serviceContent: Array<{
 *    listTitle: string;
 *    listContent: string;
 *    image: _StaticImageData | string;
 *  }>;
 * }>;
 * }} ProvidedService
 */

/**
 * @typedef {{
 *  title: string;
 *  children: Sublink[];
 * }} Footerlink
 */

/**
 * @typedef {{
 * subtitle: string;
 * link: string;
 * }} Sublink
 */

/**
 * @typedef {"company"| "resources" | "hub" | "projects" | "jadeMedia"} FooterHeadings
 */

/**
 * @typedef {{
 *  name: string;
 *  image: string;
 * }} FooterSocialLink
 */

/**
 * @typedef {{
 *  id: string;
 *  title: string;
 *  color: string | [string, string];
 *  header: string | _StaticImageData;
 *  contents: Array<{
 *    [keyof: string]: Array<{
 *      [keyof: string]: string;
 *      image: Array<string | _StaticImageData>;
 *    }>;
 *  }>;
 * }} CaseStudy
 */

/**
 * @typedef {{
 *   name: string;
 *   text: string;
 *   chart: string | _StaticImageData;
 *   image: string | _StaticImageData;
 * }} Methodology
 */

/**
 * @typedef {{
 *    id: string;
 *    category: string;
 *    title: string;
 *    description: string;
 *    date: string;
 *    thumbnail: string | _StaticImageData;
 *    contents: BlogContents[]
 * }} Blog
 */

/**
 * @typedef {{
 *    introduction: string;
 *    tableOfContent?: Array<{
 *       tableOfContentNote: string;
 *       tableOfContentList: string[];
 *    }>;
 *    subheading: string[];
 *    subheadingNote: string[];
 *    note?: string;
 *    [keyof: string]: Array<{
 *       listItem: string[];
 *       listItemContent: string[]
 *    }>
 *    images: (string | _StaticImageData)[];
 *    conclusion: string;
 *    conclusionList?: string[];
 *    finalNote?: string[]
 * }} BlogContents
 */
