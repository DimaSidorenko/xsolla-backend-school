const express = require("express");
const router = express.Router();
const Market = require("./market");

router.get("/market/all", (req, res)=>{
    Market.find({})
        .then(item => {
            res.send(item);
        });
});

router.get("/market/:id", (req, res)=>{
    Market.findById({_id : req.params.id})
        .then(item => {
            res.send(item);
        });
});

router.get("/market/sku/:id", (req, res)=>{
    Market.find({sku : req.params.id})
        .then(item => {
            res.send(item);
        });
});

router.post("/market", (req, res)=>{
    Market.create(req.body)
        .then(item => {
          res.send(item.id);
        });
});

router.put("/market/sku/:id", (req, res)=>{
    Market.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            Market.findOne({_id: req.params.id})
                .then(item => {
                    res.send(item);
                });
        });
});

router.put("/market/:id", (req, res)=>{
    Market.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            Market.findOne({_id: req.params.id})
                .then(item => {
                    res.send(item);
                });
        });
});

router.delete("/market/sku/:id", (req, res)=>{
    Market.deleteOne({sku: req.params.id})
        .then(item => {
            res.send(item);
        });
});

router.delete("/market/:id", (req, res)=>{
    Market.deleteOne({_id: req.params.id})
        .then(item => {
            res.send(item);
        });
});

module.exports = router;