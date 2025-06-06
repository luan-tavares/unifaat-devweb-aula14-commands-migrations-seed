-- Crair tabela 'projetos'

CREATE TABLE IF NOT EXISTS projetos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(155),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Inserir dados iniciais de projetos

INSERT INTO projetos (nome) VALUES
('PROJETO 1'),
('PROJETO 2'),
('PROJETO 3');