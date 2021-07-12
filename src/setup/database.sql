CREATE DATABASE budget;

CREATE TABLE expense (
  expense_id serial primary key,
  expense_name varchar(128) not null,
  expense_cost int not null,
  expense_date timestamp default current_timestamp
);

INSERT INTO expense (expense_name, expense_cost) VAlUES ('Yo''l kira uchun', 100);
INSERT INTO expense (expense_name, expense_cost) VAlUES ('Kurs', 100);
INSERT INTO expense (expense_name, expense_cost) VAlUES ('Kvartiea', 250);
INSERT INTO expense (expense_name, expense_cost) VAlUES ('Kiyim', 140);

CREATE TABLE income (
  income_id serial primary key,
  income_name varchar(128) not null,
  income_cost int not null,
  income_date timestamp default current_timestamp
);
INSERT INTO income (income_name, income_cost) VAlUES ('Oylik', 1000);
INSERT INTO income (income_name, income_cost) VAlUES ('Biznes', 750);
INSERT INTO income (income_name, income_cost) VAlUES ('Tijorat', 1200);


SELECT 
  expense_id,
  expense_name,
  expense_cost, 
  TO_CHAR(expense_date, 'yyyy-MM-dd HH24:MI:SS') as expense_date
FROM expense;

SELECT 
  income_id,
  income_name,
  income_cost, 
  TO_CHAR(income_date, 'yyyy-MM-dd HH24:MI:SS') as income_date
FROM income;


SELECT 
  sum(income_cost) 
FROM income;