"use client"

import React from 'react'
import parse from 'html-react-parser';
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ img, altimg, title, desc }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <article className={"card dis-flex"} style={{ opacity: inView ? "1" : "0" }} ref={ref}>
      <img src={img} alt={altimg} />

      <div className="infoCard dis-flex flex-dir-col">
        <h3 className="ubuntu-medium">{title}</h3>
        <p className="ubuntu-light">
          {parse(desc)}
        </p>
      </div>
    </article>
  )
}

export default ServiceCard