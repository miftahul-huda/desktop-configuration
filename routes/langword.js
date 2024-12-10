const CrudRouter = require("./crudrouter");

class LangWordRouter  {

    static getConfig()
    {
        return {};
    }

    static getRouter(logic)
    {
        
        var express = require('express');
        var router = express.Router();

        router.logic = logic;
        let me = this;

        router.get('', (req, res)=>{
            logic.session = req.session;
            let langID = req.query.lang;

            console.log("============================LANGID")
            console.log(langID)

            logic.findAllByLangID(langID).then((response)=>{
                res.send(response);
            }).catch((err)=>{
                console.log(err)
                res.send(err)
            })
            
        });

        router.post('/create', function (req, res){
            let o = req.body;
            let logic = router.logic;
            logic.session = req.session;
        
            logic.create(o).then(function (savedO)
            {
                res.send(savedO);
            }).catch(function (err){
                console.log("error")
                console.log(err)
                res.send(err);
            })
        })

        return router;
    }
}

module.exports = LangWordRouter;