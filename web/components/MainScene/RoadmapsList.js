import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { updateSelectedRoadmap } from '../../ducks/growBoard';
import Javascript from '../../static/icons/javascript.svg';

const MainWrapper = styled.div`
  height: 87vh;
  overflow-y: scroll;
  padding: 0 25px;

  .active {
    opacity: 1;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #ebeced;
  }

  ::-webkit-scrollbar {
    width: 9px;
    background-color: #ced5db;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ced5db;
  }
`;

const ItemSelected = styled.div`
  position: absolute;
  left: 0;
  transition: all .5s;
  background: red;
`;

const MainItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  opacity: 0.33;
  transition: all 0.3s ease;

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const TitleWrapper = styled.div`
  color: #738393;
  font-size: 13px;
  font-weight: 500;
`;

class RoadmapsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roadlist: [],
      posY: 0,
      selected: '',
    };
  }

  componentDidMount() {
    this.setState({
      roadlist: this.props.roadlist,
    });
  }

  RoadmapListItem = item => {
    return (
      <MainItemWrapper key={item.key} ref={`itemRoad${item.key}`} onClick={() => { this.setActiveClass(`itemRoad${item.key}`) }}>
        <IconWrapper>
          <Javascript />
        </IconWrapper>
        <TitleWrapper>{item.name}</TitleWrapper>
      </MainItemWrapper>
    );
  };

  setActiveClass = (element) => {
    this.state.selected && this.refs[this.state.selected].classList.remove('active');

    this.setState({
      selected: element
    }, ()=> {
        this.props.updateSelectedRoadmap(element);
        this.refs[element].classList.add('active');
    })
  }

  updatePosY = (e) => {
    // if(this.state.selected && this.state.posY !== this.refs[this.state.selected].offsetTop){
    //   this.setState({
    //     posY: this.refs[this.state.selected].offsetTop
    //   })
    // }else{
    //   if(!this.state.selected){
    //     this.setState({
    //       posY: e.clientY,
    //     });
    //   }
    // }
  }

  //offsetTop 

  render() {
    return (
      <MainWrapper onMouseMove={this.updatePosY.bind(this)}>
        {/* <ItemSelected style={{ top: `${this.state.posY}px` }}>a</ItemSelected> */}
        {this.state.roadlist &&
          this.state.roadlist.map(item => (
            <>{this.RoadmapListItem(item)}</>
          ))}
      </MainWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedRoadmap: state.growBoardReducer.selectedRoadmap,
  };
}

const mapDispatchToProps = {
  updateSelectedRoadmap,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoadmapsList);
