exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Dongit',
      age: 25,
      email: 'rlagusehd45@naver.com'
    })
  }
}