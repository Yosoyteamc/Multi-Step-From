import React, { useContext } from 'react';
import { Formik , Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import SubscriptionContext from '../../../context/SubcriptionContext';

const validationSchema = Yup.object().shape(
    {
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        phone: Yup.string().required('Phone is required').min(10, 'Phone too short')
    }
);


const FormSubscription = () => {

    const { setSubscriptionInfo } = useContext(SubscriptionContext);
    const navigate = useNavigate();

    const initialValues = {
        name: '',
        email: '',
        phone: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(fields, actions) => { 
                actions.setSubmitting(false);
                actions.resetForm();
                setSubscriptionInfo(fields)
                navigate('/Multi-Step-From/subscription/plans');
                }
            }
        >
            {({errors, touched}) => (
                <Form className='form-register' id='form-subscription'>
                    <div className='form-register-labels'>
                        <label className='form-register__label' htmlFor="name">Name</label>
                        {
                            errors.name && touched.name && 
                            (
                                <ErrorMessage className='form-register__label--error' name='name' component="span"></ErrorMessage>
                            )
                        }
                    </div>
                    <Field className={`form-register__input ${errors.name && touched.name? 'form-register__input--error': undefined}`} type="text" id="name" name="name" placeholder="e:g. Stephen king"/>

                    <div className='form-register-labels'>
                        <label className='form-register__label' htmlFor="email">Email Adress</label>
                        {
                            errors.email && touched.email &&
                            (  
                                <ErrorMessage className='form-register__label--error' name='email' component="span"></ErrorMessage>
                            )
                        }
                    </div>
                    <Field className={`form-register__input ${errors.email && touched.email? 'form-register__input--error': undefined}`} type="email" id="email" name="email" placeholder="e:g. stephenking@lorem.com"/>

                    <div className='form-register-labels'>
                        <label className='form-register__label' htmlFor="phone">Phone Number</label>
                        {
                            errors.phone && touched.phone &&
                            (
                                <ErrorMessage className='form-register__label--error' name='phone' component="span"></ErrorMessage>
                            )
                        }
                    </div>
                    <Field className={`form-register__input ${errors.phone && touched.phone? 'form-register__input--error': undefined}`} type="tel" id="phone" name="phone" placeholder="e:g. +1 234 567 890"/>
                </Form>
            )}
        </Formik>
    );
}

export default FormSubscription;
