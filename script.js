document.addEventListener('DOMContentLoaded', function() {
    const mensagemBtn = document.getElementById('mensagemBtn');
    const mensagemEl = document.getElementById('mensagem');

    mensagemBtn.addEventListener('click', function() {
        mensagemEl.textContent = 'Olá! Seja bem-vindo(a) à minha página pessoal. O sucesso é a soma de pequenos esforços repetidos dia após dia!';
    });
});