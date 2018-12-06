import React from 'react';

// below is the "default" format if you use rfc to generate function. this works just fine except that if you use react tool in browser the component will show up as "Unknown". I like to have an actual name show for the component so modify the format as indicated below and the component will show with a name
// export default () => {
//   return (
//     <div>
//       <h1 className="display-4">About Contact Manager</h1>
//       <p className="lead">Simple App To Manage Contacts</p>
//       <p className="text-secondary">v. 1.0.0</p>
//     </div>
//   );
// };

const About = () => {
  return (
    <div>
      <h1 className="display-4">About Contact Manager</h1>
      <p className="lead">Simple App To Manage Contacts</p>
      <p className="lead">Simple App To Manage Contacts</p>
      <p className="lead">Simple App To Manage Contacts</p>
      <p className="lead">Simple App To Manage Contacts</p>
      <p className="text-secondary">v. 1.0.0</p>
    </div>
  );
};

export default About;
