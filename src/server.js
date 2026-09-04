import http from "http";

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/products") {
    return res.writeHead(200).end("Listagem de produtos");
  }

  if (method === "POST" && url === "/products") {
    return res.writeHead(201).end("Criação de produto");
  }

  return res.writeHead(404).end("Not Found");
});


server.listen(3333);