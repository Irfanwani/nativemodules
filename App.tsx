import {FC} from 'react';
import {Button, View} from 'react-native';
import CalendarModule from './src/nativemodule';

const App: FC = () => {
  const onPress = () => {
    CalendarModule.createCalendarEvent('Irfan', 'Mac book');
    let res = CalendarModule.getConstants();
    console.log(res);
  };

  return (
    <View>
      <Button title="Call Native Module" onPress={onPress} />
    </View>
  );
};

export default App;
