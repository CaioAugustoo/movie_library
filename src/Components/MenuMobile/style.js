import styled from 'styled-components';

export const MenuMobileStyled = styled.div`
  display: none;
  align-items: center;
  background: var(--primary);
  height: 100vh;
  width: 60%;
  justify-content: flex-start;
  transform: translateX(-20rem);
  transition: all 0.5s ease 0s;
  color: var(--white);
  padding: 30px;
  position: fixed;
  
  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    display: flex;
  }
`;

export const ToggleMenuIcon = styled.div`
  content: '';
  display: none;
  background: var(--secondary);
  position: absolute;
  width: 25px;
  height: 4px;
  top: 18px;
  border-radius: 100px;
  margin-left: 10px;

  @media (min-width:18.75rem) and (max-width: 49.1875rem) {
    display: block;  
  }
  
  &::before {
    content: '';
    display: block;
    background: var(--secondary);
    position: absolute;
    width: 25px;
    height: 4px;
    top: 8px;
    border-radius: 100px;
  }

   &::after {
    content: '';
    display: block;
    background: var(--secondary);
    position: absolute;
    width: 25px;
    height: 4px;
    top: 16px;
    border-radius: 100px;
  }
`;

export const MobileItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MobileItems = styled.li`
  list-style: none;
  margin: 10px 0px;
`;

export const CloseMenuButton = styled.div`
  position: absolute;
  z-index: 11;
  font-size: 3rem;
  right: 0px;
  color: var(--white);
  transition: all 0.5s ease 0s;
  top: 0;
  padding-right: 20px;
`;