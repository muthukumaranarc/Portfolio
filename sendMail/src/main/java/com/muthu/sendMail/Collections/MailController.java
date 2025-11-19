package com.muthu.sendMail.Collections;

import com.muthu.sendMail.Services.MainService;
import com.muthu.sendMail.Data.UserInput;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/")
public class MailController {

    @Autowired
    private MainService service;

    @PostMapping("/send")
    public boolean MailSender(@RequestBody UserInput data){
        return service.sendMailToMe(data) && service.sendMailToVisitor(data);
    }

    @GetMapping("/leetcode")
    public ResponseEntity<String> leetCode() {
        return service.getStats();
    }
}
