class UserRoom < ApplicationRecord
  belongs_to :user
  belongs_to :room
  
  after_commit on: :create do
    room = Room.find(room_id)
    broadcast_append_to(
      'users_rooms_channel',
      partial: 'shared/room',
      locals: { room: room },
      target: "user_#{user_id}_rooms"
    )
  end
  
end
