package com.example.reactProject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.reactProject.Dao.UserDao;
import com.example.reactProject.entity.User;

@Service
public class UserServiceImpl implements UserService{
@Autowired private UserDao userDao;
	@Override
	public List<User> getUserList() {
		return userDao.getUserList();
	}

}
