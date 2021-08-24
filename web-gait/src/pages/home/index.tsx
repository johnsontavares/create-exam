import React, { useEffect, useState, ChangeEvent, FormEvent, FocusEvent } from 'react'
import './styles.css'

import Sidebar from '../../components/sidebar/Sidebar';

import { Link, useHistory } from 'react-router-dom'
// import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api';
import InputMask from 'react-input-mask';
import {useParams} from 'react-router-dom';
// import  UserRepository  from '../../../..//Back-end/src/repositorie/useRepositorie'

const CreatePoint = () => {

    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0])

    const [formData, setFormData] = useState({

        examDate: '',
        examDuration: '',
        examDescription: '', 

    })


    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0])
    const [selectedItems, setSelectedItems] = useState<number[]>([])
    const [CPF, setCpf] = useState('');
    const [name, setName] = useState('')
    const [birthDate,setBirthDate] = useState('')
    const [email, setEmail] = useState('')
    const [Phone1, setPhone1] = useState('')
    const [Phone2, setPhone2] = useState('')
    const [Gender, setGender] = useState('')
    const [Weight, setWeight] = useState('')
    const [Height, setHeight] = useState('')


    const history = useHistory()

     function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target

        setFormData({ ...formData, [name]: value })
    }

    const cpfonBlur = (e: FocusEvent<HTMLInputElement>) => {
        const cpfData = e.target.value
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>",cpfData)

        try {
            fetch(`http://localhost:8081/new-user/${cpfData}`)
        
            .then(data => data.json())
            .then(data => {
                console.log(data.name)
                
                setBirthDate(data.birth_date)
                setName(data.name)
                setPhone1(data.phone1)
                setPhone2(data.phone2)
                setGender(data.gender)
                setWeight(data.weight)
                setHeight(data.height)
                setEmail(data.email)
    
            })
        } catch (error) {
            const { data } = error.response;
            alert(data.message);
        }

    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const { 
                examDate,
                examDuration,
                examDescription,
             } = formData;


        const data = {
            name,
            examDate,
            examDuration,
            examDescription,
            CPF,
            Phone1,
            Phone2,
            birthDate,
            Gender,
            Weight,
            Height,
            email

        }

        console.log(data);

        try {
            await api.post("/users", data)
            
            .then(response => {

                console.log(response);
                if(response.status == 200){
                    alert(" Exam Created")
                    history.push('/home')

                }
                
            })
            // .catch(error => {
            //     console.log(error);
            // });

        } catch (error) {

            const { data } = error.response;
            alert(data.message);
        }


        
        
        // alert("Exam Created")

    }

    const idUser = useParams()



    return (
        
        <div id="page-create-point">
            <Sidebar />
            <form onSubmit={handleSubmit}>
                <h1> Examinations</h1><br /> 
                <p>Please, fill in all the informations</p> <br /> <br />
                <p>Obligatory *</p>

                <fieldset>

                    <div className="field">
                        <label htmlFor="cpf">CPF: </label>

                        <InputMask mask="999.999.999-99"
                            type="text"
                            name="cpf"
                            id="cpf"
                            value = {CPF}
                            onChange={e => setCpf(e.target.value)}
                            // onChange={handleInputChange}
                            // required
                            onBlur = {cpfonBlur}

                        />
                    </div>

                    <div className="field">
                        <label htmlFor="title">Patient name: *</label>

                        <input
                            type="text"
                            name="name"
                            id="name"
                            value = {name}

                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="birthDate">Birth date: </label>

                        <input
                            type="text"
                            name="birthDate"
                            id="birthDate"
                            onChange={handleInputChange}
                            required
                            value = {birthDate}

                        />
                    </div>



                    <div className="field">
                        <label htmlFor="phone1">Phone 1: </label>

                        <InputMask mask="(99) 99999-9999"
                            type="text"
                            name="phone1"
                            id="phone1"
                            onChange={handleInputChange}
                            required
                            value= {Phone1}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="phone2">Phone 2: </label>

                        <InputMask mask="(99) 99999-9999"
                            type="text"
                            name="phone2"
                            id="phone2"
                            onChange={handleInputChange}
                            required
                            value= {Phone2}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="gender">Gender: </label>

                        <input
                            type="text"
                            name="gender"
                            id="gender"
                            onChange={handleInputChange}
                            required
                            value= {Gender}

                        />
                    </div>

                    <div className="field">
                        <label htmlFor="gender">Weight: </label>

                        <input
                            type="text"
                            name="weight"
                            id="weight"
                            onChange={handleInputChange}
                            required
                            value= {Weight}

                        />
                    </div>



                    <div className="field">
                        <label htmlFor="height">Height: </label>

                        <input
                            type="text"
                            name="height"
                            id="height"
                            onChange={handleInputChange}
                            required
                            value= {Height}

                        />
                    </div>

                    <div className="field">
                        <label htmlFor="email">E-mail: </label>

                        <input
                            type="text"
                            name="email"
                            id="email"
                            value = {email}
                            onChange={handleInputChange}
                            required

                        />
                    </div>

                    <div className="field">
                        <label htmlFor="description">Examination Date: *</label>

                        <InputMask mask="99/99/9999"
                            type="text"
                            name="examDate"
                            id="examDate"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="field">

                        <label htmlFor="description">Examination Duration: * </label>

                    <select id="container">
                        <option value="0 min"></option>
                        <option value="5 min">5 min</option>
                        <option value="10 min">10 min</option>
                    </select>

                    {/* <select>
                        <option value="laranja">Laranja</option>
                        <option value="limao">Limão</option>
                        <option selected value="coco">Coco</option>
                        <option value="manga">Manga</option>
                    </select> */}
                    
                    </div>

                    <div className="field">
                        <label htmlFor="description">Medical exam description: *</label>

                        <input
                            type="text"
                            name="examDescription"
                            id="examDescription"
                            onChange={handleInputChange}
                            required
                        />
                    </div>


                </fieldset>

                <button type="submit">
                    Forward exam
                </button>

            </form>

        </div>
    )

}

export default CreatePoint;