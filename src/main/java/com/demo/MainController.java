package com.demo;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@EnableAsync
public class MainController {

	 
    private React react = new React();

    
    @RequestMapping("/")
    public String index(Map<String, Object> model,HttpServletRequest request,HttpSession session) throws Exception {
    
        String loginPageHtml = react.renderLoginPage();
        model.put("content", loginPageHtml);
        return "index";
    }

    

}
