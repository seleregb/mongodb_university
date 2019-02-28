import MoviesDAO from "../src/dao/moviesDAO"

describe("Connection Pooling", async () => {
  beforeAll(async () => {
    await MoviesDAO.injectDB(global.mflixClient)
  })

  test("Connection pool size is 50", async () => {
    const response = await MoviesDAO.getConfiguration()
    expect(response.poolSize).toBe(50)
  })

  test("Auth source is admin", async () => {
    const response = await MoviesDAO.getConfiguration()
    expect(response.authSource).toBe("admin")
  })

  test("SSL is true", async () => {
    const response = await MoviesDAO.getConfiguration()
    expect(response.ssl).toBe(true)
  })
})
