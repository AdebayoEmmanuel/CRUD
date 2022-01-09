//  Configure this style to suit data handling procedures
module.exports = {
    auth: {
        type: 0,
        host: "localhost",
        user: "root",
        password: "",
        port: "3306",
        database: 0
    },
    options: {
        database: "",
        table: "",
        operations: ""
    },
    app: {
        static: [
            "./res/public"
        ],
        root: "/app",
        routes: {
            get: [
                '/',
                '/register'
            ],
            gmiddle: [
                ( req, res)=>{
                    res.render('app')
                },
                ( req, res) => {
                    res.render('app/register')
                }
            ],
            post: [],
            pmiddle: []
        }
    },
    admin: {
        root: "/admin",
        routes: {
            get: [],
            gmiddle: [],
            post: [],
            pmiddle: []
        }
    },
    server: {
        port: 7000,
        name: "app"
    }
}