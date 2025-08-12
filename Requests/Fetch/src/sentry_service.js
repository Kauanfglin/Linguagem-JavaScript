export async function getSentry_object() {
    let response = await fetch (" https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY")//api da nasa
    let result = await response.json()
    return result["sentry_objects"]

}