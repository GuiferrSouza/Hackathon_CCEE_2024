const axios = require('axios');

class CCE_API {
  static async GetMigrate(req, res) {
    try{
      const URL = "https://am-api.ccee.org.br/hackathon/migracoes?codigoUnidadeConsumidora=<string>&codigoConectado=<string>&codigoVarejista=<string>&id=<string>"
      const DATA = GetData(URL)
      res.status(200).send(DATA) 
    }catch(err){
      console.log(err)
      res.status(500)
    }
   
  }
}

async function GetData(URL){
  try {
    const response = await axios.get(URL);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao consumir a API:', error);
    res.status(500).json({ error: 'Erro ao consumir a API' });
  }
}

async function PostData(link){
  try {
    const response = await axios.post(link);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao consumir a API:', error);
    res.status(500).json({ error: 'Erro ao consumir a API' });
  }
}

module.exports = CCE_API;