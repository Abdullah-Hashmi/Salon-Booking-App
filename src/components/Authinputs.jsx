import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from './CustomTextInput';
import CustomMainButton from './CustomMainBotton';
import {Colors} from '../GlobalStyles';

const Authinputs = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({name: '', email: '', password: ''});

  const validateInputs = () => {
    let valid = true;
    let nameError = '';
    let emailError = '';
    let passwordError = '';

    if (!name) {
      nameError = 'Name is required';
      valid = false;
    } else if (name.length < 3) {
      nameError = 'Name must be at least 3 characters';
      valid = false;
    } else if (name.length > 20) {
      nameError = 'Name must be less than 20 characters';
      valid = false;
    }

    if (!email) {
      emailError = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = 'Invalid email format';
      valid = false;
    }

    if (!password) {
      passwordError = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      passwordError = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors({name: nameError, email: emailError, password: passwordError});
    return valid;
  };

  const handleSignUp = () => {
    if (validateInputs()) {
      navigation.navigate('HomeScreen');
    }
  };

  return (
    <View>
      <CustomTextInput
        placeholder="Syed Abdullah"
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

      <CustomTextInput
        placeholder="syedd@ab.com"
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      {errors.email ? (
        <Text style={styles.errorText}>{errors.email}</Text>
      ) : null}

      <CustomTextInput
        placeholder="Set a password"
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      {errors.password ? (
        <Text style={styles.errorText}>{errors.password}</Text>
      ) : null}

      <CustomMainButton
        name="Sign Up"
        onPress={handleSignUp}
        color={Colors.Purple_2_Base}
      />
    </View>
  );
};

export default Authinputs;

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
    // marginTop: 1,
    top: -8,
  },
});
