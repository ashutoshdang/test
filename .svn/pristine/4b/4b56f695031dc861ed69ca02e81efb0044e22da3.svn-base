package org.sdrc.bbbp.web;

import org.sdrc.bbbp.domain.User;
import org.sdrc.bbbp.exceptions.UUIDAuthenticationException;
import org.sdrc.bbbp.models.UserModel;
import org.sdrc.bbbp.repository.UserRepository;
import org.sdrc.bbbp.service.ConfigurationService;
import org.sdrc.bbbp.service.MobileUserAuthenticationService;
import org.sdrc.bbbp.service.RestExceptionHandlerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class WebController {

	@Autowired
	ConfigurationService configurationService;
	
	@Autowired
	RestExceptionHandlerService restExceptionHandlerService;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	MobileUserAuthenticationService mobileUserAuthenticationService;
	
	
	@RequestMapping("/user")
	public UserModel login() {
		return (UserModel) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	}
	
	@RequestMapping("/mobileUser")
	public UserModel mobileUserLogin(@RequestParam("uuid") String uuid) {
		UserModel user = (UserModel) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		User existUUID = userRepository.findByUuid(uuid);
		if (existUUID == null) {//when existing uuid is not present 
			if (uuid.equals(user.getUuId()) || user.getUuId() == null) {//when user is a newuse or uuid is equals to user uuid
				User userDomain =null;
				if (user.getUuId() == null) {//when newuser ,uuid persist into DB
					userDomain = userRepository.findByUserId(user.getUserId());
					userDomain.setUuId(uuid);
					userRepository.save(userDomain);
				}
				if(userDomain!=null) {
					mobileUserAuthenticationService.authenticateUserAgainstPasswordChange();
				}
				return (UserModel) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			}else{
				throw new UUIDAuthenticationException("This user is already logged in from other device");
			}
		} else {
			if (existUUID.getUserName().equals(user.getUsername())) {//when existing uuid user is same as user logged in
				mobileUserAuthenticationService.authenticateUserAgainstPasswordChange();
				return (UserModel) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			} else {
				throw new UUIDAuthenticationException("Another user is already logged in this device, kindly use another device");
			}
		} 

	}
	
	
	

}
