CREATE TABLE tbl_item(
itemid VARCHAR2(6), 
itemname VARCHAR2(30) NOT NULL,
itemprice NUMBER NOT NULL,
itemcount NUMBER NOT NULL,
userid VARCHAR(6) NOT NULL,
CONSTRAINT pk_item_itemid PRIMARY KEY(itemid)
)