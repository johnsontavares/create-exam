import Sidebar from "../../../components/sidebar/Sidebar"

import './profile.css'
import InputMask from 'react-input-mask';

export default function ViewProfile() {



    async function handleChange({ target }) {

    }


    return (




        <div className="pai-div">
            <Sidebar />

            <img className="photo" src="https://i.imgur.com/edOHqOq.png"/>
            <img className="notification" src="https://i.imgur.com/BMMs4AQ.png"/>


            <div className="pesquisa-profile">
                <img src="https://i.imgur.com/WMqNzEw.png" alt="Buscar..." />
                <input type="text" id="txtBuscaprofile" placeholder="Search..." />

            </div>


            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="seta-voltar" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>



            <h1>Nome do Paciente</h1>








            <fieldset className="principal">





                <div className="field">
                    <label htmlFor="gender">CPF: </label>

                    <InputMask mask="999.999.999-99"
                        type="text"
                        name="cpf"
                        id="cpf"
                    //                        value={CPF}
                    //  onChange={e => setCpf(e.target.value)}
                    // onChange={handleInputChange}
                    // required
                    //                  onBlur={cpfonBlur}

                    />
                </div>



                <div className="field">
                    <label htmlFor="birthDate">Birth date: </label>

                    <input
                        type="text"
                        name="birthDate"
                        id="birthDate"
                        //onChange={handleInputChange}
                        required
                    // value={BirthDate}

                    />
                </div>




                <div className="field">
                    <label htmlFor="gender">Weight: </label>

                    <input
                        type="text"
                        name="weight"
                        id="weight"
                        //onChange={handleInputChange}
                        required
                    //  value={Weight}

                    />
                </div>



                <div className="field">
                    <label htmlFor="height">Height: </label>

                    <input
                        type="text"
                        name="height"
                        id="height"
                        //onChange={handleInputChange}
                        required
                    //value={Height}

                    />
                </div>




            </fieldset>






            <main className="principal-secudario">


                <form >



                    <label htmlFor="phone1">Phone 1: </label>
                    <InputMask mask="(99) 99999-9999"
                        type="text" name="phone1" d="phone1"// onChange={handleInputChange}required//value={Phone1} 
                    />
                </form>

                <form>
                    <label htmlFor="phone2">Phone 2: </label>

                    <InputMask mask="(99) 99999-9999"
                        type="text"
                        name="phone2"
                        id="phone2"
                        //onChange={handleInputChange}
                        required
                    // value={Phone2}
                    />
                </form>
            </main>




            <fieldset className="principal-part-tres">

                <img className="imagem-medico " src="https://i.imgur.com/xOVZAIi.png"/>


                <div>
                    <label htmlFor="description">Examination Date:</label>

                    <InputMask mask="99/99/9999"
                        type="text"
                        name="examDate"
                        id="examDate"
                        //onChange={handleInputChange}
                        required
                    />
                </div>

                <div >
                    <label htmlFor="description">Examination Duration:</label>

                    <input
                        type="text"
                        name="examDuration"
                        id="examDuration"
                        //onChange={handleInputChange}
                        width="4800px"
                        required
                    />
                </div>

                <div>
                    <label id="a" htmlFor="description"><p>Medical exam description:</p></label>

                    <input
                        type="text"
                        name="examDescription"
                        id="examDescription"
                        //onChange={handleInputChange}
                        required
                    />
                </div>

             </fieldset>


             <button type="submit">
                    Edit exam
                </button>

                <button type="submit">
                    Cancel exam
                </button>   


        </div>





    )
}