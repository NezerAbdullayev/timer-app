import styled from 'styled-components';

const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none; 


    &::-webkit-scrollbar {
    display: none; 
  }
`;



export default BoxContainer;
