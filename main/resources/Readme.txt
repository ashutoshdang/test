Query to find duplicate usernames :

select * from (select user_name,count(*) from user_tbl u group by user_name) as uu where uu.count > 1  