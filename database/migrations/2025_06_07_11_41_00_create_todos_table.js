import db from '../../config/db.js';

async function up() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        title VARCHAR(155),
        is_checked BOOLEAN DEFAULT FALSE,
        id_colaborador INTEGER NOT NULL,
        finished_at TIMESTAMPTZ DEFAULT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT chave_estrangeira_colaborador
            FOREIGN KEY (id_colaborador)
            REFERENCES colaboradores (id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
    );
  `);
}

async function down() {
  await db.query(`DROP TABLE todos;`);
}

export default { up, down };