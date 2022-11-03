import {
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <KeyboardAwareScrollView>
      {children}
      </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);
export default HideKeyboard;
