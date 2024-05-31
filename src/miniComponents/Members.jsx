import React from "react";

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/m1.jpg",
      title: "Alexa",
    },
    {
      id: 2,
      image: "/m2.jpg",
      title: "John",
    },
    {
      id: 3,
      image: "/m3.jpg",
      title: "Roger",
    },
    {
      id: 4,
      image: "/m4.jpg",
      title: "Daniel",
    },
    {
      id: 5,
      image: "/m5.jpg",
      title: "Siya",
    },
    {
      id: 6,
      image: "/m6.jpg",
      title: "Thomas",
    },
    {
      id: 7,
      image: "/m7.jpg",
      title: "Chad",
    },
  ];
  return (
    <>
      <section className="members">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">MEMBERS</h2>
            <p>
            Our member's unwavering commitment and generosity of spirit are the driving forces behind our success.
             Together, they inspire and empower others to join in and contribute to the vibrant, supportive community we continue to build.
            </p>
          </div>
          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;