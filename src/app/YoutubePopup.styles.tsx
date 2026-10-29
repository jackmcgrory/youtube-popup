import styled from 'styled-components';

export const VideoFrame = styled.iframe<{$fixedWidth: boolean}>`
    display: block;
    ${({$fixedWidth}) => $fixedWidth && 'width: 100; min-height: 220px'}
    max-width: 100%;
    aspect-ratio: 16 / 9;
    height: auto;
    border: 0;
`;

export const DialogBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: purple;
    padding: 1rem;
    width: calc(90vw - 2rem);
    top: 3rem;
    gap 1rem;
    position: absolute;
    z-index: 2;
`;