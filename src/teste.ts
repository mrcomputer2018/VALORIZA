interface Usuario {
    nome: string, 
    email: string, 
    telefone: string //  telefone?: string - torna o parametro opcional
}

function enviarEmail(nome: string, email: string, telefone: string){
    console.log(`Ola ${nome} enviar email ${email} telefone ${telefone}`);
}

// Usando interface
function enviarEmailDeOutraForma({nome, email, telefone}: Usuario){
    console.log(`Ola ${nome} enviar email ${email} telefone ${telefone}`);
}

enviarEmail("marcelo", "marcelo@gmail.com", "11111111");

enviarEmailDeOutraForma({
    nome: "marcelo",
    email: "marcelo@gmail.com",
    telefone: "11111111",
})