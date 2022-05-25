json.extract! user, :id, :username, :email
json.friendsId user.friends.pluck(:friend_id)