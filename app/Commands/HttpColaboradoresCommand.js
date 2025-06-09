import axios from "axios"
import CliTable3 from "cli-table3";

export default {

    name: 'get-colaboradores',
    description: 'Get all colaboradores',

    handle: async function () {

        const data = new URLSearchParams();
        data.append('email', 'user1@example.com');
        data.append('senha', '123456');

        try {
            const response = await axios.post('http://localhost:8080/login', data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            const tokenData = response.data;

            /** Codar */
        } catch (error) {
            console.error('Erro na requisição:', error.response?.data || error.message);
            return;
        }


    }
}