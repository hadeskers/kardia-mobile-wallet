import React, { useState } from 'react'
import { View, Text } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
import TextInput from '../../components/TextInput'
import Modal from '../../components/Modal';
import {styles} from './style'
import { truncate } from '../../utils/string';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { getWalletFromPK } from '../../utils/blockchain';
import { useRecoilState } from 'recoil';
import { walletsAtom } from '../../atoms/wallets';
import { saveWallets } from '../../utils/local';

const ImportPrivateKey = () => {
    const navigation = useNavigation()
    const [privateKey, setPrivateKey] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [wallets, setWallets] = useRecoilState(walletsAtom)

    const onSuccess = (e: any) => {
        setPrivateKey(e.data)
        setShowModal(false)
    }

    const importPK = () => {
        const wallet = getWalletFromPK(privateKey)
        const walletObj: Wallet = {
            address: wallet.getAddressString(),
            privateKey: wallet.getPrivateKeyString(),
            balance: 0
        }

        const newWallets = JSON.parse(JSON.stringify(wallets))
        newWallets.push(walletObj)

        setWallets(newWallets)
        saveWallets(newWallets)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter your Private key</Text>
            <TextInput value={truncate(privateKey, 10, 20)} onChangeText={setPrivateKey} iconName='qrcode' onIconPress={() => setShowModal(true)} />
            {
                showModal &&
                <Modal showCloseButton={false} visible={true} onClose={() => setShowModal(false)}>
                    <Text>Scan QR Code for Private key</Text>
                    <QRCodeScanner
                        onRead={onSuccess}
                    />
                </Modal>
            }
            <View style={styles.buttonGroup}>
                <Button size="large" type="primary" onPress={importPK} title="Import" />
                <Button size="large" type="secondary" onPress={() => navigation.goBack()} title="Cancel" />
            </View>
        </View>
    )
}

export default ImportPrivateKey