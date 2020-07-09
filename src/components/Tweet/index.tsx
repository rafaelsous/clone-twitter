import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        You retweeted
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rafael Sousa</strong>
            <span>@RafaelSousa86</span>

            <Dot />

            <time>Jul 07</time>
          </Header>

          {/* eslint-disable jsx-a11y/accessible-emoji */}
          <Description>Foguete não tem ré 🚀</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              17
            </Status>

            <Status>
              <RetweetIcon />
              17
            </Status>

            <Status>
              <LikeIcon />
              1001
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;