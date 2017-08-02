import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { withRouter } from 'react-router';

import ActivityCards from './ActivityCards';
import Colors from './../consts/Colors';
import ProfilePicture from './../styled-components/ProfilePicture';
//import QuestionContent from './QuestionContent';
import SecondaryCard from './SecondaryCard';

const QuestionCard = ({ mainImgSrc, history, individualQuestion }) =>
  <QuestionCardContainer>
    <PrimaryCard individualQuestion={individualQuestion}>
      <PrimaryCardHeader>
        <HeaderImageContainer>
          <ProfilePicture src={mainImgSrc} />
        </HeaderImageContainer>
        <TitleContainer>
          <Title>
            <Name>Eva </Name>is asking
          </Title>
          <Question
            onClick={() => !individualQuestion && history.push('/new')}
            individualQuestion={individualQuestion}
          >
            Will insulin make my patient gain weight?
          </Question>
        </TitleContainer>
      </PrimaryCardHeader>
      <PrimaryCardBody>
        <QuestionStatusContainer>
          {!individualQuestion && <QuestionStatus>asked</QuestionStatus>}
        </QuestionStatusContainer>
        <SecondaryCard content={!individualQuestion && <ActivityCards />} />
      </PrimaryCardBody>
    </PrimaryCard>
    <StatsContainer individualQuestion={individualQuestion}>
      <Stats>
        <div>1 related discussion</div>
        <div>6 peers involved</div>
        <div>3 conversations</div>
      </Stats>
    </StatsContainer>
  </QuestionCardContainer>;

export default withRouter(QuestionCard);

const HeaderImageContainer = styled.div`
  display: flex;
  width: 20%;
  padding: 1rem 0 0 1rem;
`;

const PrimaryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 90%;
  width: ${ifProp('individualQuestion', '100%', '80%')};
  background-color: ${Colors.lightBlue};
`;

const PrimaryCardBody = styled.div`
  display: flex;
  height: 60%;
  width: 100%;
`;

const PrimaryCardHeader = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
`;

const Name = styled.span`
  text-transform: none;
  color: ${Colors.darkBlue};
  &:hover {
    cursor: pointer;
  }
`;

const Question = styled.div`
  color: ${Colors.darkBlue};
  font-style: italic;
  &:hover {
    cursor: ${ifProp('individualQuestion', 'auto', 'pointer')};
  }
`;

const QuestionCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 25rem;
  border: solid 1px ${Colors.lightGray};
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 48%;
  font-size: .75rem;
`;

const StatsContainer = styled.div`
  display: ${ifProp('individualQuestion', 'none', 'flex')};
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
  height: 90%;
`;

const Title = styled.div`
  color: ${Colors.darkGray};
  text-transform: uppercase;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  width: 80%;
`;

const QuestionStatus = styled.div`
  width: 80%;
  border-top: solid 1px ${Colors.darkGray};
  text-align: center;
`;

const QuestionStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
  text-transform: uppercase;
  color: ${Colors.darkGray};
`;
