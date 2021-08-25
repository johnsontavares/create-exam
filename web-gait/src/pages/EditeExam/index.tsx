import React, { useEffect, useState, ChangeEvent, FormEvent, FocusEvent } from 'react'
import './styles.css'
import Sidebar from '../../components/sidebar/Sidebar';
import Api from '../../services/api';

import { Link, useHistory } from 'react-router-dom'
import InputMask from 'react-input-mask';
import {useParams} from 'react-router-dom';

const EditExam = () => {

    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0])
    const [Description, setDescription] =  useState('');
    const [Duration, setDuration] =  useState('');
    const [Date, setDate] =  useState('');

    const { idExam } = useParams<any>();

    const history = useHistory()

     const Data = {
        examDate: Date,
        examDuration: Duration,
        examDescription: Description
    }

console.log(idExam)

    
try{

    useEffect(()=> {
      async function getExamData() {
        var response =  await Api.get(`findExamId/${idExam}`)

        setDescription(response.data.examDescription)
        setDate(response.data.examDate)
        setDuration(response.data.examDuration)

        console.log(`exam: ${response.data.examDescription}`)

        }
        getExamData()
    },[])

    } catch(error){
        const { data } = error.response;
        alert(data.message);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        const Data = {
            examDate: Date,
            examDuration: Duration,
            examDescription: Description
        }

        const config = {
            headers:{
                Authorization:localStorage.getItem('token')
        }
    }

    try{

        const response = await Api.put(`updateExam/${idExam}`, Data, config)
        if(response.status == 200){
          alert('Profile edited successfully');

        }else{
            alert('Error updating user!')
        }

    }catch(error){
        const { data } = error.response;
        alert(data.message)
    }

     }


    return (
        
        <div id="page-Edit-Exam">
            <Sidebar />
            <form onSubmit={handleSubmit}>
                <h1> Examinations</h1>
                <p>Please, fill in all the informations</p><br/>
                <p id='obligatory'>Obligatory *</p>

                <fieldset>

                    <div className="field">
                        <label htmlFor="description">Examination Date: * </label>

                        <InputMask mask="99/99/9999"
                            type="text"
                            name="examDate"
                            id="examDate"
                            onChange = {e => setDate(e.target.value)}
                            value= {Date}
                            required
                        />
                    </div>

                    <div className="field">

                    <label htmlFor="description">Examination Duration: * </label>

                        <select id="container"
                        onChange = {e => setDuration(e.target.value)}
                        value = {Duration}
                        >
                            <option value="0 min"></option>
                            <option value="5 min">5 min</option>
                            <option value="10 min">10 min</option>
                        </select>

                    </div>

                    <div className="field">
                        <label htmlFor="description">Medical exam description: * </label>

                        <textarea
                            onChange = {e => setDescription(e.target.value)}
                            value={Description}
                            
                            name="examDescription"
                            id="examDescription"
                            required />


                    </div>


                </fieldset>

                <button type="submit">
                    Forwand exam
                </button>


            </form>

        </div>
    )

}

export default EditExam;