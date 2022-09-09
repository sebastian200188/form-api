const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM registro', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)

        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO registro set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('form added!')

        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM registro WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('form excluded!')

        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM registro WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('form excluded!')

        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE registro set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('form update!')

        })
    })
})


module.exports = routes