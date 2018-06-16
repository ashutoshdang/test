package org.sdrc.bbbp.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.access.ExceptionTranslationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter;


@Configuration
@Order(1)
@EnableWebSecurity
public class SdrcWebSecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private  UserAuthenticationProvider userAuthenticationProvider;
	
	

	@Autowired
	private void configureGlobal(AuthenticationManagerBuilder auth) {
		auth.authenticationProvider(userAuthenticationProvider);
	}
	
	
	/*
	 * To alter any configuration related to WEB-Application please update the configuration.
	 * This Authentication provider internally manages the authentication creation mechanism,
	 * using the UserRoleFeaturePermissionMapping tables. 
	 */
	 @Override
	 public void configure(HttpSecurity http) throws Exception {
	
		 http
			.httpBasic().and()
			.authorizeRequests()
				.antMatchers("/index.html", "/home.html", "/login.html", "/","/login", "/resources/**","/config/createAreaAndUsers","/config/testEmailLog").permitAll()
				.antMatchers("/css/**", "/js/**", "/assets/**","/assets/images/**", "**/favicon.ico").permitAll()
				.anyRequest().authenticated()
				.and()
				.csrf().disable();
				//.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
		 
		 http.logout().logoutUrl("/api/logout").invalidateHttpSession(true).deleteCookies("JSESSIONID","XSRF-TOKEN");
		 http.sessionManagement().sessionFixation().newSession();

	 }
	 
	 
	 	@Override
		public void configure(WebSecurity web) throws Exception {
			web.ignoring().antMatchers("/*.css");
			web.ignoring().antMatchers("/*.js");
			web.ignoring().antMatchers("/*.html");
			web.ignoring().antMatchers("/*.woff2");
			web.ignoring().antMatchers("/assets/*");
			web.ignoring().antMatchers("/*.jpg");
			web.ignoring().antMatchers("/*.ttf");
		}

	 
}
