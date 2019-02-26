json.set! @user.id do 
  json.extract! @user, :id, :username
end


# json.errors do 
#     json.array!  @user.errors.full_messages 
# end 