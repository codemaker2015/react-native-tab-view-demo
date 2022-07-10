import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const UpcomingRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const ActiveRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const PastRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#111ab7' }} />
);

const renderScene = SceneMap({
  upcoming: UpcomingRoute,
  active: ActiveRoute,
  past: PastRoute
});

export default function App() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'upcoming', title: 'Upcoming' },
    { key: 'active', title: 'Active' },
    { key: 'past', title: 'Past' }
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}