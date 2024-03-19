import styled from "styled-components";
import { Theme } from './../../styles/Theme';

export const Container = styled.div`
    overflow: visible;
    max-width: 1200px;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    @media ${Theme.media.other}{
        padding: 0 10px;
    }
`