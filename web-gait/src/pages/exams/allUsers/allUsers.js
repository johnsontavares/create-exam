import { useEffect, useState } from 'react';
import './exams.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../../components/sidebar/Sidebar';

export default function AllUsers() {

    const [initialRepositorie, setInitial] = useState([]);
    const [findApi, setFind] = useState([]);
    const [name, setNome] = useState([]);
    useEffect(()=>{
          async function getData(){

            try {
                const response = await fetch('http://localhost:8081/allUsers/')
                //('http://localhost:8081/allExamesCreate/'); 
                const dados = await response.json();
                
                setFind(dados)
                setInitial(dados)
                const nome = findApi.sort(function (findApi,initialRepositorie){
                    if(findApi.name<initialRepositorie.name) return -1;
                    if(findApi.name>initialRepositorie.name) return 1;
                    return 0;
                });
              
                console.log(">>>>>>>>>>>>>>>>>>>",setNome(nome));
            } catch (error) {
                
            }
          }
    getData()
    }, [])

    async function handleChange({target}){
        if(!target.value){
            setFind(initialRepositorie)
            return;
        }
    
        const findFilter = findApi.filter((repo)=>repo.name.includes(target.value))
        setFind(findFilter)
    }
    
    
    return(
        
        <div>
            <Sidebar />

            <form>
            <input type="text" onChange={handleChange}/>
            
            <div >
            <br></br>
            
                <table>
                    <tr>
                        <th>Name</th>
                    </tr>
                   <br></br>
                    {name.map((repo)=>(        
                    <tr key={repo}>
                    <td>{repo.name}</td>
                    <Link to ={`/ViewProfilePatient/${repo.id}`}><button type="reset">View Profile</button></Link>
                    </tr>
                ))}
                </table>
            </div>
            </form>
        </div>
        
    )
}