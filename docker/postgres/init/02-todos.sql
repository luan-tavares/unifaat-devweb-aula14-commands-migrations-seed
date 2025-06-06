CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(155),
    is_checked BOOLEAN DEFAULT FALSE,
    id_colaborador INTEGER,
    finished_at TIMESTAMPTZ DEFAULT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chave_estrangeira_colaborador
        FOREIGN KEY (id_colaborador)
        REFERENCES colaboradores (id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

INSERT INTO todos (title, id_colaborador) VALUES
('Revisar proposta de orçamento', 1),
('Enviar relatório semanal', 1),
('Atualizar perfil no sistema', 2),
('Agendar reunião com cliente', 2),
('Organizar arquivos da equipe', 2),
('Registrar feedback do cliente', 3),
('Cadastrar nova tarefa no CRM', 4),
('Atualizar metas trimestrais', 5);
