package com.example.reactProject.controller;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.reactProject.entity.User;
import com.example.reactProject.service.UserService;

@RestController // 화면을 렌더링을 하지 않고 데이터를 보내는 컨트롤러 (Like ResponseBody)
@RequestMapping("/react")
public class ReactController {
	@Autowired
	private UserService userService;

	@GetMapping("/data")
	public String data() {
		return "스프링부트에서 보낸 데이터";
	}

	@GetMapping("/json")
	public String json() {
		JSONObject jObj = new JSONObject();
		jObj.put("uid", "james");
		jObj.put("uname", "제임스");
		return jObj.toString();
	}

	@PostMapping("/form")
	public String form(String uid, String uname) {
		System.out.println("uid" + uid + ", uname=" + uname);
		return "uid" + uid + ", uname=" + uname;
	}

	// 파일 업로드 시
	@PostMapping("/multi")
	public String multi(String uid, String uname, MultipartFile file) {
		return "uid" + uid + ", uname=" + uname + ", file =" + file.getOriginalFilename();
	}

	@GetMapping("/user")
	public String user(String uid, String uname, String email) {
		List<User> userList = userService.getUserList(); 
		JSONObject jObj = new JSONObject();
		JSONArray jArr = new JSONArray();
		
		for (int i = 0; i < userList.size(); i++) {
			JSONObject jObject = new JSONObject();
			User user = userList.get(i);
			
			jObject.put("uid", user.getUid());
			jObject.put("uname", user.getUname());
			jObject.put("email", user.getEmail());
			jArr.add(jObject);
		}
		jObj.put("item", jArr);
		
		return jArr.toString();
	}
}
