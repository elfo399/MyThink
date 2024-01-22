use think;

CREATE TABLE think.`text` (
	id int auto_increment NOT NULL,
	Value varchar(255) NOT NULL,
	`Data` DATE NOT NULL,
	CONSTRAINT text_pk PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
