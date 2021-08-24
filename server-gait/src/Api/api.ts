var axios = require('axios');


class ApiCrm {

    public static async getName(name: string) {
        const result = (await axios.get(`https://www.consultacrm.com.br/api/index.php?tipo=crm&uf=am&q=${name}&chave=2798018964&destino=json`)).data;
        
      
        
        var situacao;
        var text = JSON.stringify(result);
       
        var obj = JSON.parse(text, function (key, value) {
            if (key === 'situacao') {
                situacao = value;
            }
        });
        return situacao;
    }
    
}
export default ApiCrm;

