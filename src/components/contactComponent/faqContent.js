import styles from "../../styles/Contact.module.css";
import { FAQData } from "../../data/contactData";
import React, { useState } from "react";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
const FaqContents = () => {
  const [dropdown, setDropdown] = useState(false);
  const [answer, setAnswer] = useState();
  const [activeCategory, setActiveCategory] = useState();
  const [activeAnswer, setActiveAnswer] = useState();
  const handleDropdown = (category) => {
    setDropdown(true);
    setActiveCategory(category);
  };
  const handleAnswer = (answer) => {
    setAnswer(answer);
    setActiveAnswer(true);
  };
  return (
    <div className={styles.faq_content_container}>
      {FAQData.map((faq) => (
        <div className={styles.faq_card} key={faq.id}>
          <div className={styles.faq_button}>
            <button onClick={() => handleDropdown(faq.category)}>
              {faq.category}

              {activeCategory === faq.category ? (
                !dropdown ? (
                  <SlArrowUp />
                ) : (
                  <SlArrowDown />
                )
              ) : (
                <SlArrowUp />
              )}
            </button>
          </div>
          {
            <div className={styles.faq_content_body}>
              {activeCategory === faq.category
                ? faq.content.map((content, i) => (
                    <div className={styles.faq_content} key={i}>
                      <div className={styles.faq_question}>
                        <h3>{content.question}</h3>
                        <button onClick={() => handleAnswer(content.answer)}>
                          {answer === content.answer ? (
                            !activeAnswer ? (
                              <span>
                                <AiOutlinePlus />
                              </span>
                            ) : (
                              ""
                            )
                          ) : (
                            <span>
                              <AiOutlinePlus />
                            </span>
                          )}
                        </button>
                      </div>
                      {answer === content.answer ? (
                        <div className={styles.faq_answer}>
                          <p>{content.answer}</p>
                          <button onClick={() => handleAnswer()}>
                            <AiOutlineMinus />
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  ))
                : ""}
              {}
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default FaqContents;
