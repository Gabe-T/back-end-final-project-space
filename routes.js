"use strict";

const express = require("express");
const routes = express.Router();
const pool = require("./connection");

routes.get("/patches", (req, res) => {
  let query = `SELECT * FROM patch_table`;
  pool.query(query).then((response) => {
    res.json(response.rows);
  });
});

routes.post("/patches", (req, res) => {
  let query = `INSERT INTO patch_table (patch_name, osc1_pitch_value, osc1_filter_lfo_value, osc1_level_value, osc2_filter_value, osc2_level_value, osc2_interval_value, osc2_ad_value, osc2_type_value, osc3_filter_value, osc3_level_value, osc3_interval_value, osc3_type_value, osc3_ad_value, noise_level_value, noise_filter_value, reverb_level_value, delay_level_value, delay_time_value, master_volume_value, master_filter_value, kick_vol_value, bpm_value) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)`;
  console.log(req.body);
  pool
    .query(query, [
      req.body.patch_name,
      req.body.osc1_pitch_value,
      req.body.osc1_filter_lfo_value,
      req.body.osc1_level_value,
      req.body.osc2_filter_value,
      req.body.osc2_level_value,
      req.body.osc2_interval_value,
      req.body.osc2_ad_value,
      req.body.osc2_type_value,
      req.body.osc3_filter_value,
      req.body.osc3_level_value,
      req.body.osc3_interval_value,
      req.body.osc3_type_value,
      req.body.osc3_ad_value,
      req.body.noise_level_value,
      req.body.noise_filter_value,
      req.body.reverb_level_value,
      req.body.delay_level_value,
      req.body.delay_time_value,
      req.body.master_volume_value,
      req.body.master_filter_value,
      req.body.kick_vol_value,
      req.body.bpm_value,
    ])
    .then((response) => {
      res.status(201);
      res.json(req.body);
    });
});

module.exports = routes;
