#!/bin/bash

jq '{users: [.tweets[] | .user]|unique} + {tweets: [.tweets| .[] | ( {userId: .user.id} + with_entries(select(.key != "user")))]}' ../../../ecmascript/04-tweets/tweets.json > db.json
