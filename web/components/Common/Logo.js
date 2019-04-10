import React from 'react';

export default function Logo(props) {
  switch (props.type) {
    case 'icon':
      return <img src="../../static/img/LogoIcon.png" alt="Grow - Dev Roadmaps"/>; 
    default:
      return <img src="../../static/img/LogoDefault.png" alt="Grow - Dev Roadmaps"/>;
  }
  
}
