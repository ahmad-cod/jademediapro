import {
  DesignChart,
  DesignImage,
  IdeateChart,
  IdeateImage,
  ImplementationChart,
  ImplementationImage,
  ResearchChart,
  ResearchImage,
  ResultChart,
  ResultImage,
} from "@/images";

/**
 * @type {Methodology[]}
 */
export const methodologyData = [
  {
    name: "Research",
    text:
      "Jademediapro's research phase involves simple steps of gathering information and analysing the findings to get to know your business, industry, competitors, target audience, all of your existing branding and design, marketing data, evaluating the data, and preparing the research report for presentation. " +
      "It typically consists of extensive desk and field research including interviews where we might ask; 'what 3 words would you use to describe your brand/company?', 'why do you choose…', 'what is most important to you', 'how do you rate…', we listen to you to understand your business problem (or opportunity). " +
      "These steps may vary depending on the specific outcomes your business is trying to achieve. " +
      "For example, a product-oriented business may focus on the design of packaging and marketing materials used to communicate the product brand. The process followed at each level is measured - deliberately arranged, is fundamental, appropriately recorded, and methodologically substantial.",
    chart: ResearchChart,
    image: ResearchImage,
  },
  {
    name: "Ideate",
    text: "After we’ve examined all potential causes of the problem and have used those questions to boil down exactly what you’re trying to solve, it’s time to focus and consolidate values, business aspirations, vision for the future and then align an effective solution with your vision. Also, we put ourselves in your buyer’s position by creating a narrative about them using statistics and research data about your target audience like; ‘Where do they shop?’, ‘What do they do for fun?’, ‘Which social media channels do they use?’. Knowing these will help us optimize your branding and marketing decisions. This process phase entails brainstorming numerous ideas in a team discussion, selecting the best idea(s), working to develop a plan to implement the idea, and finally putting the idea into practice to set the tone of your communication, and provide a unifying force to develop your brand values and business direction.",
    chart: IdeateChart,
    image: IdeateImage,
  },
  {
    name: "Design",
    text: "This is a very important phase as a series of well-defined activities are designed to develop a value system and communication framework for your business, resulting in a coherent brand identity and digital marketing strategy. Without design, we wouldn’t be able to deliver the strategy. The design phase is where brand values are transformed into real solutions like a unique and meaningful visual brand identity. As part of this process, the design’s main role is to formulate the visual identity but it often goes beyond that. We proceed to develop the ideal marketing mix for your target audience and the type of product or service you offer to put all the pieces together so that everything we do contributes to the success of your business and beats out your competitors. This phase helps us clarify your goals and identify where you see your business in the future, which ultimately strengthens your strategy.",
    chart: DesignChart,
    image: DesignImage,
  },
  {
    name: "Implement",
    text: "The implementation phase is when your new brand identity is revealed to the world, the marketing plan is executed and the outputs of marketing efforts are monitored to adjust the marketing mix according to the market changes. This being the application step, it transforms the written or designed strategy into action, and the product is presented according to this process i.e., how and when certain aspects of your brand will be launched on various channels. Implementation can take many forms, from a few business cards to a website or series of product or promotional videos. This phase can happen very quickly, but it can also last several months depending on your business’ circumstances. We will reach out to your customers to inform and persuade them about your product or service using the monthly benchmarks, weekly action steps, and daily marketing appointments. This strategic marketing process is dynamic.",
    chart: ImplementationChart,
    image: ImplementationImage,
  },
  {
    name: "Result",
    text: "This is the final phase of our five foundational processes, but it’s all an iterative process, the results generated during the implementation phase are often used to redefine one or more problems and inform the understanding of your customers, their conditions of use, how they think, behave, and feel, and empathize with your brand, how the success of your product affects the price of similar items on the market, are new products being released that could be perceived of greater value by your customers, etc. Even during this phase, we reflect on all of the feedback, alterations, and refinements are made in order to rule out problems when the branding and marketing plan is implemented, our management makes sure that everything is going fine because the success of any branding or marketing effort depends heavily on how it’s carried out, regularly measured and managed to be on track.",
    chart: ResultChart,
    image: ResultImage,
  },
];
