package com.example.reactProject.Dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import com.example.reactProject.entity.User;

@Mapper
public interface UserDao {
	@Select ("Select * from users")
		List<User> getUserList();
}
