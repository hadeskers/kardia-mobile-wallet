/* eslint-disable react-native/no-inline-styles */
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import numeral from 'numeral';
import {ThemeContext} from '../../App';
import Button from '../../components/Button';
import Divider from '../../components/Divider';
import {getTxDetail} from '../../services/transaction';
import {getFromAddressBook, truncate} from '../../utils/string';
import {styles} from './style';
import {format, formatDistanceToNowStrict, isSameDay} from 'date-fns';
import {useRecoilValue} from 'recoil';
import {addressBookAtom} from '../../atoms/addressBook';

const TransactionDetail = () => {
  const theme = useContext(ThemeContext);
  const {params} = useRoute();
  const txHash = params ? (params as any).txHash : '';
  const navigation = useNavigation();

  const addressBook = useRecoilValue(addressBookAtom);
  const [txData, setTxData] = useState<Transaction>();

  useEffect(() => {
    (async () => {
      const data = await getTxDetail(txHash);
      setTxData(data);
    })();
  }, [txHash]);

  const renderStatusIcon = (status?: number) => {
    let iconName, iconColor;

    if (status) {
      iconName = 'check-circle';
      iconColor = theme.successColor;
    } else {
      iconName = 'x-circle';
      iconColor = theme.failColor;
    }

    return (
      <View>
        <Icon name={iconName} size={70} color={iconColor} />
      </View>
    );
  };

  if (!txData) {
    return (
      <View
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        <ActivityIndicator color={theme.textColor} />
      </View>
    );
  }

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={styles.txMeta}>
        {renderStatusIcon(txData?.status)}
        <View style={{justifyContent: 'space-between', paddingTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[{fontSize: 18}, {color: theme.textColor}]}>
              Transaction Hash:{' '}
            </Text>
            <Text
              style={[
                {fontSize: 18, fontWeight: 'bold'},
                {color: theme.textColor},
              ]}>
              {truncate(txHash, 7, 15)}
            </Text>
          </View>
        </View>
      </View>
      <View style={{width: '100%'}}>
        <View style={{width: '100%', paddingHorizontal: 22}}>
          <Text
            style={{color: theme.textColor, fontSize: 18, fontStyle: 'italic'}}>
            Detail
          </Text>
          <Divider />
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.infoTitle, {color: theme.textColor}]}>
            Amount
          </Text>
          <Text style={[styles.infoValue, {color: theme.textColor}]}>
            {numeral(txData?.amount).format('0,0.00')} KAI
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.infoTitle, {color: theme.textColor}]}>
            Transaction fee
          </Text>
          <Text style={[styles.infoValue, {color: theme.textColor}]}>
            {txData.fee} KAI
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.infoTitle, {color: theme.textColor}]}>From</Text>
          <Text style={[styles.infoValue, {color: theme.textColor}]}>
            {truncate(
              getFromAddressBook(addressBook, txData?.from || ''),
              10,
              15,
            )}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.infoTitle, {color: theme.textColor}]}>To</Text>
          <Text style={[styles.infoValue, {color: theme.textColor}]}>
            {truncate(
              getFromAddressBook(addressBook, txData?.to || ''),
              10,
              15,
            )}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.infoTitle, {color: theme.textColor}]}>Date</Text>
          <Text style={[styles.infoValue, {color: theme.textColor}]}>
            {isSameDay(txData.date, new Date())
              ? `${formatDistanceToNowStrict(txData.date)} ago`
              : format(txData.date, 'MMM d yyyy HH:mm')}
          </Text>
        </View>
        <View style={[styles.infoContainer, {marginTop: 15}]}>
          <Button
            title="Go back"
            type="outline"
            block
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </View>
  );
};

export default TransactionDetail;
