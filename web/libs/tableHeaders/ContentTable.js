/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import { LevelLabel } from '../../components/Common/Labels';
import { UpvoteButton, StrikeButton } from '../../components/Common/Button';
import TitleContentTable from '../../components/Common/TitleContentTable';
import styled from 'styled-components';

const DefaultStyled = styled.div`
  color: #5b5f64;
  font-size: 12px;
`;

const LinkStyled = styled.div`
  color: #4427f1;
  font-size: 12px;
  font-weight: bold;
  text-decoration: underline;
  svg{
    fill: #4427f1;
    margin-right: 5px;
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentColumnsData = [
  {
    title: 'Lang',
    dataIndex: 'language',
    key: 'language',
    render: text => <DefaultStyled>{text}</DefaultStyled>
  },
  {
    title: 'Level',
    dataIndex: 'level',
    key: 'level',
    width: 110,
    render: text => <LevelLabel level={text} />
  },
  {
    title: 'Content',
    dataIndex: 'title',
    key: 'title',
    render: (text, obj) => <TitleContentTable title={text} user={obj.user} />
  },
  {
    title: 'Type',
    key: 'type',
    dataIndex: 'type',
    render: text => <DefaultStyled>{text}</DefaultStyled>
  },
  {
    title: 'Post Date',
    dataIndex: 'postdate',
    key: 'postdate',
    render: text => <DefaultStyled>{text}</DefaultStyled>
  },
  {
    title: 'Link',
    dataIndex: 'link',
    key: 'link',
    render: text => <LinkStyled>Link</LinkStyled>
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
    render: text => <ActionsWrapper><UpvoteButton voted={false} voteCount={44}/><StrikeButton/></ActionsWrapper>
  },
];

export const ContentRowsData = [{
  key: '1',
  language: 'EN',
  level: 'Easy',
  title: 'Learn 10 ways to state management',
  type: 'Video',
  postdate: '22 Jan 2019',
  link: 'Http://google.com.br',
  user: '@MarcosRenato266'
}, {
  key: '2',
  language: 'EN',
  level: 'Medium',
  title: 'Learn 10 ways to state management',
  type: 'Video',
  postdate: '22 Jan 2019',
  link: 'Http://google.com.br',
  user: '@MarcosRenato266'
},
{
  key: '3',
  language: 'EN',
  level: 'Hard',
  title: 'Learn 10 ways to state management',
  type: 'Video',
  postdate: '22 Jan 2019',
  link: 'Http://google.com.br',
  user: '@MarcosRenato266'
},
{
  key: '4',
  language: 'EN',
  level: 'Hot',
  title: 'Learn 10 ways to state management',
  type: 'Video',
  postdate: '22 Jan 2019',
  link: 'Http://google.com.br',
  user: '@MarcosRenato266'
}];
