import { blogData } from "@/data";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

/**
 * Carousel of editorials.
 * @type {React.FC}
 */
export const EditorialLineup = () => {
  return (
    <div>
      <ul className="flex justify-between max-[700px]:flex-col max-[700px]:justify-start">
        {blogData.slice(0, 3).map((blog, index) => (
          <Editorial
            id={blog.id}
            title={blog.title}
            excerpt={blog.description}
            date={blog.date}
            image={blog.thumbnail}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

/**
 * @typedef {{
 *    id: number,
 *    title: string,
 *    excerpt: string,
 *    date: string,
 *    image: string,
 * }} EditorialProps


 * @type {React.FC<EditorialProps>}
 * A blog card on the home page.
 */
const Editorial = (props) => {
  return (
    <li className="w-[28vw] max-[700px]:w-full max-[1440px]:h-[500px] mt-[20px] max-[700px]:h-fit max-[700px]:max-h-max rounded-[4px] overflow-hidden">
      <Link className="w-full h-full" href={`/blog/${props.id}`}>
        <div
          className="h-[50%] max-[768px]:h-[45%] max-[700px]:h-[270px] flex bg-cover bg-center bg-no-repeat flex-col justify-end text-white bg-black"
          style={{ backgroundImage: `url(${props.image.src})` }}
        >
          <div className="bg-[#0000008f] py-[10px] pl-[16px]">
            <h4 className="w-[60%] max-[1024px]:w-[75%] max-[768px]:w-[90%] font-semibold text-[16pt] max-[1400px]:text-[13.5pt] max-[768px]:text-[12pt] text-[#F6F6F6] [line-height:128%]">
              {props.title}
            </h4>
            <span className="max-[1024px]:text-[9pt]">{props.date}</span>
          </div>
        </div>
        <div className="p-[16px] [box-shadow:2px_7px_20px_rgba(0,0,0,0.14)] border-x-[1px] border-b-[1px] mb-[8px] max-[768px]:mb-0 max-[700px]:mb-[64px] border-[#D6D8DF]">
          <p className="clamp clamp-text-6 max-[700px]:block max-[1400px]:text-[11pt] max-[1024px]:text-[9pt]">
            {props.excerpt}
          </p>
          <button className="ml-[10%] flex items-center gap-[15px] max-[768px]:text-[10pt] whitespace-nowrap p-[24px] hover:[--shift:50%]">
            Read More
            <div className=" translate-x-[var(--shift)] duration-300">
              <BsArrowRight />
            </div>
          </button>
        </div>
      </Link>
    </li>
  );
};
