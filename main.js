//  (c) Aiyegbayo Bolaji 08/10/2021
const configuration = require('./config'),
mysql = require('mysql2'),
express = require('express')

//  Database/Storage Manager
class Storage{

    constructor() {}

    //  returns an active database connection.
    open () {
        let SQLconnection = mysql.createConnection(configuration.config.auth)
        return SQLconnection
    }
    // closes database connection
    close( SQLconnection) {
        SQLconnection.end()
        return SQLconnection
    }
    //  database operations
    database( args){
        switch (args.action) {
            //  check to see if the database exist
            case "exist":
                args.query( `select schema_name from information_schema.schemata where schema_name = '${database}'`, ( err, rlt) => {})
                break;
            //  delete database
            case "delete":
                args.query( `DROP DATABASE ${databasename}`, ( err, rlt) => {})
                break;
            //  show total number of databases
            case "count":
                args.query( `show databases`, ( err, rlt) => {})
                break;
            // change database
            case "change":
                args.query( `USE ${database}`, ( err, rlt) => {})
                break;
            //  create database 
            default:
                args.args( `CREATE DATABASE ${databasename}`, ( err, rlt) => {})
                break;
        }
    }
    //  table operations
    table( args){
        switch (args.key) {
            //  alter table
            case "alter":
                args.query( `ALTER TABLE ${table} ${column}`, ( err, rlt) => {})
                break;
            //  describe table
            case "describe":
                return new Promise( ( ok, rjt) => {
                    args.auth.query( `DESC ${table}`, ( _err, _res) =>{
                        if( _err) rjt(_err)
                        ok(_res)
                        break
                    })
                })
            //  delete table
            case "drop":
                return new Promise( ( ok, rjt) => {
                    args.auth.query( `DROP TABLE ${table}`, ( _err, _res) =>{
                        if( _err) rjt(_err)
                        ok(_res)
                        break
                    })
                })
            // empty table details only, table remains just empty and retains structure
            case "truncate":
                return new Promise( ( ok, rjt) => {
                    args.auth.query( `TRUNCATE ${table}`, ( _err, _res) =>{
                        if( _err) rjt(_err)
                        ok(_res)
                        break
                    })
                })
            // select specified content[ with options] of a table with an open SQL con 
            case "select":
                return new Promise( ( ok, rjt) => {
                    args.auth.query( `SELECT ${niddle} FROM ${table}`, ( _err, _res) =>{
                        if( _err) rjt(_err)
                        ok(_res)
                        break
                    })
                })
            //show total number of tables
            case "count":
                return new Promise( ( ok, rjt) => {
                    args.auth.query( `SHOW tables`, ( _err, _res) =>{
                        if( _err) rjt(_err)
                        ok(_res)
                        break
                    })
                })
            //  insert into
            case "insert":
                return new Promise( ( ok, rjt) => {
                    crud.auth.query( `INSERT INTO ${table}`, ( _err, _res) =>{
                        if( _err) rjt(_err)
                        ok(_res)
                        break
                    })
                })
            //  upgrade
            case "update":
                return new Promise( ( ok, rjt) => {
                    crud.auth.query( `UPDATE ${table} SET ${OPTS}`, ( _err, _res) =>{
                        if( _err) rjt(_err)
                        ok(_res)
                        break
                    })
                })
            //  sophisticated deletes
            case "delete":
                return new Promise( ( ok, rjt) => {
                    args.auth.query( `DELETE ${table}`, ( _err, _res) =>{
                        if( _err) rjt(_err)
                        ok(_res)
                        break
                    })
                })    
            //  creates table        
            default:
                return new Promise( ( ok, rjt) => {
                    crud.auth.query( `CREATE ${table}`, ( _err, _res) =>{
                        if( _err) rjt(_err)
                        ok(_res)
                        break
                    })
                })
        }
    }
    // unorganized
    misc( args){}
}

if( process.env.NODE_ENV === 'production') {
    //Production env
}
else {
    //Development env
}
