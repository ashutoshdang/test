package org.sdrc.bbbp.security;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.sdrc.bbbp.domain.LoginAudit;
import org.sdrc.bbbp.domain.User;
import org.sdrc.bbbp.models.UserModel;
import org.sdrc.bbbp.repository.LoginAuditRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

/**
 * @author Azaruddin (azaruddin@sdrc.co.in)
 * @author Subham Ashish (subham@sdrc.co.in)
 * 
 * @Description HttpSession Listeners implemented to capture devices used to login, browsers used to login, and
 *              login-logout time.
 */

@Configuration
public class HttpSessionConfig {

	@Autowired
	private LoginAuditRepository loginAuditRepository;

	@Bean // bean for http session listener
	@Transactional
	public HttpSessionListener httpSessionListener() {

		return new HttpSessionListener() {

			@Override
			public void sessionCreated(HttpSessionEvent se) { // This method will be called when session created
				UserModel user = (UserModel) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

				HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();

				LoginAudit audit = new LoginAudit();
				audit.setActive(true);

				audit.setIpAddress(request.getRemoteAddr());

				audit.setLoggedInDate(new Date(se.getSession().getCreationTime()));
				audit.setSessionId(se.getSession().getId());

				User userDomain = new User();
				userDomain.setUserId(user.getUserId());
				audit.setUser(userDomain);

				audit.setUserAgent(request.getHeader("User-Agent"));

				try {
					audit.setActualUserAgent(browserInformation(request.getHeader("User-Agent")));
				} catch (Exception e) {
					audit.setActualUserAgent("E-Parse ex : " + request.getHeader("User-Agent"));
				}

				audit.setUsername(user.getUsername());

				audit = loginAuditRepository.save(audit);

				user.setUserLoginMetaId(audit.getId());

			}

			@Override
			public void sessionDestroyed(HttpSessionEvent se) {
				LoginAudit audit = loginAuditRepository.findBySessionIdAndActiveTrue(se.getSession().getId());
				audit.setActive(false);
				audit.setLogoutDate(new Date());
				loginAuditRepository.save(audit);
			}
		};
	}

	private String browserInformation(String browserDetails) {

		String browserInfo = browserDetails;
		String browser = "";

		if (browserInfo.contains("Mobi")) {
			if (browserInfo.contains("Edge") || browserInfo.contains("MSIE")) {
				browser = "Mobile: " + browserDetails.substring(browserDetails.indexOf("("), browserDetails.indexOf(")") + 1).concat(" ").concat((browserDetails.substring(browserDetails.indexOf("Edge")).split(" ")[0]));
			} else if (browserInfo.contains("Gecko") && browserInfo.contains("rv:")) {
				browser = "Mobile: " + browserDetails.substring(browserDetails.indexOf("("), browserDetails.indexOf(")") + 1).concat(" ").concat((browserDetails.substring(browserDetails.indexOf("Firefox")).split(" ")[0]));
			} else if (browserInfo.contains("Safari") && browserInfo.contains("AppleWebKit") && !browserInfo.contains("Chrome")) {
				browser = "Mobile: " + browserDetails.substring(browserDetails.indexOf("("), browserDetails.indexOf(")") + 1).concat(" ").concat((browserDetails.substring(browserDetails.indexOf("Safari")).split(" ")[0]));
			} else if (browserInfo.contains("Mini")) {
				browser = "Mobile: " + browserDetails.substring(browserDetails.indexOf("("), browserDetails.indexOf(")") + 1).concat(" ").concat((browserDetails.substring(browserDetails.indexOf("Opera Mini")).split(" ")[0]));
			} else if (browserInfo.contains("Chrome")) {
				browser = "Mobile: " + browserDetails.substring(browserDetails.indexOf("("), browserDetails.indexOf(")") + 1).concat(" ").concat(browserDetails.substring(browserDetails.indexOf("Chrome")).split(" ")[0]);
			} else
				browser = "Mobile: " + browserDetails.substring(browserDetails.indexOf("("), browserDetails.indexOf(")") + 1);
		} else if (browserInfo.contains("Nexus") && browserInfo.contains("Chrome")) {
			browser = "Mobile: " + browserDetails.substring(browserDetails.indexOf("("), browserDetails.indexOf(")") + 1).concat(" ").concat((browserDetails.substring(browserDetails.indexOf("Chrome")).split(" ")[0]));
		} else if (browserInfo.contains("Nexus") && browserInfo.contains("OPR")) {
			browser = "Mobile: " + browserDetails.substring(browserDetails.indexOf("("), browserDetails.indexOf(")") + 1).concat(((browserDetails.substring(browserDetails.indexOf("OPR")).split(" ")[0])).replace("OPR", "Opera"));
		} else if (browserInfo.contains("Nexus")) {
			browser = "Mobile: " + browserDetails.substring(browserDetails.indexOf("("), browserDetails.indexOf(")") + 1);
		} else if (browserInfo.contains("Tab") || browserInfo.contains("TAB")) {
			browser = "Mobile: " + browserDetails.substring(browserDetails.indexOf("("), browserDetails.indexOf(")") + 1);
		} else if (browserInfo.contains("Edge")) {
			browser = "Computer: " + (browserDetails.substring(browserDetails.indexOf("Edge")).split(" ")[0]);
		} else if (browserInfo.contains("MSIE")) {
			browser = "Computer: " + (browserDetails.substring(browserDetails.indexOf("MSIE")).split(" ")[0]);
		} else if (browserInfo.contains("Gecko") && browserInfo.contains("rv:")) {
			browser = "Computer: " + (browserDetails.substring(browserDetails.indexOf("Firefox")).split(" ")[0]);

		} else if (browserInfo.contains("Safari") && browserInfo.contains("AppleWebKit") && !browserInfo.contains("Chrome")) {
			// Safari Computer Browser
			browser = "Computer: " + browserDetails.substring(browserDetails.indexOf("("), browserDetails.indexOf(")") + 1).concat((browserDetails.substring(browserDetails.indexOf("Safari")).split(" ")[0]));
		} else if (browserInfo.contains("Opera") || browserInfo.contains("OPR")) {
			if (browserInfo.contains("OPR")) {
				// desktop
				browser = "Computer: " + ((browserDetails.substring(browserDetails.indexOf("OPR")).split(" ")[0])).replace("OPR", "Opera");
			}
			else
				browser = browserInfo;

		} else if (browserInfo.contains("Chrome")) {
			browser = "Computer: " + (browserDetails.substring(browserDetails.indexOf("Chrome")).split(" ")[0]);
		} else if ((browserInfo.indexOf("Mozilla/7.0") > -1) || (browserInfo.indexOf("Netscape6") != -1) || (browserInfo.indexOf("Mozilla/4.7") != -1) || (browserInfo.indexOf("Mozilla/4.78") != -1) || (browserInfo.indexOf("Mozilla/4.08") != -1) || (browserInfo.indexOf("Mozilla/3") != -1)) {

			browser = "Netscape-?";

		} else if (browserInfo.contains("rv")) {
			browser = "IE";
		} else {
			browser = "UnKnown, More-Info: " + browserDetails;
		}

		return browser;

	}
}
