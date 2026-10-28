// SDK EXPO SQLITE
import * as SQLite from 'expo-sqlite';

//=========================================

async function Banco() {
    try {
        //-- CRIAR O BANCO CASO NÃO EXISTA
        const db = await SQLite.openDatabaseAsync('pam2_2025');
        console.log('Banco Aberto');
        return db
    }
    catch (error) {
        console.log(error);
    }
}


//=========================================

//CRIAR UMA TABELA 

async function createTable(db:SQLite.SQLiteDatabase) {
    try{
        await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXIST USUARIO(
                ID_US INTERGER PRIMARY KEY AUTOINCREMENT,
                NOME_US VARCHAR(100),
                EMAIL_US VARCHAR(100),
            );

            console.log('Tabela Usuário Criado!')

            `)
    } catch(error){
        console.log('Erro ao criar tabela', error);
    }
}

//exporta as funções
export {Banco, createTable};
