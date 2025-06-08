<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <h1>📚 Projeto BDD API Axios Chai Testing<br>
    <small>JavaScript + Cucumber.js + Axios + Chai</small>
  </h1>
  <p>
    <span class="emoji">🧪</span>
    Este projeto executa <strong>testes automatizados em APIs REST</strong> utilizando as tecnologias <b>JavaScript</b>, <b>Cucumber.js</b>, <b>Axios</b> e <b>Chai</b>.<br>
    <span class="emoji">🔎</span>
    Ideal para validar, documentar e garantir a qualidade dos seus endpoints!
  </p>

<h2 id="tecnologias">🖥️ Tecnologias Utilizadas</h2>
  <ul>
    <li><span class="emoji">🟦</span> <b>JavaScript (Node.js)</b> &mdash; Linguagem de programação base</li>
    <li><span class="emoji">🍀</span> <b>Cucumber.js</b> &mdash; Framework BDD para cenários em linguagem natural (Gherkin)</li>
    <li><span class="emoji">🔗</span> <b>Axios</b> &mdash; Cliente HTTP para requisições rápidas e práticas</li>
    <li><span class="emoji">✅</span> <b>Chai</b> &mdash; Biblioteca de asserções para validação de respostas</li>
    <li><span class="emoji">💬</span> <b>dotenv</b> &mdash; Gerenciamento de variáveis de ambiente (opcional)</li>
  </ul>

<h2 id="estrutura">📁 Estrutura do Projeto</h2>
  <p>Organização padrão para facilitar a manutenção e entendimento:</p>
  <pre><code>
├── package.json
├── tests/
│   ├── features/    # 📄 Cenários (arquivos .feature) escritos em Gherkin
│   └── steps/       # 🛠️ Definições dos passos em JavaScript
  </code></pre>

<h3>📦 Principais Comandos (package.json)</h3>
  <p>Utilize os scripts abaixo para rodar e depurar seus testes:</p>
  <pre><code>{
  "scripts": {
    "test": "cucumber-js tests/features/ --require tests/steps/",
    "test:parallel2": "cucumber-js tests/features/ --require tests/steps/ --parallel 2",
    "test:tag": "cucumber-js tests/features/ --require tests/steps/ --tags '@Login'"
  }
}</code></pre>

<h2 id="executando-os-testes">▶️ Executando os Testes</h2>
Instale as dependências:

   ```bash
     npm install
   ```

Execute todos os testes:

   ```bash
     npm test
   ```

Testes paralelos:

   ```bash
     npm run test:parallel2
     npm run test:parallel3
     npm run test:parallel4
   ```

Filtre por tags:

   ```bash
     npm run test:tag
   ```

  <p>
    <span class="emoji">💡</span>
    Você pode criar outros comandos personalizados no <b>package.json</b> conforme sua necessidade!
  </p>

<h2 id="exemplo-de-cenario">📝 Exemplo de Cenário Gherkin</h2>
  <p>
    <span class="emoji">🔖</span> Utilize Gherkin (linguagem natural) para criar cenários descritivos:<br>
    <small>Adapte as URLs, parâmetros, bodies e validações para a sua própria API!</small>
  </p>
  <pre class="gherk"><code>@api
Feature: API Pública - Produtos

@get
Scenario: Recuperar todos os produtos e validar um item específico por ID
Given the base URL is "http://sua-api-publica.com"
And I set the request headers:
| Content-Type | application/json |
When I send a "GET" request to "/api/v1/products"
Then the response status code should be 200
Then the item with "id" equal to "1" should have the field "name" with value "Nome do Produto"

@get @filtro
Scenario: Buscar produtos filtrando por marca
Given the base URL is "http://sua-api-publica.com"
And I set the request query parameters:
| brand | minha-marca |
| product_type | meu-tipo |
And I set the request headers:
| Content-Type | application/json |
When I send a "GET" request to "/api/v1/products"
Then the response status code should be 200
</code></pre>

<h2 id="personalizacao">💡 Personalização &amp; Dicas</h2>
  <ul>
    <li><span class="emoji">🪄</span> <b>Expanda facilmente:</b> Basta criar novos arquivos <code>.feature</code> e definir/alterar Steps JavaScript conforme o endpoint/método usado.</li>
    <li><span class="emoji">👀</span> <b>Debug completo:</b> Todas as requisições e respostas são detalhadas no console para facilitar o troubleshooting e ajuste de casos de teste.</li>
    <li><span class="emoji">🔁</span> <b>Reutilize Steps:</b> Os passos implementados são pensados para uso genérico em diferentes endpoints HTTP.</li>
    <li><span class="emoji">📝</span> <b>Novo endpoint? Novo teste!</b> Configure headers, query params, body e validações conforme desejo direto no Gherkin.</li>
    <li><span class="emoji">🤝</span> <b>Colabore:</b> Documentação clara e legível para a equipe e comunidade acelerar o ciclo de qualidade!</li>
  </ul>
  <p>
    <span class="emoji">⚠️</span> <b>Exemplo de Step para requisições POST:</b>
  </p>
  <pre class="gherk"><code>
When I send a "POST" request to "/api/v1/users"
And I set the request body with fields:
  | name | Seu Nome      |
  | job  | Seu Cargo     |
  </code></pre>

  <hr>


<h2>🪪 Licença</h2>
<p>
Distribuído sob a licença MIT. Veja o arquivo <code>LICENSE</code> para mais informações.
</p>
 <hr>
  <p>
    <span class="emoji">🎯</span>
    <strong>Automatize a validação de APIs com clareza, agilidade e colaboração usando JavaScript, Cucumber.js, Axios e Chai!</strong><br>
    <span class="emoji">🌐</span> Adapte como quiser neste template para qualquer cenário de API REST.
  </p>
</body>
</html>
