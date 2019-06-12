export default {
    // 支持值为 Object 和 Array
    'GET /api/test': { users: [1, 2] },
  
    // GET POST 可省略
    '/api/test/1': { id: 1 },
  
    // 支持自定义函数，API 参考 express@4
    'POST /api/test/create': (req, res) => { res.end('OK'); },
};