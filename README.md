### Template Angular: Descrição e Funcionalidades

Este documento descreve um template desenvolvido em Angular que abrange funcionalidades fundamentais para a construção de aplicações robustas e escaláveis. Abaixo estão os tópicos principais abordados no template:

---

### **Autenticação**
O template implementa autenticação baseada em token (JWT), com suporte para:
- Login e logout do usuário.
- Armazenamento seguro do token (localStorage ou sessionStorage).
- Verificação automática do token e tratamento de sessão expirada.

### **Decodificação do Token**
Para gerenciar informações de autenticação, o token JWT é decodificado para extrair:
- Identidade do usuário (e.g., `userId`, `username`).
- Permissões e roles (e.g., `admin`, `user`).
- Validade do token (e.g., `exp`).

A biblioteca **jwt-decode** é usada para esse processo, com integração fluida para Angular Services.

### **Roteamento dos Componentes**
O sistema de roteamento é configurado com:
- **Rotas protegidas:** Componentes acessíveis somente após autenticação.
- **Lazy Loading:** Carregamento otimizado de módulos para melhorar o desempenho da aplicação.
- **Rotas dinâmicas:** Configuração baseada em roles extraídas do token JWT.

### **Auth Guards**
O template utiliza Guards para garantir o acesso às rotas:
- `AuthGuard`: Verifica se o usuário está autenticado.
- `RoleGuard`: Valida as permissões do usuário para acessar determinadas rotas.
- `DeactivateGuard`: Garante que o usuário não perca dados ao sair de formulários não salvos.

### **Componentes Base**

#### **Componente de Tabelas**
- Implementado para exibir dados tabulares com suporte a:
  - Ordenação.
  - Filtros.
  - Colunas configuráveis.
- Utiliza **Angular Material Table** para funcionalidades avançadas.

#### **Paginação**
- Sistema de paginação integrado com tabelas e listas.
- Configuração customizável para tamanho de página e navegação.
- Compatível com APIs que suportam paginação backend.

### **Bibliotecas de Estilização**

#### **Tailwind CSS**
- Framework utilizado para personalização de estilos.
- Design responsivo e integração rápida com classes utilitárias.
- Extensões SCSS configuradas para customização adicional.

#### **Angular Material**
- Componentes prontos para uso, como botões, inputs e diálogos.
- Tema customizado para atender ao branding do projeto.
- Integração com os recursos de tabelas e formulários.

---

### **Outros Recursos Adicionais**
- **Configuração de ambientes** para facilitar deploys em diferentes estágios (e.g., dev, staging, production).
- **Serviços reutilizáveis** para operações CRUD.
- **Diretivas customizadas** para melhorar a experiência do usuário.

Este template serve como base sólida para projetos Angular modernos, promovendo produtividade e escalabilidade.
