import React from "react";
import styled from "styled-components";
import Client1 from "../assets/client1.png";
import Client2 from "../assets/client2.png";
import Client3 from "../assets/client3.png";
import Client4 from "../assets/client4.png";
import Client5 from "../assets/client5.png";

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 2rem;
  margin-bottom: 5rem;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 2rem;
`;
const Client = () => {
  const clients = [Client1, Client2, Client3, Client4, Client5];
  return (
    <Section>
      {clients.map((item, index) => {
        return (
          <div className="client" key={index}>
            <img src={item} alt="items" />
          </div>
        );
      })}
    </Section>
  );
};

export default Client;
