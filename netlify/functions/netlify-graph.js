import {
    fetchExampleQuery
} from '../netlifyGraph' // make sure this is the path to your netlify/functions dir

exports.handler = async function(event, context) {
    const {
        errors,
        data
    } = await fetchExampleQuery({
        /* variables */
    }, {
        accessToken: event.netlifyGraphToken
    })

    return {
        statusCode: errors ? 500 : 200,
        body: JSON.stringify(errors || data),
        headers: {
            "Content-Type": "application/json"
        }
    }
}
accessToken: event.netlifyGraphToken
})

return {
    statusCode: errors ? 500 : 200,
    body: JSON.stringify(errors || data),
    headers: {
        "Content-Type": "application/json"
    }
}
}