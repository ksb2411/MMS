CREATE TABLE tbl_attach(
id NUMBER,
filename VARCHAR2(150) NOT NULL,
bno NUMBER,
regdate DATE DEFAULT SYSDATE,
CONSTRAINT pK_attach_id PRIMARY KEY(id),
CONSTRAINT fk_attach_bno FOREIGN KEY(bno) REFERENCES tbl_board(bno) ON DELETE CASCADE
)


DROP TABLE tbl_attach

CREATE SEQUENCE seq_attach_id

SELECT * FROM tbl_attach