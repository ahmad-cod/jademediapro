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
      <ul className="flex justify-between">
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
    <li className="w-[28vw] max-h-[700px] h-[60vh] duration-300 hover:scale-[1.05] rounded-[4px] overflow-hidden">
      <Link className="w-full h-full" href={`/blog/${props.id}`}>
        <div
          className="h-[50%] flex bg-cover bg-center bg-no-repeat flex-col justify-end text-white bg-black"
          style={{ backgroundImage: `url(${props.image.src})` }}
        >
          <div className="bg-[#0000008f] py-[10px] pl-[16px]">
            <h4 className="w-[60%] font-semibold text-[16pt] text-[#F6F6F6] [line-height:128%]">
              {props.title}
            </h4>
            <span>{props.date}</span>
          </div>
        </div>
        <div className="p-[16px] [box-shadow:2px_7px_20px_rgba(0,0,0,0.14)] border-x-[1px] border-b-[1px] mb-[8px] border-[#D6D8DF]">
          <p className="clamp clamp-text-6">{props.excerpt}</p>
          <button className="ml-[10%] flex items-center gap-[15px] whitespace-nowrap p-[24px] hover:[--shift:50%]">
            Read More
            <div className="scale-[4] translate-x-[var(--shift)] duration-300">
              <BsArrowRight />
            </div>
          </button>
        </div>
      </Link>
    </li>
  );
};
