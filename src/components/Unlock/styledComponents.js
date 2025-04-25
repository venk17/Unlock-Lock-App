import styled from 'styled-components'

export const UnlockLockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  min-height: 100vh;
  padding: 20px;
  text-align: center;
`

export const ImageAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
`

export const Image = styled.img`
  width: 96px;
  @media screen and (min-width: 768px) {
    width: 128px;
  }
`

export const Text = styled.p`
  color: #e2e8f0;
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 24px;
  margin-bottom: 48px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 64px;
  }
`

export const Button = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  background-color: #06b6d4;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  width: 150px;

  &:hover {
    background-color: #0e94e8;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 180px;
    padding: 14px 28px;
  }
`
