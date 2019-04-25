#!/bin/bash
for i in {1..25}
do
  mosquitto_pub -t "test/foo" -m "" -q 2
done