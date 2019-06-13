#!/bin/bash

echo 'module.exports =' > db.js
jq '{users: [.tweets[] | .user]|unique} + {tweets: [.tweets| .[] | ( {user_id: .user.id} + with_entries(select(.key != "user")))]}' ../../../ecmascript/04-tweets/tweets.json >> db.js
