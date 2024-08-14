Cenário 1: Validação de criação de usuário

Verificar se a função criarDados no usuarioController está criando um novo usuário com senha criptografada.



Cenário 2: Validação de login

Testar a função loginUsuario para garantir que um usuário pode fazer login com credenciais corretas e receber um token JWT.
2. Testes de Integração
Esses testes envolvem a aplicação como um todo, interagindo com o banco de dados e verificando o comportamento das rotas.

Cenário 3: Rota de criação de usuário

Enviar uma requisição POST para a rota /usuario e verificar se o usuário é criado corretamente no banco de dados.



Cenário 4: Rota de busca de livros

Enviar uma requisição GET para a rota /livros e verificar se todos os livros são retornados corretamente.



Cenário 5: Rota de empréstimo de livro

Testar a rota de criação de empréstimo, verificando se um empréstimo é criado corretamente e que não é possível emprestar o mesmo livro duas vezes ao mesmo tempo.