package com.example.reactProject.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
	private String uid;
	private String password;
	private String uname;
	private String email;
	private LocalDateTime regDate;
	private int isDeleted;
	private String profile;
	private String github;
	private String insta;
	private String location;
}
