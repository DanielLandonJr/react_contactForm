// functional CompositionEvent, static no changin data

// created using rfc

import React from 'react';

// include props here and you can pass in properties from the calling app
const Header = props => {
  // destructure props to get the parts that we want
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};

export default Header;

// this is default if you use rfc command. if you use this then the react extension in chrome will show 'undefined' for tag name. using syntax above will change the name of the tag to what is exported. may be able to change this later with better understanding of export
// export default () => {
//   return (
//     <div>

//     </div>
//   )
// }
