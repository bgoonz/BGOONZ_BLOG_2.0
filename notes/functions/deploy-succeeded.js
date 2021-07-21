const contextCondition = 'production'
const stateCondition = 'ready'
const sitemapUrl = process.env.SITEMAP_URL

const axios = require('axios')

exports.handler = async (event) => {
  try {
    const {payload} = JSON.parse(event.body)
    const {state, context} = payload

    if (
      sitemapUrl &&
      state === stateCondition &&
      context === contextCondition
    ) {
      console.log(`Sending sitemap ping to google for ${sitemapUrl}`)

      await axios.get(`http://www.google.com/ping?sitemap=${sitemapUrl}`)

      return {
        statusCode: 200,
        body: `Submitted Successfully`,
      }
    }
    console.log('Conditions not met, not submitting')

    return {
      statusCode: 200,
      body: `Conditions not met, not submitting`,
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}
