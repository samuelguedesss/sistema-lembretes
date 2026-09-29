CREATE TABLE usuarios (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  nome       VARCHAR(120)  NOT NULL,
  email      VARCHAR(160)  NOT NULL UNIQUE,
  senha      CHAR(60)      NOT NULL,
  role       VARCHAR(20)   NOT NULL DEFAULT 'user',
  created_at TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
                           ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE lembretes (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id  INT           NOT NULL,
  titulo      VARCHAR(160)  NOT NULL,
  descricao   TEXT          NULL,
  data_evento DATETIME      NOT NULL,
  tipo        VARCHAR(40)   NOT NULL,
  created_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
                            ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_lembretes_usuario
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    ON DELETE CASCADE,

  INDEX idx_lembretes_usuario (usuario_id)
);

CREATE TABLE avisos (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  lembrete_id INT        NOT NULL,
  dias_antes  INT        NOT NULL,
  disparar_em DATETIME   NOT NULL,
  canal       VARCHAR(20) NOT NULL DEFAULT 'email',
  status      ENUM('pendente','enviado','falhou') NOT NULL DEFAULT 'pendente',
  created_at  TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP
                         ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_avisos_lembrete
    FOREIGN KEY (lembrete_id) REFERENCES lembretes(id)
    ON DELETE CASCADE,

  INDEX idx_avisos_worker (status, disparar_em)
);