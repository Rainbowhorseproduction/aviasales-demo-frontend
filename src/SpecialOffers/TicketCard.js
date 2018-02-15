import React from "react";
import styled from "styled-components";

const TicketCard = styled.div`
  background: white;
  margin-bottom: 12px;
  padding-bottom: 16px;
`;

const MainPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #cd2027;
  padding: 12px 16px;
`;

const MinPrice = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #ffffff;
  margin: 0;
  padding: 10px 0px;
`;

const CircleLogo = styled.img`
  width: 38px;
  height: 38px;
`;

const MainBlock = styled.div`
  display: flex;
`;

const SubMain = styled.div`
  padding: 18px 8px 0px 8px;
`;

const Col = styled.div`
  width: 50%;
`;

const CompanyLogo = styled.img`
  margin-top: 4px;
`;

const Price = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  text-align: right;
  color: #5c5c5c;
  margin: 0;
  padding-right: 8px;
  font-size: 12px;
`;

const PriceBig = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 20px;
  text-align: right;
  color: #5c5c5c;
  font-size: 20px;
  margin-left: 4px;
`;

const OfferTimeLeft = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 15px;
  font-size: 12px;
  text-align: right;
  color: #d93633;
  margin: 0;
  margin-top: 10px;
  padding-right: 8px;
`;

const TitleOffer = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #242424;
  margin: 0;
  margin-top: 17px;
  margin-bottom: 45px;
`;

const Details = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #d93533;
  margin: 0;
  padding: 10px 0px;
  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;
  width: 100%;
  cursor: pointer;
`;

export default function(props) {
  return (
    <TicketCard>
      <MainPrice>
        <MinPrice>{props.text}</MinPrice>
        {props.alianceLogo && (
          <CircleLogo src={props.alianceLogo} alt="Alliance logo" />
        )}
      </MainPrice>
      <SubMain>
        <MainBlock>
          <Col>
            <CompanyLogo src={props.logo} alt="logo" />
          </Col>
          <Col>
            <Price>
              от <PriceBig>{props.price.toLocaleString()} ₽</PriceBig>
            </Price>
            <OfferTimeLeft>{props.timeLeft}</OfferTimeLeft>
          </Col>
        </MainBlock>
        <TitleOffer>{props.offer}</TitleOffer>
        <Details>{props.details}</Details>
      </SubMain>
    </TicketCard>
  );
}
