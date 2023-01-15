import React, { useEffect, useState } from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import ButtonExampleEmphasis from '../Buttons/buttons';
import './styles.css';

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]




function MainForm (){


    //react states 
   const [errorMessages , setErrorMessages] = useState({});
   const [isSubmitted , setIsSubmitted] = useState(false);

   //js function which generate error code 
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
       <  div className="error">{errorMessages.message}</div>
  );

  const handleSubmit = (event) => {
    // Prevent page reload
    console.log("Form submitted");
    event.preventDefault();
  };




    useEffect(
        () => {
            console.log("ada");
        } , []
    );

    return(
    <Form id="form1" onSubmit={handleSubmit}>
    <Form.Group  widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'

        // error = {
        //     {
        //         pointing : "above",
        //         content : "Can not be Empty",

            

        //     }
        // }        
        required={true}
        type='name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
      <Form.Field 
        control={Select}
        options={genderOptions}
        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
        placeholder='Gender'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Opinion'
      placeholder='Opinion'
    />
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='abc@gmail.com'
    //   error={{
    //     content: 'Please enter a valid email address',
    //     pointing: 'below',
    //   }}
      type='email'
    />
    <Form.Field
      id='form-button-control-public'
      control={ButtonExampleEmphasis}
      
      
    />
  </Form>
);
    
}


 

export default MainForm