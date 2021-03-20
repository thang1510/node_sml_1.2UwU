const express = require('express');
const { default: slugify } = require('slugify');
const router = express.Router();
const postRout = slugify('this is operator-');

router.get('/', (req, res) => {    
    let home = [{
        title : "Ch'en",
        Tag : "Guard",
        position : "Melee",
        attack_type : "Physical Damage"
    },
    {
        title : "Nian",
        Tag : "Defender",
        position : "Melee",
        attack_type : "Physical Damage"
    },
    {
        title : "Dusk",
        Tag : "Caster",
        position : "Ranged",
        attack_type : "Arts Damage"
    },
    {
        title : "Hoshiguma",
        Tag : "Defender",
        position : "Melee",
        attack_type : "Physical Damage"
    }];
    res.render('./clientUwU/pages/index.ejs', {home:home, postRout:postRout});
})

router.get('/home', (req, res) => {
    let home = [{
        title : "Ch\'en",
        Tag : "Guard",
        position : "Melee",
        attack_type : "Physical Damage"
    },
    {
        title : "Nian",
        Tag : "Defender",
        position : "Melee",
        attack_type : "Physical Damage"
    },
    {
        title : "Dusk",
        Tag : "Caster",
        position : "Ranged",
        attack_type : "Arts Damage"
    },
    {
        title : "Hoshiguma",
        Tag : "Defender",
        position : "Melee",
        attack_type : "Physical Damage"
    }];
    res.render('./clientUwU/pages/index.ejs', {home:home, postRout:postRout});
})

router.get('/about', (req, res) => {
    res.render('./clientUwU/pages/about.ejs');
})

router.get('/contact', (req, res) => {
    res.render('./clientUwU/pages/contact.ejs');
})

router.get('/post', (req, res) => {
    res.render('./clientUwU/pages/post.ejs', {
        id:postRout,
        operator_name : "Ch\'en"
    });
})

router.get('/post/:postId', (req, res) => {
    let operator_name = req.params.postId.substring(postRout.length);
    res.render('./clientUwU/pages/post.ejs', {
        id:req.params.postId,
        operator_name:operator_name
    });
})

module.exports = router;