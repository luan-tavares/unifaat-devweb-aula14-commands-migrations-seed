-- Tabela Pivo colaboradores_projetos

CREATE TABLE IF NOT EXISTS colaboradores_projetos (

    id SERIAL PRIMARY KEY,

    id_colaborador INTEGER,
    id_projeto INTEGER,

    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    -- Chave estrangeira para colaboradores
    CONSTRAINT fk_pivo_colaborador
        FOREIGN KEY (id_colaborador)
        REFERENCES colaboradores (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    -- Chave estrangeira para projetos
    CONSTRAINT fk_pivo_projeto
        FOREIGN KEY (id_projeto)
        REFERENCES projetos (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    -- Chave única composta: impede duplicidade colaborador-projeto
    CONSTRAINT uq_colaborador_projeto UNIQUE (id_colaborador, id_projeto)
);

-- Inserir dados iniciais de colaboradores_projetos

INSERT INTO colaboradores_projetos (id_colaborador, id_projeto) VALUES
(1,1),
(1,2),
(1,3),
(2,1),
(2,2),
(2,3),
(3,3),
(4,1),
(4,3),
(5,2),
(6,2),
(6,3);
