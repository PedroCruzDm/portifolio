window.onload = () => {

    // Exibe o dia da semana atual no console
    const Dia_Informar = () => {
        const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
        const dia_semana = new Date().getDay();
        console.log(diasSemana[dia_semana]);
    }

    Dia_Informar();
};