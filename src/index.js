const mqtt = require("mqtt")

const clientId = `mqttTest${Math.random().toString(16).substr(2, 8)}`
const client = mqtt.connect("tcp://127.0.0.1", { clientId })

client.subscribe("test/foo", { qos: 2 })
client.on("message", handleMessage)

async function handleMessage() {
  const timestamp = new Date().toJSON()
  await client.publish(`test/retain/${timestamp}`, "foo", { qos: 2, retain: true })
  console.log(`${timestamp}: Message published`)
}

console.log("Waiting for messages...")
