import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        <span>At our core, we believe in the power of collective action to drive positive change.
        Our mission is to bring together passionate individuals who are eager to contribute their time,
         skills, and energy to make a meaningful impact in our community.
          Whether you're looking to mentor youth, support environmental initiatives, or assist in local events,
           our platform connects you with a variety of volunteer opportunities that match your interests and availability.</span>
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        <p>
        Transparency is a cornerstone of our organization. We are committed to being open and honest in all our operations,
         ensuring that our members, volunteers, and supporters are well-informed and confident in our mission. From financial disclosures to project updates,
         we strive to provide clear and accessible information about how we allocate resources and the impact of our initiatives.</p>
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        <p>Quantitatively, we track key metrics such as the number of volunteers engaged, hours contributed, and the specific results of projects. Qualitatively, we gather feedback through surveys, interviews,
            and community forums to capture personal stories and insights from those we serve and our volunteers.
           This mixed-method approach provides a holistic view of our impact, highlighting both the tangible and intangible benefits of our work.</p>
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;