import BlogCards from "../../components/blogComponent/blogCards";
import { blogCategoriesData, blogData } from "../../data/blogData";
import Pagination from "../../components/Pagination";
import BlogHeader from "../../components/blogComponent/blogHeader";
import InterviewCards from "../../components/blogComponent/interviewCards";
import CategoryFilter from "../../components/CategoryFilter";
import styles from "../../styles/Blog.module.css";
import usePagination from "../../hooks/usePagination";
import { MainWrapper } from "@/components/Layout";

const Blogs = () => {
  const [currentData, currentPage, setCurrentPage, dataPerPage, data, setData] =
    usePagination(blogData, 3, 5);

  return (
    <MainWrapper
      headerType={1}
      backgroundColor="#4f2e67"
      paint-header-on-scroll
      title="Blogs - Jade Media Pro"
      meta="Stay up to date with relevant tech and career related post such as UI/UX, Product Design, Business Development, and more."
    >
      <BlogHeader />
      <div className={styles.blog_page}>
        {/* The category filter needs the function to set the state of the category, 
        the categories data in your json file and the data you need to filter through */}
        <CategoryFilter
          setCategory={setData}
          categories={blogCategoriesData}
          filterContent={blogData}
        />

        <BlogCards blog={currentData} />
        {/* Pagination needs four props-the number of cards you need per page, 
        the total number of cards you have, the current page number and the 
        function to change the page */}
        <Pagination
          cardsPerPage={dataPerPage}
          totalCards={data.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <InterviewCards />
      </div>
    </MainWrapper>
  );
};

export default Blogs;
