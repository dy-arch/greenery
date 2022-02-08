import PlantRecommendImg from "../ServiceNav/img/plant.png";
import CommunityImg from "../ServiceNav/img/community.png";

import styled from "styled-components";

export const Container = styled.div`
  width: 1136px;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  width: 134px;
  height: 46px;
  cursor: pointer;
  color: #45ba66;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 550px;
  height: 704px;
  padding: 60px 50px;
  border-radius: 10px;
`;

export const Detail = styled.p`
  font-size: 48px;
  font-weight: bold;
  color: white;
  margin: 0;
`;

export const PlantRecommedNav = styled(Content)`
  background-image: url(${PlantRecommendImg});
`;

export const CommunityNav = styled(Content)`
  background-image: url(${CommunityImg});
`;
