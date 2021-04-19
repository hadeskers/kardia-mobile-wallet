import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Image,
  TouchableOpacity,
  ImageURISource,
  Alert,
  ViewStyle,
  StyleProp,
  ImageStyle,
} from 'react-native';
import styles from './style';
import { getLanguageString } from '../../utils/lang';
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../../atoms/language';

const CustomImagePicker = ({
  image,
  onSelect,
  pickerTitle = 'Choose image',
  editable = true,
  style,
  imageStyle,
}: {
  image: ImageURISource;
  onSelect?: (image: ImageURISource) => void;
  pickerTitle?: string;
  editable?: boolean;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}) => {
  const language = useRecoilValue(languageAtom);
  const pickImage = () => {
    Alert.alert(pickerTitle, '', [
      {
        text: getLanguageString(language, 'TAKE_PICTURE'),
        onPress: () =>
          launchCamera({mediaType: 'photo', durationLimit: 120, includeBase64: true}, (response) => {
            if (onSelect && response.base64) {
              const source = {uri: `data:image/png;base64,${response.base64}`};
              onSelect(source);
            }
          }),
      },
      {
        text: getLanguageString(language, 'CHOOSE_FROM_LIBRARY'),
        onPress: () => {
          launchImageLibrary(
            // TODO: Check for library error fixing
            // @ts-ignore
            {mediaType: 'photo', durationLimit: 120, includeBase64: true},
            (response) => {
              if (onSelect && response.base64) {
                const source = {uri: `data:image/png;base64,${response.base64}`};
                onSelect(source);
              }
            },
          );
        },
      },
      {
        text: getLanguageString(language, 'CANCEL'),
        style: "cancel",
      },
    ], {
      cancelable: true,
    });
  };
  if (image.uri) {
    return (
      <TouchableOpacity
        style={[styles.imageContainer, style]}
        onPress={() => editable && pickImage()}>
        <Image style={[styles.image, imageStyle]} source={image} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={[styles.newImageContainer, style]}
      onPress={() => editable && pickImage()}>
      <MCIcon name="image-plus" color={'#DADADA'} size={32} />
    </TouchableOpacity>
  );
};

export default CustomImagePicker;
