Cenário numero 1: Validação de criação de usuarios


Verificar se a função criarDados no usuarioController está criando um novo usuário com senha e criptografia.



Cenário numero 2: Validação de login

- Testar a função loginUsuario parar garantir que um usuário pode fazer login com credenciais corretas e receber o token jwt.


Cenário numero 3 : Rota de criação de usuario


Enviar uma requisição post para a rota / usuario e verificar se o usuario é criado corretamente no banco de dados



Cenário numero 4 : Rota de busca livros

Verificar se o metodo buscarDados está funcional e se a rota de verbo GET no endpoit /livros esta trazendo todos os livros .


Cenário numero 5: Rota de emprestimo de livros;


Testar a rota de criação de emprestimo de livros, verificando se um emprestimo é criado corretamente e que não é possivel emprestar o mesmo livro duas vezes ao mesmo tempo