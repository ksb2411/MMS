CREATE TABLE tbl_reply(
rno NUMBER,
bno NUMBER,
replyer VARCHAR2(15),
reply VARCHAR2(1000),
regdate DATE DEFAULT SYSDATE,
updatedate DATE DEFAULT SYSDATE,
CONSTRAINT pk_reply_rno PRIMARY KEY(rno),
CONSTRAINT fk_reply_bno FOREIGN KEY(bno) REFERENCES tbl_board(bno) ON DELETE CASCADE
)

DROP TABLE tbl_reply



CREATE SEQUENCE seq_reply_rno

SELECT * FROM tbl_reply