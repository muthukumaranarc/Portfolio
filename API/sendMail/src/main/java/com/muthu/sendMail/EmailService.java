package com.muthu.sendMail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    
    public boolean sendMailToMe(UserDetails data){
        String body = "Hello Muthukumaran,\n\n" +
            "A new visitor has explored your portfolio and shared their details:\n\n" +
            "Name: " + data.name + "\n" +
            "Experience: " + data.experience + "\n" +
            "Role in IT: " + data.roleInIT + "\n" +
            "Email: " + data.email + "\n" +
            "Feedback on Portfolio: " + data.feedback + "\n" +
            "Their Portfolio (if any): " + data.link + "\n\n" +
            "Make sure to check out their profile and maybe connect!\n\n" +
            "Stay consistent,\n" +
            "Your Portfolio Bot"
        ;
        return sendMail(body, "muthukumaranmeiyappan00@gmail.com");
    }

    public boolean sendMailToVsitor(UserDetails data){
        String body = "Hi " + data.name + ",\n\n" +
            "Thank you for taking the time to visit my portfolio. I truly appreciate your interest.\n\n" +
            "Your feedback: \"" + data.feedback + "\"\n\n" +
            "It's valuable to receive thoughts from professionals like you in the field of " + data.roleInIT + " with " + data.experience + " of experience.\n\n" +
            "If you'd like to stay connected or collaborate in the future, feel free to reach out anytime.\n\n" +
            "Wishing you continued success in your career.\n\n" +
            "Warm regards,\n" +
            "Muthukumaran\n" +
            "Email: muthukumaranarc00@gmail.com\n" +
            "Portfolio: https://yourportfolio.link"
        ;
        return sendMail(body, data.email);
    }

    @Autowired
    private JavaMailSender mailSender;

    private boolean sendMail(String body, String to){
       try{
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("muthukumaranarc00@gmail.com");
        message.setTo(to);
        message.setSubject("Your Portfolio");   
        message.setText(body);
        mailSender.send(message);
        return true;
       }
       catch(Exception e){ 
        return false;
       }
    }

}