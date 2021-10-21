create database desenvolvimento_web_2;

create table desenvolvimento_web_2.produto(
id int(11) not null auto_increment,
descricao varchar(50) null default null,
estoque_minimo int(11) null default null,
estoque_maximo int(11) null default null,
primary key (id)
);

create table desenvolvimento_web_2.usuario(
id int(11) not null auto_increment,
nome varchar(50) null default null,
senha varchar(50) null default null,
primary key(id)
);

insert into desenvolvimento_web_2.usuario(nome, senha) values ('Alvo', 'armadadumblodore');
insert into desenvolvimento_web_2.usuario(nome, senha) values ('Harry', 'observatoriopotter');

select * from desenvolvimento_web_2.usuario;

update desenvolvimento_web_2.usuario set nome="Percival" where id=1;
update desenvolvimento_web_2.usuario set nome="Potter" where id=2;

delete from desenvolvimento_web_2.usuario where id=1;

