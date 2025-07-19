import Card from "../Card.jsx";

import store from "../../assets/store.jpg";


const Store = () => {
  return (
    <Card title="Hardware Specialist & Small Business Owner" image={store}>
      <ul className="techStack">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul>
        <li>Created over 100 custom built controllers for a highly competitive and high skill ceiling game that requires extremely precise controls</li>
        <li>Maintained a perfect 5/5 rating with 76 reviews, with the quality of my product and customer service being the two most frequent reasons</li>
        <li>Developed an expert level of soldering skill and customer service</li>
        <li>Sourced all components and maintained my stock to meet demand</li>
        <li>Maintained an open line of communication with customers after delivering in order to help improve my product and overall experience</li>
      </ul>
      <div className="cardBtns">
        <a href="https://www.etsy.com/shop/CadraWorks?ref=profile_header#reviews" rel="noreferrer" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16z" /><path fill="currentColor" d="m12 15l1.57-3.43L17 10l-3.43-1.57L12 5l-1.57 3.43L7 10l3.43 1.57z" /></svg>
          Reviews
        </a>
      </div>
    </Card>
  );
};

export default Store;
