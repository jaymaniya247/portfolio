"use client";

import React, { Fragment, useState } from "react";
import BlogPopup from "./popup/BlogPopup";
import Image from "next/image";

interface BlogDataItem {
  title: string;
  date: string;
  author: string;
  img: string;
  description: string[];
}

const blogData: BlogDataItem[] = [
  {
    title: "Diversification of digital marketing stategies",
    date: "02 June, 2022",
    author: "Jay Maniya",
    img: "/img/news/1.jpg",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Diversification of digital marketing stategies",
    date: "02 June, 2022",
    author: "Jay Maniya",
    img: "/img/news/2.jpg",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Diversification of digital marketing stategies",
    date: "02 June, 2022",
    author: "Jay Maniya",
    img: "/img/news/3.jpg",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Diversification of digital marketing stategies",
    date: "02 June, 2022",
    author: "Jay Maniya",
    img: "/img/news/4.jpg",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
];

const Blog: React.FC = () => {
  const [activeData, setActiveData] = useState<BlogDataItem | {}>({});
  const [open, setOpen] = useState<boolean>(false);

  const onClick = (blog: BlogDataItem) => {
    setOpen(true);
    setActiveData(blog);
  };

  return (
    <Fragment>
      <BlogPopup
        open={open}
        close={() => setOpen(false)}
        data={activeData as BlogDataItem}
      />
      <div className="orido_tm_section" id="blog">
        <div className="orido_tm_news">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  From my
                  <br />
                  blog post
                </span>
              </h3>
            </div>
            <div className="news_list">
              <ul>
                {blogData.map((blog, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <div className="left">
                        <div className="metabox">
                          <ul>
                            <li>
                              <span>
                                <a
                                  className="c-pointer"
                                  onClick={() => onClick(blog)}
                                >
                                  {blog.author}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>{blog.date}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="title">
                          <h3>
                            <a
                              className="c-pointer"
                              onClick={() => onClick(blog)}
                            >
                              {blog.title}
                            </a>
                          </h3>
                        </div>
                        <div className="orido_tm_simple_button">
                          <a
                            className="line_effect c-pointer"
                            onClick={() => onClick(blog)}
                          >
                            Read More{" "}
                            <Image
                              width={24}
                              height={24}
                              className="svg"
                              src="/img/svg/top-arrow.svg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="right">
                        <Image
                          width={1000}
                          height={1000}
                          src="/img/thumbs/24-20.jpg"
                          alt=""
                          style={{ width: 260, height: 100 }}
                        />
                        <div
                          className="main"
                          data-img-url={blog.img}
                          style={{ backgroundImage: `url(${blog.img})` }}
                        />
                        <a
                          className="orido_tm_full_link c-pointer"
                          onClick={() => onClick(blog)}
                        />
                      </div>
                      <span className="shape">
                        <Image
                          width={232}
                          height={110}
                          className="svg"
                          src="/img/svg/Intersect.svg"
                          alt=""
                        />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Blog;
