const axios = require('axios'); // Adicionando a importação do axios

class CCE_API {

  static async GetMigrate(req,res) { // teste do gpt 
    try {
      const response = await axios.get('api da cce');
      res.json(response.data);
    } catch (error) {
      console.error('Erro ao consumir a API:', error);
      res.status(500).json({ error: 'Erro ao consumir a API' });
    }
  }
}

module.exports = CCE_API;