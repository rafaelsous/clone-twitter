import React from 'react';
import StickBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Tatiane Araujo"
                nickname="@tatiane.araujo"
              />,
              <FollowSuggestion
                name="Elisa Sousa"
                nickname="@elisaaraujo.sousa"
              />,
              <FollowSuggestion
                name="Rayane Lima"
                nickname="@rayane.lima"
              />,
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickBox>
    </Container>
  );
}

export default SideBar;