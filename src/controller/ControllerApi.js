const axios = require('axios'); // Adicionando a importação do axios

class CCE_API {
  static async GetMigrate(req, res) { // teste do gpt 
    
  }
}

async function GetData(link){
  try {
    const response = await axios.get(link);
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao consumir a API:', error);
    res.status(500).json({ error: 'Erro ao consumir a API' });
  }
}

async function PostData(link){
  try {
    const response = await axios.post(link);
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao consumir a API:', error);
    res.status(500).json({ error: 'Erro ao consumir a API' });
  }
}

module.exports = CCE_API;