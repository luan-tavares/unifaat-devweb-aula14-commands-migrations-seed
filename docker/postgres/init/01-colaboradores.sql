CREATE TABLE IF NOT EXISTS colaboradores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(155),
    esta_ativo BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO colaboradores (nome, esta_ativo) VALUES
('João da Silva', TRUE),
('Maria Oliveira', FALSE),
('Pedro Santos', TRUE),
('Ana Paula Souza', TRUE),
('Carlos Eduardo', FALSE),
('Juliana Rocha', TRUE);