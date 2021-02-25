import s from './SendMessage.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const maxLength300 = maxLength(300);

const SendMessage = (props) => {
    return(
            <form onSubmit={props.handleSubmit} className={s.sendBlock}>
                <div className={s.textarea}>
                    <Field 
                        placeholder='Enter your message' 
                        type= 'text'
                        component={Textarea} 
                        name='message'
                        validate={[required, maxLength300]}
                    />
                </div>
                <button className={s.btn}><span>Send</span></button>
            </form>
    );
}


export default reduxForm({form: 'dialogAddMessageForm'})(SendMessage);