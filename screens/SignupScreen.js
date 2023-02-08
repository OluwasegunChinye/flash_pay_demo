import { View, Text, SafeAreaView, Dimensions } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import InputApp from '../components/InputApp';
import Btn from '../components/Btn';
import Icons from '../components/Icons';

const { height, width } = Dimensions.get('screen');

const SignupSchema = Yup.object().shape({
    userId: Yup.string()
        .min(5, 'Too short!')
        .max(25, 'Too long!')
        .required('Enter a valid user-id'),

    account: Yup.string()
        .min(11, 'Must be exactly 11 digits')
        .max(11, 'Must be exactly 11 digits')
        .matches(/^[0-9]+$/, 'Must be only digits')
        .required('required'),

    password: Yup.string()
        .min(8)
        .required('Please enter your password')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
            ' Must contain minimum 8 characters, at least a letter and a number'
        ),
    confirmPassword: Yup.string()
        .min(8, 'Must be 8 characters long')
        .oneOf([Yup.ref('password')], 'Your password dont match')
        .required('Confirm password is required'),
});

const SignupScreen = ({ navigation }) => {
    return (
        <Formik
            initialValues={{
                userId: '',
                account: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={SignupSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                setFieldTouched,
                isValid,
                handleSubmit,
            }) => (
                <SafeAreaView className="flex-1  bg-white">
                    <View style={{ margin: width * 0.08 }}>
                        <View className="mt-20">
                            <Text className="font-[clash-medium] text-xl mb-2 text-dark">
                                Sign Up
                            </Text>
                            <Text className="font-[clash] text-dark">
                                Sign up to your account and enjoy the best{' '}
                            </Text>
                            <Text className="font-[clash] text-dark">
                                banking experience
                            </Text>
                        </View>

                        <View className="mt-8">
                            <InputApp
                                placeholder="User ID"
                                value={values.userId}
                                onChangeText={handleChange('userId')}
                                onBlur={() => setFieldTouched('userId')}
                            />
                            {touched.userId && errors.userId && (
                                <Text className="font-[clash] text-xs text-danger">
                                    {errors.userId}
                                </Text>
                            )}
                        </View>
                        <View className="mt-8">
                            <InputApp
                                placeholder="Account Number"
                                keyboardType="phone-pad"
                                value={values.account}
                                onChangeText={handleChange('account')}
                                onBlur={() => setFieldTouched('account')}
                            />
                            {touched.account && errors.account && (
                                <Text className="font-[clash] text-xs text-danger">
                                    {errors.account}
                                </Text>
                            )}
                        </View>
                        <View className="mt-8">
                            <InputApp
                                placeholder="Password"
                                secureTextEntry
                                autoCapitalize={false}
                                onBlur={() => setFieldTouched('password')}
                                value={values.password}
                                onChangeText={handleChange('password')}
                            />
                            {touched.password && errors.password && (
                                <Text className="font-[clash] text-xs text-danger">
                                    {errors.password}
                                </Text>
                            )}
                        </View>
                        <View className="mt-8">
                            <InputApp
                                placeholder="Confirm Password"
                                autoCapitalize={false}
                                secureTextEntry
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={() =>
                                    setFieldTouched('confirmPassword')
                                }
                            />
                            {touched.confirmPassword &&
                                errors.confirmPassword && (
                                    <Text className="font-[clash] text-xs text-danger">
                                        {errors.confirmPassword}
                                    </Text>
                                )}
                        </View>
                    </View>

                    <View className=" items-center mt-5">
                        <Btn
                            title="Sign Up"
                            onPress={() => navigation.replace('HomeTab')}
                        />
                    </View>

                    <View className="items-center mt-10">
                        <Icons name="finger-print" color="#160093" size={100} />
                    </View>
                    <View className="items-center">
                        <Text className="text-[clash] text-dark mt-10">
                            Add Fingerprint
                        </Text>
                    </View>
                </SafeAreaView>
            )}
        </Formik>
    );
};

export default SignupScreen;
