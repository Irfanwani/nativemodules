import {NativeModules} from 'react-native';

const {CalendarModule} = NativeModules;

interface CalendarModuleInterface {
  createCalendarEvent(name: string, location: string): void;
  getConstants(): Object;
}

export default CalendarModule as CalendarModuleInterface;
