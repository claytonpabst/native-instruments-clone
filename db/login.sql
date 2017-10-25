select * from users
where username ilike $1 and
userpassword ilike $2