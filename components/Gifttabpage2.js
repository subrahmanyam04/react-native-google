// DetailsScreen.js
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

// import Giftcardtabs from './Giftcardtabs';
// import Gifttab2layout from './Gifttab2layout';

const Gifttabpage2 = () => {

  const Gifttab2layout = React.lazy(() => import('./Gifttab2layout'));
  return (

    <ScrollView>
      {/* <React.Suspense fallback={<Text>Loading...</Text>}> */}
        <Gifttab2layout />
      {/* </React.Suspense> */}
    </ScrollView>


  );
};

export default Gifttabpage2;
