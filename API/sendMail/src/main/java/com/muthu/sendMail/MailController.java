package com.muthu.sendMail;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://muthukumaran-portfolio.web.app")
@RequestMapping("/mail")
public class MailController {

    @Autowired
    private EmailService mail;

    @PostMapping("/send")
    public boolean MailSender(@RequestBody UserDetails data){
        if(mail.sendMailToMe(data) && mail.sendMailToVsitor(data)) return true;
        return false;
    } 
}
