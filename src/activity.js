//  (c) Aiyegbayo Bolaji 27/12/2021

const { app } = require('../config')

const express = require('express'),
router = express.Router(),
path = require('path')

class Activity {
    constructor ( _packet) {
        //  set all routes
        //  view engines
        //  init storage
        //  distribution & public
        //  security***
        this.app = express()
        this.app.use(this.error)
        this.app.set('view engine', 'ejs')
        this.app.use(express.static(path.join(__dirname, './res')))
        this.app.set('views', path.join(__dirname, './views'))
        //  route handlers
        this.app.use( _packet.app.root, this.router( _packet.app.routes))
        this.app.use( _packet.admin.root, this.router( _packet.admin.routes))
        //  main app init
        this.app.get( '/', ( req, res) => {
            res.render('index')
        })
        this.app.listen( _packet.server.port, () => {
            console.log(`${_packet.server.name} has started running on port: ${_packet.server.port}...`)
        })
        console.log(this.app._router.stack)
    }

    error( err, req, res, next) {
        console.error(err)
        next()
    }

    router( _packet) {
        //  GET
        //  [middle: auth, session] //  if/else when checking json file
        return () => {
            for (let i = 0; i < _packet.get.length; i++) {
                router.get(_packet.get[i], _packet.gmiddle[i])
            }
            //  POST
            //  [middle: auth, session] //  if/else when checking json file
            for (let i = 0; i < _packet.post.length; i++) {
                router.post(_packet.post[i], _packet.pmiddle[i])
            }
        }
    }

}

module.exports = Activity