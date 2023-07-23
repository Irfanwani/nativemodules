import {FC} from 'react';
import {Button, NativeModules, View} from 'react-native';

const App: FC = () => {
  let {CalendarModule} = NativeModules;
  const onPress = () => {
    CalendarModule.createCalendarEvent('Irfan', 'Mac book');
  };

  return (
    <View>
      <Button title="Call Native Module" onPress={onPress} />
    </View>
  );
};

export default App;
