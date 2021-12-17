import styled from "styled-components";

export const HeroSection = styled.section`
  height: 100vh;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    height: 90vh;
  }
`;

export const HeroContent = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const HeroItems = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 80px 0 150px 30px;
  background: linear-gradient(to right, #111 30%, transparent 70%);
`;

export const Title = styled.h2`
  font-size: 60px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const HeroInfo = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-top: 16px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Score = styled.small`
  display: inline-block;
  margin-right: 16px;
  color: #46d369;
`;

export const HeroDate = styled.small`
  display: inline-block;
  margin-right: 16px;
`;

export const Seasons = styled.small`
  display: inline-block;
  margin-right: 16px;
`;

export const HeroSynopsis = styled.p`
  max-width: 40%;
  font-size: 20px;
  color: #999;
  margin-top: 16px;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 14px;
    margin-right: 30px;
  }
`;

export const HeroButtons = styled.div`
  margin-top: 16px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 14px 24px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  margin-right: 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Genres = styled.p`
  font-size: 18px;
  color: #999;
  margin-top: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
