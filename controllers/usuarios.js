const { request, response } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { query, nombre = "No Name", apikey, page = 1, limit } = req.query;
  res.json({ msg: "get API controlador", query, nombre, apikey, page, limit });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;
  console.log("id", id);
  res.json({ msg: "put API controlador", id });
};

const usuariosPost = (req, res = response) => {
  const body = req.params.id;
  res.json({ msg: "post API controlador", body: body });
};

const usuariosDelete = (req, res = response) => {
  res.json({ msg: "delete API controlador" });
};

const usuariosPatch = (req, res = response) => {
  res.json({ msg: "patch API controlador" });
};
module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
